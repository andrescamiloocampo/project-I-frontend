import styles from './services.module.css';
import { ServiceSection } from '@/app/components/ServiceSection/ServiceSection';

export default async function ServicesPage(){
    return(
        <div className={styles.services}>
            <ServiceSection/>
        </div>
    )
}