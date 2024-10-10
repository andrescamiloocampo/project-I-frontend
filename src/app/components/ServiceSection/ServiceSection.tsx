import { type ReactElement } from "react"
import styles from './ServiceSection.module.css';
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuLeaf } from "react-icons/lu";

export const ServiceSection = ():ReactElement => {
    return(
        <section className={styles.serviceSection}>
            {/* <ServiceCard title="Estimar tiempo perdido" description="Planea tu cronograma" icon={<AiOutlineClockCircle size={40} href=""/>}/> */}
            <ServiceCard title="Estimar tiempo que se pudiera perder" description="Planea tu cronograma" href="/dashboard/services/1" icon={<AiOutlineClockCircle size={40}/>}/>
            <ServiceCard title="Calcula tu huella de carbono" description="Planea tu cronograma" icon={<LuLeaf size={40}/>} href="/dashboard/services/2"/>
        </section>
    )
}