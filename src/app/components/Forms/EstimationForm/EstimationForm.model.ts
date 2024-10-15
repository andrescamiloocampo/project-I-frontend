import { WeatherConditionsM } from "../../Pages/EstimationService/EstimationService.model";

export interface EstimationFormM{
    weather: WeatherConditionsM;
    userName?: string;
}