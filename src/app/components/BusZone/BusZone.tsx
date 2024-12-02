'use client'

import { useState } from 'react'
import styles from "./BusZone.module.css"

interface BusRoute {
  id: string
  name: string
  distance: string
}

interface Zone {
  id: string
  zoneName: string
  busRoute: BusRoute[]
}

interface BusZoneProps {
  zone: Zone
}

export default function BusZone({ zone }: BusZoneProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.zoneCard}>
      
      <div 
        className={styles.zoneHeader}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsExpanded(!isExpanded)
          }
        }}
      >
        <div>
          <h2 className={styles.zoneName}>{zone.zoneName}</h2>
          <p className={styles.zoneId}>ID: {zone.id}</p>
        </div>
      </div>
      
      <div className={`${styles.routesList} ${isExpanded ? styles.routesListExpanded : ''}`}>
        {zone.busRoute.map((route) => (
          <div key={route.id} className={styles.routeItem}>
            <div className={styles.routeInfo}>
              <span className={styles.routeName}>{route.name}</span>
              <span className={styles.routeId}>ID: {route.id}</span>
            </div>
            <span className={styles.distance}>{route.distance}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

