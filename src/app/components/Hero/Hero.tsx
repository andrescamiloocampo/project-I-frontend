import type { ReactElement } from "react";
import styles from "./Hero.module.css";
import { InfoTag } from "../InfoTag/InfoTag";
import { Btn } from "../Btn/Btn";

export const PageHero = async(): Promise<ReactElement> => {      
  return (
    <div className={styles.mainHero}>         
      <pre>        
      </pre>
      <div className={styles.welcomeText}>        
        <InfoTag text="GPS tracking" />
        <div className={styles.description}>
          <h1 className={styles.title}>Conectamos tu viaje sin límites.</h1>
          <p className={styles.descriptionText}>
            Project I conecta todas las plataformas de transporte de la región.
          </p>
          <Btn
            text="Descubrelo ahora"
            bg="#0a1a0f"
            color="#fff"
            hBg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,26,15,1) 35%, rgba(0,212,255,1) 100%)"  
            padding="10px 20px"          
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};
