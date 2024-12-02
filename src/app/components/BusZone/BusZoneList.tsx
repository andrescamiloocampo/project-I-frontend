'use client'

import styles from './BusZone.module.css'
import BusZone from './BusZone'

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

interface BusZonesListProps {
  zones: Zone[]
}

export default function BusZonesList({ zones }: BusZonesListProps) {
  return (
    <div className={styles.container}>
      {zones.map((zone) => (
        <BusZone key={zone.id} zone={zone} />
      ))}
    </div>
  )
}

