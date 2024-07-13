import type { ReactElement } from "react";
import styles from "./FeatureCard.module.css";
import Image from "next/image";
import { Text } from "../Text/Text";
import type { FeatureCardM } from "./FeatureCard.model";
import { Img } from "../Img/Img";

export const FeatureCard = ({
  title,
  description,
  imageUrl,
}: FeatureCardM): ReactElement => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.imageContainer}>
        <Img src={imageUrl ?? ""} alt="" className={styles.image}/>
      </div>
      <div className={styles.description}>
        <Text mText={title ?? ""} fontWeight="700" fontSize="18px"/>
        <Text mText={description ?? ""} />
      </div>
    </div>
  );
};
