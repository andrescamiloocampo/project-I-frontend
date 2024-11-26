"use client";
import { useEffect, useState, type ReactElement } from "react";
import styles from "./EstimationForm.module.css";
import type { EstimationFormM } from "./EstimationForm.model";
import { Text } from "../../Text/Text";
import { Modal } from "../../Modal/Modal";
import { useSession } from "next-auth/react";
import { trainModel } from "@/../api";

interface FormFieldsM {
  BARRIO: string;
  RUTA: string;
  CLIMA: number;
  HORARIO: number;
}

export const EstimationForm = ({
  weather,
  zones,
  routes,
}: EstimationFormM): ReactElement => {

  const session = useSession();
  
  const getSchedule = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour <= 10) {
      return 1;
    } else if (currentHour > 10 && currentHour <= 14) {
      return 2;
    } else if (currentHour > 14 && currentHour <= 18) {
      return 3;
    } else {
      return 0;
    }
  };

  const getWeather = () => (weather.temperature > 15 ? 1 : 2);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [prediction, setPrediction] = useState({ prediction: -1 });
  const [expectedTime, setExpectedTime] = useState(0);

  const [formFields, setFormFields] = useState<FormFieldsM>({
    RUTA: "",
    BARRIO: "",
    HORARIO: getSchedule(),
    CLIMA: getWeather(),
  });

  const phrases = [
    "Dinos de donde vienes",
    "¿Cual es tu ruta?",
    "¡Feliz viaje!",
  ];

  const filteredZones = zones.filter((zone) =>
    zone.name.toLowerCase().includes(formFields.BARRIO.toLowerCase())
  );

  const filteredRoutes = routes.filter((route) =>
    route.name.toLowerCase().includes(formFields.RUTA.toLowerCase())
  );

  const handleSelectZone = (zoneName: string) => {
    setFormFields({
      ...formFields,
      BARRIO: zoneName,
    });
    setShowSuggestions(false);
  };

  const handleSelectRoute = (routeName: string) => {
    setFormFields({
      ...formFields,
      RUTA: routeName,
    });
  };

  const validateZoneTerms = () => {
    const isValid = zones.some(
      (zone) => zone.name.toLowerCase() === formFields.BARRIO.toLowerCase()
    );
    setNextStep(!isValid);
  };

  const validateRouteTerms = () => {
    const isValid = routes.some(
      (route) => route.name.toLowerCase() === formFields.RUTA.toLowerCase()
    );
    setNextStep(!isValid);
  };

  const handleNextStep = () => {
    setCurrentStep((currentStep) => currentStep + 1);
    setNextStep(true);
  };

  const handlePrevStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const sendForm = async () => {
    const BARRIO =
      zones.find((zone) => zone.name === formFields.BARRIO)?.code.toString() ??
      "";
    const RUTA =
      routes.find((route) => route.name === formFields.RUTA)?.code.toString() ??
      "";

    try {
      const response = await fetch("/api/prediction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formFields, BARRIO, RUTA }),
      });
      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  const manageModal = async (): Promise<any> => {
    const raw = {
      ...formFields,
      TIEMPO_REAL: prediction.prediction,
      TIEMPO_ESPERADO: expectedTime,
      TIEMPO_PERDIDO: prediction.prediction - expectedTime, 
      id: session.data?.user?.id     
    };    
    console.log(raw)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_MODEL}/createPrediction`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(raw)
      });

      if (!response.ok) return new Error("No se pudo obtener informacion");
      const result = await response.json();    
      setPrediction({ prediction: -1 });
    } catch (error) {
      console.log("Error haciendo peticion", error);
    }        
  };

  useEffect(() => {
    if (currentStep === 0) validateZoneTerms();

    if (currentStep === 1) validateRouteTerms();
  }, [formFields]);

  return (
    <div className={styles.travel}>          
      <Modal
        isOpen={prediction.prediction !== -1}
        action={manageModal}
        close={() => setPrediction({ prediction: -1 })}
        real={Math.round(prediction.prediction)}
        expected={expectedTime}
      />
      <div className={styles.mainContent}>
        {currentStep >= 0 && (
          <div className={styles.stepContainer}>
            <div className={styles.titleContainer}>
              <Text mText="¿Vas al Poli?" fontWeight="700" fontSize="40px" />
              <Text
                mText={phrases[0] ?? "Se nos acabaron las frases"}
                color="yellow"
              />
            </div>

            <input
              type="text"
              placeholder="Buscar zona..."
              value={formFields.BARRIO}
              onChange={(e) => {
                setFormFields({ ...formFields, BARRIO: e.target.value });
                setShowSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => setShowSuggestions(formFields.BARRIO.length > 0)}
              className={styles.searchInput}
            />

            {showSuggestions && currentStep === 0 && (
              <ul className={styles.suggestionsList}>
                {filteredZones.map((zone) => (
                  <li
                    key={zone.id}
                    onClick={() => handleSelectZone(zone.name)}
                    className={styles.suggestionItem}
                  >
                    {zone.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {currentStep >= 1 && (
          <div className={styles.stepContainer}>
            <div className={styles.titleContainer}>
              <Text
                mText={phrases[1] ?? "Se nos acabaron las frases"}
                color="yellow"
              />
            </div>

            <input
              type="text"
              placeholder="Buscar ruta..."
              value={formFields.RUTA}
              onChange={(e) => {
                setFormFields({ ...formFields, RUTA: e.target.value });
                setShowSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => setShowSuggestions(formFields.RUTA.length > 0)}
              className={styles.searchInput}
            />

            {showSuggestions && currentStep === 1 && (
              <ul className={styles.suggestionsList}>
                {filteredRoutes.map((route) => (
                  <li
                    key={route.id}
                    onClick={() => handleSelectRoute(route.name)}
                    className={styles.suggestionItem}
                  >
                    {route.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <Text
              mText="Condiciones climáticas"
              fontSize="1rem"
              fontWeight="bold"
            />

            <div className={styles.weatherStats}>
              <p className={styles.weatherStat}>
                Temperatura:{" "}
                <span className={styles.stat}>{weather.temperature}°</span>
              </p>
              <p className={styles.weatherStat}>
                Precipitación:{" "}
                <span className={styles.stat}>{weather.precipitation}</span>
              </p>
            </div>

            <div className={styles.stepContainer}>
              <div className={styles.titleContainer}>
                <Text mText="¿Cuanto piensas esperar?" color="yellow" />
              </div>

              <input
                type="number"
                placeholder="Tiempo esperado"
                defaultValue={expectedTime}
                onChange={(e) => {
                  setExpectedTime(+e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(formFields.BARRIO.length > 0)}
                className={styles.searchInput}
              />
            </div>
          </div>
        )}

        {currentStep < 2 && (
          <button
            disabled={nextStep}
            className={styles.nextStep}
            onClick={() => handleNextStep()}
          >
            Siguiente
          </button>
        )}

        {currentStep === 2 && (
          <button
            className={styles.nextStep}
            onClick={() => {
              sendForm();
            }}
          >
            Realizar predicción
          </button>
        )}

        {currentStep > 0 && (
          <button onClick={handlePrevStep} className={styles.backButton}>
            Atras
          </button>
        )}
      </div>

      <div className={styles.steps}>
        {new Array(3).fill(null).map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentStep === index ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
