"use client"

import { type ReactElement } from "react";
import styles from "./Hero.module.css";
import { InfoTag } from "../InfoTag/InfoTag";
import { Btn } from "../Btn/Btn";
import { HeroM } from "./Hero.model";

export const PageHero = ({action}:HeroM): ReactElement => {            
  return (
    <div className={styles.mainHero}>      
      <pre>        
      </pre>
      <div className={styles.welcomeText}>        
        <InfoTag text="Hello PJIC" />
        <div className={styles.description}>
          <h1 className={styles.title}>Bienvenido a Tride</h1>
          <p className={styles.descriptionText}>
            La aplicacion inteligente de transporte
          </p>
          <Btn
            text="Descubre nuestros servicios"
            bg="#0a1a0f"
            color="#fff"
            hBg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,26,15,1) 35%, rgba(0,212,255,1) 100%)"  
            padding="10px 20px"          
            borderRadius="10px"            
            onClick={action}            
          />
        </div>
      </div>
    </div>
  );
};
