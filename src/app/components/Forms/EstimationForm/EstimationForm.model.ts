import { WeatherConditionsM } from "@/app/dashboard/estimation/estimation.model";
import { ZoneM,RouteM } from "@/app/interfaces";

export interface EstimationFormM{
    weather: WeatherConditionsM;
    userName?: string;   
    zones: ZoneM[];  
    routes: RouteM[];
}