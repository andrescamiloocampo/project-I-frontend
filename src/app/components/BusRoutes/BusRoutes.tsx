'use client'

import styles from "./BusRoutes.module.css"

interface BusRoute {
  _id: string
  name: string
  distance: string
}

interface BusRoutesProps {
  _id: string
  zoneName: string
  busRoute: BusRoute[]
}

export default function BusRoutes({ _id, zoneName, busRoute }: BusRoutesProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.zoneName}>{zoneName}</h1>
        <p className={styles.zoneId}>ID: {_id}</p>
      </header>

      <ul className={styles.routesList}>
        {busRoute.map((route) => (
          <li key={route._id} className={styles.routeCard}>
            <div>
              <h2 className={styles.routeName}>{route.name}</h2>
              <span className={styles.routeId}>ID: {route._id}</span>
            </div>
            <span className={styles.distance}>{route.distance}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}