'use client'
import type { ReactElement } from "react";
import styles from "./FeatureCard.module.css";
import { Text } from "../Text/Text";
import type { FeatureCardM } from "./FeatureCard.model";
import { Img } from "../Img/Img";
import { useRouter } from "next/navigation";

export const FeatureCard = ({
  title,
  description,
  imageUrl,
  href=''
}: FeatureCardM): ReactElement => {
  const router = useRouter();
  return (
    <div className={styles.featureCard} onClick={()=>router.push(href)}>
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
