import BusZonesList from '@/app/components/BusZone/BusZoneList';
import { getRoutesConcurrent } from '../../../../api/route/getRoutesConcurrent';
import styles from './routes.module.css';


  
export default async function RoutesPage(){

    const data = await getRoutesConcurrent()
    
    return(
      <div className = {styles.mainContent}><BusZonesList zones={data} />

      </div> 
    )
}