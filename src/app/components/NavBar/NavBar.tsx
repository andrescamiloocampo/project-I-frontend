import { type ReactElement } from "react";
import styles from "./NavBar.module.css";
import { signOut } from "../../../../auth";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { SearchInput } from "../SearchInput/SearchInput";
import { Btn } from "../Btn/Btn";
import { CustomLink } from "../Link/Link";
import { auth } from "../../../../auth";
import { navLinks } from "@/app/datasources/navigation/navLinks";

export const NavBar = async (): Promise<ReactElement> => {
  const session = await auth();
  return (
    <nav className={styles.mainNav}>
      <div className={styles.optionsContainer}>
        <div className={styles.title}>
            <RectangleGroupIcon width={"2rem"} height={"2rem"} />
            <p>UnifiCars</p>
        </div>

        <div className={styles.options}>          
          <CustomLink text="Explorar" hDecoration="underline" hColor="#FDFFE2"/>
          <CustomLink text="Directorio" hDecoration="underline" hColor="#FDFFE2"/>
          <CustomLink text="Servicios" hDecoration="underline" hColor="#FDFFE2" href="/dashboard/services"/>
          <CustomLink text="Trabajos" hDecoration="underline" hColor="#FDFFE2"/>          
        </div>
      </div>

      <div className={styles.searchOptions}>
        <SearchInput />

        <div className={styles.buttons}>
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Btn text="Cerrar sesión" border="solid 1px white" />
            </form>
          ) : (
            <>
              <CustomLink text="Iniciar sesión" bg="#5A72A0" href="/login" />
              <CustomLink text="Registrarse" bg="#83B4FF" />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
