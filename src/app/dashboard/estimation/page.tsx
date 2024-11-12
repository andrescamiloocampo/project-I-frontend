import { type ReactElement } from "react";
import { EstimationForm } from "@/app/components/Forms/EstimationForm/EstimationForm";
import styles from './estimation.module.css';
import { Clock } from "@/app/components/Clock/Clock";
import { getZones,getWeather, getRoutes } from "../../../../api";

export default async function EstimationServicePage():Promise<ReactElement>{    
    const weather = await getWeather();    
    const zones = await getZones();
    const routes = await getRoutes();
    
    return(
        <div className={styles.estimationMain}>                        
            <EstimationForm weather={{
                    precipitation: weather.current.precip_mm,
                    temperature: weather.current.temp_c
                }}
                zones={zones}
                routes={routes}
            />
            {/* <div className={styles.travel}>
                <Text mText="¿Vas al Poli?" fontWeight="700" fontSize="40px"/>
                <Text mText="Dinos de donde vienes"/>
            </div> */}

            <Clock precipitation={weather.current.precip_mm} temperature={weather.current.temp_c}/>            
        </div>
    )
}