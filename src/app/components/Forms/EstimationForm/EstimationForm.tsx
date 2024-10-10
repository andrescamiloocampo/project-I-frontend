'use client'
import { type ReactElement } from "react";
import styles from './EstimationForm.module.css';
import { getPrediction } from "@/app/server/actions/getPrediction";

// Ruta, horario, barrio, tiempo esperado, tiempo real 

export const EstimationForm = ():ReactElement => {    
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = {
            route: event.currentTarget.route.value,
            area: event.currentTarget.area.value,
            weather: event.currentTarget.weather.value,
            schedule: event.currentTarget.schedule.value,
            expected: event.currentTarget.expected.value,
            real: event.currentTarget.real.value
        }

        const response = await getPrediction(formData);
        console.log(response);
    }
    return(
        <form onSubmit={handleSubmit} className={styles.estimationForm}>
            <select name="route">
                <option value="1">Ruta 05</option>
                <option value="2">Ruta 03</option>
                <option value="3">Circular</option>
                <option value="4">Linea a</option>
                <option value="5">Ruta 04</option>
            </select>
            <select name="area">
                <option value="1">Porvenir</option>
                <option value="2">Manantiales</option>
                <option value="3">La Esmeralda</option>
                <option value="4">San Antonio</option>
                <option value="5">Santa Ana</option>
                <option value="6">Vereda Galicia</option>
                <option value="7">San Francisco</option>
            </select>
            <select name="weather">
                <option value="1">Calido</option>
                <option value="2">Frio</option>
            </select>
            <select name="schedule">
                <option value="1">8 - 11</option>
                <option value="2">14 - 16</option>
                <option value="3">17 - 19</option>
            </select>
            <input type="number" placeholder="Ingrese el tiempo esperado" name="expected"/>
            <input type="number" placeholder="Ingrese el tiempo real" name="real"/>
            <input type="submit" value="Consultar"/>
        </form>
    )
}