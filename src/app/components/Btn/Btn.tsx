import type { ReactElement } from "react";
import type { BtnM } from "./Btn.model";
import styles from "./Btn.module.css";
import type { cssVar } from "../types/cssVar";

export const Btn = ({
  text,
  bg,
  color,
  border,
  onClick,
  padding,
  borderRadius,
  fontSize,
  fontWeigth,
  hColor,
  hBg,
}: BtnM): ReactElement => {
  const cssStyles: cssVar = {
    "--bg": bg,
    "--color": color,
    "--border": border,
    "--padding": padding,
    "--radius": borderRadius,
    "--font-size": fontSize,
    "--font-weigth": fontWeigth,
    "--hColor": hColor,
    "--hBg": hBg,
  };

  return (
    <button onClick={onClick} className={styles.btn} style={cssStyles}>
      {text}
    </button>
  );
};
