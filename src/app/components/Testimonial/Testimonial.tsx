import type { ReactElement } from "react";
import styles from "./testimonial.module.css";
import { Text } from "../Text/Text";
import { FeatureCard } from "../FeatureCard/FeatureCard";

export const Testimonial = (): ReactElement => {
  return (
    <section className={styles.testimonial}>
      <Text mText="Servicios disponibles" fontSize="30px" fontWeight="700" />

      <div className={styles.cards}>
      <FeatureCard        
        // imageUrl="https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageUrl="https://unilimpio.com/static/1792bd5b8c5d9af15c71547047d56156/b7dec/huella-de-carbono-dentro-de-las-empresas.webp"
        title="Seguimiento de huella de carbono"  
        href="/dashboard/consumption"      
      />
      <FeatureCard 
        imageUrl="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"       
        title="Información de rutas"        
      />
      <FeatureCard        
        imageUrl="https://image.cdn2.seaart.me/2024-11-19/csucqe5e878c73b0vltg-1/388cd8b154d117e29123418c7f9f4296_high.webp"
        title="Prediccion de tiempos"        
        href="/dashboard/estimation"
      />
      </div>
    </section>
  );
};
