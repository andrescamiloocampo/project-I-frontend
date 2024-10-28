'use client'

import { useEffect, useState, type ReactElement } from "react"
import styles from './Clock.module.css';
import type { WeatherConditionsM } from "../Pages/EstimationService/EstimationService.model";
import { LuClock3 } from "react-icons/lu";
import {WiDayCloudy} from "react-icons/wi"
import { BsCloudHail } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

interface TimeM{
    hours: number;
    minutes: number;
    seconds: number;
}

export const Clock = ({precipitation,temperature}:WeatherConditionsM):ReactElement => {
    
  const [time,setTime] = useState<TimeM>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    };
    
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');
  return (
    <div className={styles.Clock}>
        <div className={styles.clockContainer}>
          <div className={styles.clockContent}>
          <LuClock3 size={30}/>
          <p className={styles.title}>
            {`${formatTime(time.hours)} : ${formatTime(time.minutes)} : ${formatTime(time.seconds)}`}
          </p>
          </div>

          <p className={styles.temp}>
          Temperatura: {temperature} °
          </p>

          <div className={styles.weathers}>
            <MdOutlineWbSunny size={35} color={(precipitation<=0 && temperature>23)?"yellow":"#6b6b6b"}/>
            <BsCloudHail size={30} color={(precipitation>=0.7)?"yellow":"#6b6b6b"}/>
            <WiDayCloudy size={40} color={(precipitation<0.6 && temperature<23)?"yellow":"#6b6b6b"}/>
          </div>
        </div>
    </div>
  )
}
