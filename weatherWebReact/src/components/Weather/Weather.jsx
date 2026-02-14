import LocationDateInformation from "./LocationDateInformation";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";
import ErrorMessage from "../Feedback/ErrorMessage";

import { useState } from "react";

export default function Weather() {

const [hasCurrentWeatherError, setHasCurrentWeatherError] = useState(false);
const [hasForecastError, setHasForecastError] = useState(false);


    return(
        <div>
            <LocationDateInformation />
            {hasCurrentWeatherError ? (
                <div className="relative flex flex-col items-center m-auto w-80 h-64 bg-congress-blue-100 rounded-lg">
                    <ErrorMessage message={"No se pudo obtener los datos del clima"} />
                </div>  
            ): (<CurrentWeatherCard />)}
            <h2 className="text-xl text-center my-2 font-semibold">Pronóstico</h2>
            {hasForecastError ? (
                <div className="relative flex flex-col items-center m-auto w-80 h-28">
                    <ErrorMessage message={"No se pudo obtener los datos del clima"} />
                </div> 
            ) : (
            <div className="flex flex-row justify-center gap-5 mt-5 ">
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
            </div>
            )}
        </div>
    )
}