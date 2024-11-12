import { type ReactElement } from "react";
import styles from "./LoginForm.module.css";
import { signIn, auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { Text } from "../Text/Text";
import { CustomLink } from "../Link/Link";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { FormPopUp } from "../FormPopUp/FormPopUp";

export interface Session {
  user?: {
    id?: string;
    sessionData?: {
      acces_token: string;
      message: string;
    };
    expires?: string;
  };
  error?: string;
}

export default async function LoginForm(): Promise<ReactElement> {
  const session: Session = (await auth()) ?? { user: { id: "", expires: "" } };
  console.log("Esta es la sesion:", session);
  
  if (session?.user?.sessionData) redirect("/");

  return (
    <div className={styles.login}>
      <form
        className={styles.loginForm}
        action={async (formData: FormData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <Text mText="Iniciar sesión" fontSize="30px" color="black" />
        <div className={styles.formText}>
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
        <Button variant="contained" color="primary" type="submit">
          Ingresar
        </Button>
        <div className={styles.redirect}>
          <Text mText="No tienes una cuenta?" fontSize="15px" color="black" />
          <CustomLink
            text="Registrate"
            color="#a5b0c8"
            hColor="#a5b0c8"
            hDecoration="underline"
            href="/login?method=register"
          />
        </div>
        {session?.error && <FormPopUp errorMessage={session.error} />}
      </form>
    </div>
  );
}
