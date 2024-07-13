import type { ReactElement } from "react";
import styles from "./testimonial.module.css";
import { Text } from "../Text/Text";
import { FeatureCard } from "../FeatureCard/FeatureCard";

export const Testimonial = (): ReactElement => {
  return (
    <section className={styles.testimonial}>
      <Text mText="¿Que es Project I?" fontSize="30px" fontWeight="700" />

      <div className={styles.cards}>
      <FeatureCard        
        imageUrl="https://images.unsplash.com/photo-1625217527288-93919c99650a?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        description="Maiores autem libero laborum rem nam nisi repellendus eius ipsa repellat quos? Vero beatae amet consequatur tempore sint sapiente, nisi ad ab?"
      />
      <FeatureCard 
        imageUrl="https://images.unsplash.com/photo-1482287068671-7fb7325e1a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"       
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        description="Maiores autem libero laborum rem nam nisi repellendus eius ipsa repellat quos? Vero beatae amet consequatur tempore sint sapiente, nisi ad ab?"
      />
      <FeatureCard        
        imageUrl="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        description="Maiores autem libero laborum rem nam nisi repellendus eius ipsa repellat quos? Vero beatae amet consequatur tempore sint sapiente, nisi ad ab?"
      />
      </div>
    </section>
  );
};
