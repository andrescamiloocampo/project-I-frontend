import { type ReactElement } from "react";
import styles from "./NavBar.module.css";
import { signOut } from "../../../../auth";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { GiPlanetCore } from "react-icons/gi";
import { CustomLink } from "../Link/Link";
import { auth } from "../../../../auth";
import { Session } from "../LoginForm/LoginForm";
import { getUserSecure } from "../../../../api/user/getUserSecure";
import { AiOutlineLogout } from "react-icons/ai";
import { Btn } from "../Btn/Btn";
import Link from "next/link";

export const NavBar = async (): Promise<ReactElement> => {
  const session: Session = (await auth()) ?? { user: { id: "", expires: "" } };
  const user = await getUserSecure();

  return (
    <nav className={styles.mainNav}>
      <div className={styles.optionsContainer}>
        <Link href='/' className={styles.title}>            
            <GiPlanetCore size={'2rem'}/>          
            <p>Tride</p>
        </Link>

        {/* <div className={styles.options}>          
          <CustomLink text="Explorar" hDecoration="underline" hColor="#FDFFE2" href="/dashboard"/>          
          <CustomLink text="Servicios" hDecoration="underline" hColor="#FDFFE2" href="/dashboard/services"/>          
        </div> */}
      </div>

      <div className={styles.searchOptions}>        
        <div className={styles.buttons}>        
          {user.username}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >              
              {/* <Button type="submit" variant="contained" color="primary"  endIcon={<AiOutlineLogout/>}/>                             */}
              <Btn borderRadius="6rem" bg="white" hBg="white" icon={<AiOutlineLogout size={'100%'} color="black"/>} />
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
