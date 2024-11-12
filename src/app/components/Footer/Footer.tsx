import { ReactElement } from "react";
import styles from './Footer.module.css';

export const Footer = ():ReactElement => {
    return(
        <div className={styles.footer}>
            <div className={styles.authors}>
                <p>andres_programacion</p>  
                <p>juan_ofimatica</p>                        
            </div>
        </div>
    )

}