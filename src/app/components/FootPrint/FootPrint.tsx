import { type ReactElement } from "react";
import { auth } from "../../../../auth";
import { getUserSecure } from "../../../../api/user/getUserSecure";
import { Session } from "../LoginForm/LoginForm";
import styles from "./FootPrint.module.css";
import { getPredictionsById } from "../../../../api/prediction/getPredictionsById";
import { LinearProgressIndicator } from "../LinearProgressIndicator/LinearProgressIndicator";
import { getZones } from "../../../../api";
import earth from "@/../public/earth.png";
import Image from "next/image";

export const FootPrint = async (): Promise<ReactElement> => {
  const data = await getPredictionsById();
  const zones = await getZones();

  const barrios = data.map((register) => register.barrio);

  const filtered = barrios.reduce((resultado, registro) => {
    if (resultado[registro]) {
      resultado[registro].cantidad += 1;
    } else {
      resultado[registro] = { name: registro, cantidad: 1 };
    }
    return resultado;
  }, {});

  const distances = zones.reduce((total, zone) => {
    const cantidad = filtered[zone.name.trim()]?.cantidad || 0;
    const distance = Number(zone.distance.split("km")[0]);
    return total + cantidad * distance;
  }, 0);

  console.log(zones["porvenir"]);

  const session: Session = (await auth()) ?? { user: { id: "", expires: "" } };
  const user = await getUserSecure();
  const predictions = await getPredictionsById();
  const total = 25000;
  const literPerKm = 0.2;
  const totalUser = ((distances * literPerKm * 2.68) / 12) * 1000;
  const latestPredictions = predictions?.slice(0, 10) || [];
  return (
    <div className={styles.footPrint}>
      {session?.user?.sessionData ? (
        <div className={styles.cardContainer}>
          <div className={styles.flexContainer}>
            <div className={styles.leftSide}>
              <h1>Monitorea tu huella de carbono</h1>

              <div className={styles.welcome}>
                <div className={styles.circle}>
                  <span className={styles.circleText} />
                  <Image
                    alt="earth"
                    width={100}
                    height={100}
                    src={earth}
                    className={styles.planet}
                  />
                </div>
                <span className={styles.username}>
                  {user?.username || "No disponible"}
                </span>
              </div>
            </div>

            <div className={styles.rightSide}>
              <h2 className={styles.routesTitle}>Últimas rutas</h2>
              <div className={styles.predictions}>
                {latestPredictions && latestPredictions.length > 0 ? (
                  <ul className={styles.routes}>
                    {latestPredictions.map((prediction: any) => (
                      <li className={styles.routeContainer} key={prediction.id}>
                        <p className={styles.routeTitle}>
                          Ruta: <span>{prediction.ruta}</span>
                        </p>
                        <p className={styles.routeTitle}>
                          Barrio: <span>{prediction.barrio}</span>
                        </p>
                        <p className={styles.routeTitle}>
                          Distancia:{" "}
                          <span>
                            {
                              zones.find(
                                (zone) => zone.name === prediction.barrio
                              ).distance
                            }
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No se encontraron predicciones para este usuario.</p>
                )}
              </div>
              <hr className={styles.divider} />

              <div className={styles.progressSection}>
                <div className={styles.stats}>
                  <div className={styles.smallCircle}>
                    <span className={styles.circleText}>
                      {((totalUser / total) * 100).toFixed(2)}%
                    </span>
                  </div>
                  <p className={styles.statsTitle}>Consumo</p>
                </div>                
                <LinearProgressIndicator value={(totalUser / total) * 100} />                
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No estás logueado.</p>
      )}
    </div>
  );
};
