import styles from "./page.module.css";
import { FootPrint } from "@/app/components/FootPrint/FootPrint";
import { type ReactElement } from "react";

export default async function ConsumptionPage(): Promise<ReactElement> {
  return (
    <div className={styles.mainContainer}>
      <FootPrint/>
    </div>
  );
}
