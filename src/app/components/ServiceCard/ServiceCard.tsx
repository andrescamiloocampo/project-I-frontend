'use client'

import { type ReactElement } from "react";
import styles from './ServiceCard.module.css';
import type { ServiceCardM } from "./ServiceCard.model";
import { useRouter } from "next/navigation";
import { AiOutlineClockCircle } from "react-icons/ai";

export const ServiceCard = ({title,description,href,icon}:ServiceCardM):ReactElement => {

    const router = useRouter();

    return(
        <div className={styles.serviceCard} onClick={()=>router.push(href)}>
            <div className={styles.titleContainer}>
                {icon}
                <h1>{title ?? 'Hola causas'}</h1>
            </div>
            <p className={styles.description}>
                {description ?? 'No hay descripcion'}
            </p>
        </div>
    )
}