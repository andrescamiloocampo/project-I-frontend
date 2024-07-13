import type { ReactElement } from "react";
import styles from "./InfoTag.module.css";
import type { InfoTagM } from "./InfoTag.model";

export const InfoTag = ({text}:InfoTagM): ReactElement => {
  return (
    <div className={styles.infoTag}>
        <div className={styles.new}>new</div>
        {text}
    </div>
  );
};
