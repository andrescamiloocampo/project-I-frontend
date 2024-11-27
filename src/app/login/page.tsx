import { ReactElement } from "react";
import LoginForm, { type Session } from "../components/LoginForm/LoginForm";
import styles from "./loginStyles.module.css";
import Button from "@mui/material/Button";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import Link from "next/link";
import { Text } from "../components/Text/Text";
import Image from "next/image";
import bus from "../../../public/bus.png";
import stop from "../../../public/stop.jpg";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { method: string };
}): Promise<ReactElement> {
  const session: Session = (await auth()) ?? { user: { id: "", expires: "" } };
  console.log("Esta es la sesion:", session);

  if (session?.user?.sessionData) redirect("/");
  const method = searchParams.method;
  console.log(method);
  return (
    <div className={styles.mainContent}>
      <div className={`${styles.options}`}>
        <div className={styles.imageContainer}>
          <Image
            src={stop}
            alt="stop"
            width={0}
            height={0}
            objectFit="cover"
            style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
          />
        </div>
        <Link href="?method=login" passHref className={styles.btns}>
          <Button variant="contained">Iniciar sesión</Button>
        </Link>
        <Link href="?method=register" passHref className={styles.btns}>
          <Button variant="contained">Registrarse</Button>
        </Link>
      </div>

      {!method && (
        <div
          className={`${styles.transitionForm} ${
            !method ? styles.animate : ""
          }`}
        >
          <div className={method ? styles.hidden : ""}>
            <div className={styles.welcome}>
              <Text
                mText="¡Bienvenido!"
                color="black"
                fontWeight="600"
                fontSize="60px"
              />
              <Text
                mText="Tride la plataforma que lo hace por usted 🚌"
                color="black"
                fontWeight="400"
                fontSize="17px"
              />
              <Image src={bus} alt="Imagen de un bus" width={200} height={50} />

              <div className={styles.welcomeButtons}>
              <Link href="?method=login" passHref className={styles.btns}>
                <Button variant="contained">Iniciar sesión</Button>
              </Link>
              <Link href="?method=register" passHref className={styles.btns}>
                <Button variant="contained">Registrarse</Button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {method === "login" && (
        <div
          className={`${styles.transitionForm} ${method ? styles.animate : ""}`}
        >
          <div className={method !== "login" ? styles.hidden : ""}>
            <LoginForm />
          </div>
        </div>
      )}

      {method === "register" && (
        <div
          className={`${styles.transitionForm} ${method ? styles.animate : ""}`}
        >
          <div className={method !== "register" ? styles.hidden : ""}>
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
}
