import { type ReactElement } from "react";
import { getPredictionsById, getZones } from "../../../../api";

export default async function ConsumptionPage():Promise<ReactElement>{
    const data = await getPredictionsById();
    const zones = await getZones();
    const barrios = data.map((register)=>register.barrio)    
    const filtered = barrios.reduce((resultado, registro) => {        
        if (resultado[registro]) {
          resultado[registro].cantidad += 1; 
        } else {          
          resultado[registro] = { name: registro, cantidad: 1 };
        }
        return resultado;
      }, {});
            
      zones.map(zone => {
          console.log(filtered[zone.name.trim()]?.cantidad ,Number(zone.distance.split('km')[0]))          
      })
    return(
        <div>
            {                
            }
            {
                // JSON.stringify(zones)
            }
            
        </div>
    )
}