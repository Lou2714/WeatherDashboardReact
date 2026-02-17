import LocationDateInformation from "./LocationDateInformation";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";
import ErrorMessage from "../Feedback/ErrorMessage";
import Spinner from "../Feedback/Spinner";

import { getCurrentDate, getDayFromADate } from "../../utils/dateUtils";
import { saveTemperatureUnitChecked, getTemperatureUnit } from "../../utils/storage";
import { getCurrentWeather, getForecast } from "../../services/weatherService";

import { useState, useEffect } from "react";

export default function Weather({ city }) {

    const [hasCurrentWeatherError, setHasCurrentWeatherError] = useState(false);
    const [currentWeatherErrorMessage, setCurrentWeatherErrorMessage] = useState("");
    const [hasForecastError, setHasForecastError] = useState(false);
    const [forecastErrorMessage, setForecastErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    //saveTemperatureUnitChecked("celsius");
    //El valor por defecto será celsius o el valor del local
    const [temperatureUnit, setTemperatureUnit] = useState("");
    
    
    const currentDate = getCurrentDate();

    useEffect(() => {
        setIsLoading(true);
        statesReset();
        //Verifica si existe una unidad de temperatura guardada en localStorage
        checkTemperatureUnits();
        getCurrentWeatherInformation();
        getForecastInformation();
        setTemperatureUnit(getTemperatureUnit());
        //saveTemperatureUnitChecked(temperatureUnit);
        //console.log(temperatureUnit);
        
    },[city, temperatureUnit]);


    const getCurrentWeatherInformation = () =>{
        //Pendiente de ver donde establezco esto
        getCurrentWeather(city, "es")
            .then((res) => {
                setCurrentWeather(res);
                statesReset();
            })
            .catch((error) => {
                setHasCurrentWeatherError(true);
                setCurrentWeatherErrorMessage(error.message);
            })
            .finally(() =>{
                setIsLoading(false);
            })
    }
    const getForecastInformation = () =>{
        getForecast(city, "es")
            .then((res) => {
                setForecast(res);
                statesReset();
            })
            .catch((error) =>{
                setHasForecastError(true);
                setForecastErrorMessage(error.message);
            })
    }

    const statesReset = () =>{
        //Reseteo de estados
        setHasCurrentWeatherError(false);
        setCurrentWeatherErrorMessage("");
        setHasForecastError(false);
        setForecastErrorMessage("");
    }
    
    const checkTemperatureUnits = () =>{
        //Si resulta que no hay una unidad de temperatura guardada almacena un valor por defecto
        if (getTemperatureUnit() == null) {
            saveTemperatureUnitChecked("celsius");
        }
    }

    return(
        <>
            {isLoading ? (<Spinner />) : (
                <div>
                    <LocationDateInformation
                        key={currentWeather?.location?.name}
                        locationName={currentWeather?.location?.name}
                        locationCountry ={currentWeather?.location?.country}
                        date={currentDate}
                    />
                {hasCurrentWeatherError ? (
                    <div className="relative flex flex-col items-center m-auto w-80 h-64 bg-congress-blue-100 rounded-lg">
                        <ErrorMessage message={currentWeatherErrorMessage} />
                    </div>  
                ): (<CurrentWeatherCard
                        icon={currentWeather?.current?.condition?.icon}
                        temperature={currentWeather?.current?.temp_c}
                        temperature_f={currentWeather?.current?.temp_f}
                        condition={currentWeather?.current?.condition?.text} 
                        feelsLike={currentWeather?.current?.feelslike_c}
                        feelsLike_f={currentWeather?.current?.feelslike_f}
                        humidity={currentWeather?.current?.humidity}
                        wind={currentWeather?.current?.wind_kph}
                        wind_mph={currentWeather?.current?.wind_mph}
                        precipitation={currentWeather?.current?.precip_mm}
                        precipitation_in={currentWeather?.current?.precip_in}
                        onUnitTemperatureChange={setTemperatureUnit}
                    />)}
                <h2 className="text-xl text-center my-2 font-semibold dark:text-seashell-white">Pronóstico</h2>
                {hasForecastError ? (
                    <div className="relative flex flex-col items-center m-auto w-80 h-28">
                        <ErrorMessage message={forecastErrorMessage} />
                    </div> 
                ) : (
                    <div className="flex flex-row justify-center gap-5 mt-5 md:pb-5 ">
                        {
                            forecast?.forecast?.forecastday?.map((item, index) =>(
                                <ForecastCard 
                                    key={index}
                                    icon={item?.day?.condition?.icon}
                                    day={getDayFromADate(item.date)}
                                    maxTem={item?.day?.maxtemp_c}
                                    maxTem_f={item?.day?.maxtemp_f}
                                    minTem={item?.day?.mintemp_c}
                                    minTem_f={item?.day?.mintemp_f}
                                />
                            ))
                        }
                    </div>
                )}
                </div>
            )}
        </>
    )
}