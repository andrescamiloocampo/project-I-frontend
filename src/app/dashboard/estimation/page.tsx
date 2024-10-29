import { type ReactElement } from "react";
import { EstimationForm } from "@/app/components/Forms/EstimationForm/EstimationForm";
import styles from './estimation.module.css';
import { Clock } from "@/app/components/Clock/Clock";
import { getWeather } from "@/app/server/actions/getWeather";
import { auth } from "../../../../auth";

export default async function EstimationServicePage():Promise<ReactElement>{    
    const weather = await getWeather();
    const session = await auth();
    console.log(session);
    return(
        <div className={styles.estimationMain}>            
            <EstimationForm weather={{
                precipitation: weather.current.precip_mm,
                temperature: weather.current.temp_c
            }}/>
            <Clock precipitation={weather.current.precip_mm} temperature={weather.current.temp_c}/>            
        </div>
    )
}