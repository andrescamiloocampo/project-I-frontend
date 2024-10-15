'use client'
import { useState, type ReactElement } from "react";
import styles from './EstimationForm.module.css';
import { getPrediction } from "@/app/server/actions/getPrediction";
import { FormEvent } from "react";
import type { EstimationFormM } from "./EstimationForm.model";
import { getSession } from "next-auth/react";
import { TbBus } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaRegHourglass } from "react-icons/fa6";

// Ruta, horario, barrio, tiempo esperado, tiempo real 

export const EstimationForm = ({weather}:EstimationFormM):ReactElement => {    

    const [prediction,setPrediction] = useState(0);
    const date = new Date();    
    const currentHour = date.getHours();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        console.log(typeof formData.get('route'))

        const data = {
            RUTA: Number(formData.get('route')),
            BARRIO:Number(formData.get('area')), 
            HORARIO: Number(formData.get('schedule')), 
            CLIMA: Number(formData.get('weather')), 
            "TIEMPO REAL": Number(formData.get('real')),
            "TIEMPO ESPERADO": Number(formData.get('expected'))
        }

        const prediction = await getPrediction(data);
        setPrediction(prediction.prediction);
    }

    const hourRange = (currentHour:number):string => {
        if (currentHour >= 8 && currentHour < 11) {            
            return "1";
          } else if (currentHour >= 14 && currentHour < 16) {
            return "2";
          } else if (currentHour >= 17 && currentHour < 19) {
            return "3";
          } else {
            return "";
          }
    }

    return(    
        <div className={styles.mainForm}>
        <form onSubmit={handleSubmit} className={styles.estimationForm}>
            <h1>Planifica tu viaje</h1>
            {
                (prediction) > 0 && (
                    <p>El usuario perderá {Math.ceil(prediction)} minutos</p>
                )                
            }

            {
                (prediction) < 0 && (
                    <p>El usuario ganará {Math.ceil(prediction*-1)} minutos</p>
                )
            }

            <label htmlFor="route" className={styles.Label}>
                <TbBus size={30}/> Ruta
            </label>
            <select name="route" className={styles.customSelect}>
                <option value="1">Ruta 05</option>
                <option value="2">Ruta 03</option>
                <option value="3">Circular</option>
                <option value="4">Linea a</option>
                <option value="5">Ruta 04</option>                
                <option value="6">Ruta 303</option>                
            </select>

            <label htmlFor="area" className={styles.Label}>
            <IoLocationOutline size={26}/> Barrio
            </label>
            <select name="area" className={styles.customSelect}>
                <option value="1">Porvenir</option>
                <option value="2">Manantiales</option>
                <option value="3">La Esmeralda</option>
                <option value="4">San Antonio</option>
                <option value="5">Santa Ana</option>
                <option value="6">Vereda Galicia</option>
                <option value="7">San Francisco</option>
                <option value="8">Santa Ana</option>
                <option value="9">Rionegro plaza</option>
                <option value="10">Vereda campo alegre</option>
                <option value="11">Alto de la capilla</option>
                <option value="12">Vereda Santa Barbara</option>                
            </select>

            <label htmlFor="weather" className={styles.Label}><IoIosCloudOutline size={25}/> Clima</label>
            <select name="weather" value={(weather.temperature>23 && weather.precipitation <= 0)?'1':'2'}  className={styles.customSelect}>
                <option value="1">Cálido</option>
                <option value="2">Frío</option>
            </select>

            <label htmlFor="schedule" className={styles.Label}><RiCalendarScheduleLine size={25}/> Horario</label>
            <select name="schedule" className={styles.customSelect} value={(hourRange(currentHour))}>
                <option value="1">8 - 11</option>
                <option value="2">14 - 16</option>
                <option value="3">17 - 19</option>
            </select>

            <label htmlFor="expected" className={styles.Label}> <MdOutlineWatchLater size={25}/> Tiempo esperado</label>
            <input type="number" placeholder="Ingrese el tiempo esperado" name="expected" className={styles.customInput}/>
            <label htmlFor="real" className={styles.Label}><FaRegHourglass size={23}/> Tiempo real</label>
            <input type="number" placeholder="Ingrese el tiempo real" name="real" className={styles.customInput}/>
            <button type="submit" className={styles.submitButton}>Consultar</button>
        </form>        
        </div>
    )
}