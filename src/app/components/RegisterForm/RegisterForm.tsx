import { type ReactElement } from "react";
import styles from './RegisterForm.module.css'
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { Text } from "../Text/Text";
import { CustomLink } from "../Link/Link";
import { createUser } from "../../../../api/user/createUser";
import { Button } from "@mui/material";
import { Session } from "../LoginForm/LoginForm";

export const RegisterForm = async(): Promise<ReactElement> => {
  const session: Session = (await auth()) ?? { user: { id: "", expires: "" } };
  
  if (session?.user?.sessionData) redirect("/");
  return (
    <div className={styles.login}>
      <form
        className={styles.loginForm}
        action={async (formData: FormData) => {
          "use server";
          const response = await createUser(formData);
          console.log(response);
          if (!response) {
            console.log("Error creating user");
          }
          redirect('/login?method=login');
        }}
      >
        <Text mText="Registrarse" fontSize="30px" color="black" />
        <div className={styles.formText}>
          <label htmlFor="username">
            <Text mText="Nombre" color="black" />
          </label>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Ingrese su nombre"
            name="name"
          />

          <label htmlFor="username">
            <Text mText="Apellido" color="black" />
          </label>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Ingrese su apellido"
            name="lastName"
          />

          <label htmlFor="email">
            <Text mText="Email" color="black" />
          </label>
          <input
            type="email"
            className={styles.formInput}
            placeholder="Ingrese su correo"
            name="email"
          />

          <label htmlFor="username">
            <Text mText="Nombre de usuario" color="black" />
          </label>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Ingrese su usuario"
            name="username"
          />

          <label htmlFor="password">
            <Text mText="Contraseña" color="black" />
          </label>
          <input
            type="password"
            className={styles.formInput}
            placeholder="Ingrese su contraseña"
            name="password"
          />
        </div>
        {/* <Btn
          color=""
          text="Ingresar"
          bg="#1A2130"
          hBg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,33,48,1) 35%, rgba(0,212,255,1) 100%)"
        /> */}

        <Button variant="contained" color="primary" type="submit">Ingresar</Button>
        <div className={styles.redirect}>
          <Text
            mText="Ya eres parte de la familia?"
            fontSize="15px"
            color="black"
          />
          <CustomLink
            text="Inicia sesión"
            color="#a5b0c8"
            hColor="#a5b0c8"
            hDecoration="underline"
            href="/login?method=login"
          />
        </div>
      </form>
    </div>
  );
}
