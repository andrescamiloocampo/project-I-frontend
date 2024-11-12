import type { ReactElement } from "react";
import type { ModalM } from "./Modal.model";
import { FaRegClock } from "react-icons/fa";
import styles from "./Modal.module.css";

export const Modal = ({
  isOpen = false,
  action,
  real = 0,
  expected = 0,
  close
}: ModalM): ReactElement => {
  return (
    <>
      {isOpen && (
        <div className={styles.portal}>
          <div className={styles.modal}>
          <FaRegClock size={'3rem'}/>
            <div className={styles.textContainer}>
              <p>Tiempo deseable: <span>{expected} minutos</span></p>
              <p>Tiempo real: <span>{real} minutos</span></p>
              <p>Tiempo perdido: <span>{real - expected} minutos</span></p>
            </div>
            <button className={styles.continue} onClick={action}>
              Guardar
            </button>
            <button className={styles.close} onClick={close}>
              Atras
            </button>
          </div>
        </div>
      )}
    </>
  );
};
