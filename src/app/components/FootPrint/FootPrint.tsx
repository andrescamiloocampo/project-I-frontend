import { type ReactElement } from "react";
import { auth } from "../../../../auth";
import { getUserSecure } from "../../../../api/user/getUserSecure";
import { Session } from "../LoginForm/LoginForm";
import styles from "./FootPrint.module.css";
import { getPredictionsById } from "../../../../api/prediction/getPredictionsById";
import { getZones } from "../../../../api/zones/getZones";

export const FootPrint = async (): Promise <ReactElement> => {
    const session: Session = (await auth()) ?? { user: { id: "", expires: "" } };
    const user = await getUserSecure();
    const predictions = await getPredictionsById();
    const zone = await getZones();

    const latestPredictions = predictions?.slice(0, 10) || [];
      return( <div>
        {session?.user?.sessionData ? (
          <div className={styles.cardContainer}>
            <div className={styles.flexContainer}>
              {/* Lado izquierdo */}
              <div className={styles.leftSide}>
              <div className={styles.circle}>
    <span className={styles.circleText}></span>
  </div>
  <span className={styles.username}>{user?.username || "No disponible"}</span>
</div>
      
              {/* Lado derecho */}
              <div className={styles.rightSide}>
                <div className={styles.headerText}>
                  <span className={styles.predictions}>
                    {latestPredictions && latestPredictions.length > 0 ? (
                      <ul className={styles.ul}>
                        {latestPredictions.map((prediction: any) => (
                          <li className={styles.lista} key={prediction.id}>
                            {`Ruta ID: ${prediction.ruta}, barrio: ${prediction.barrio}`}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No se encontraron predicciones para este usuario.</p>
                    )}
                  </span>
                </div>
                {/* Línea de separación */}
                <hr className={styles.divider} />
      
                <div className={styles.progressSection}>
                  <div className={styles.smallCircle}>
                    <span className={styles.circleText}>HUELLA</span>
                  </div>
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar}></div>
                    <p className={styles.progressDescription}>Total de huella de carbono por mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Si no está logueado, muestra este mensaje
          <p>No estás logueado.</p>
        )}
      </div>
    );
  }
