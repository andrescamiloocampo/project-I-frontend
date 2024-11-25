import { ReactElement } from "react";
import styles from './Footer.module.css';
import { MdOutlineEmail } from "react-icons/md";

export const Footer = ():ReactElement => {
    return(
        <div className={styles.footer}>            
            <div className={styles.authors}>
                <div className={styles.author}>
                    <p>Andres Ocampo</p>  
                    <p><MdOutlineEmail size={16}/> andres_ocampo82211@elpoli.edu.co</p>
                </div>
                <div className={styles.author}>
                    <p>Juan Pablo Castaño</p>                           
                    <p><MdOutlineEmail size={16}/> juan_castano82211@elpoli.edu.co</p>
                </div>
            </div>
            <p className={styles.copy}>
            Copyright © 2024
            </p>
        </div>
    )

}