import { type ReactElement } from "react";
import styles from './loginStyles.module.css';
import { signIn,auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Btn } from "../components/Btn/Btn";
import { Text } from "../components/Text/Text";
import { CustomLink } from "../components/Link/Link";
import { useState } from "react";

export interface Session {
    user?: {
        id?: string;
        sessionData?: {
            acces_token: string;
            message: string;
        };
        expires?: string; 
    }
}

export default async function LoginPage(): Promise<ReactElement> {
    
    const session:Session = await auth() ?? {user:{id:'',expires:''}};    
    console.log(session);
    if(session?.user?.sessionData) redirect('/');

    if(!session.user?.sessionData) {
        console.log('Credenciales incorrectas');
    }
    return (
        <div className={styles.login}>                        
            <form className={styles.loginForm} action={async (formData:FormData)=>{
                'use server'
                await signIn('credentials',formData)                                
            }}>
                <Text mText="Iniciar sesión" fontSize="30px" color="black"/>
                <div className={styles.formText}>
                    <label htmlFor="username" >
                        <Text mText="Nombre de usuario" color="black"/>
                    </label>
                    <input type="text" className={styles.formInput} placeholder="Ingrese su usuario" name='username' />

                    <label htmlFor="password" >
                        <Text mText="Contraseña" color="black"/>
                    </label>
                    <input type="password" className={styles.formInput} placeholder="Ingrese su contraseña" name='password' />                    
                </div>                
                <Btn color="" text="Ingresar" bg="#1A2130" hBg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,33,48,1) 35%, rgba(0,212,255,1) 100%)"/>
                <div className={styles.redirect}>
                    <Text mText="No tienes una cuenta?" fontSize="15px" color="black"/>
                    <CustomLink text="Registrate" color="#a5b0c8" hColor="#a5b0c8" hDecoration="underline" href="/register"/>
                </div>
            </form>                           
        </div>
    );
}
