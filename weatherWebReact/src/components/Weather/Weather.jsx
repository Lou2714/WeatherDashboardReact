import LocationDateInformation from "./LocationDateInformation";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";
import ErrorMessage from "../Feedback/ErrorMessage";
import Spinner from "../Feedback/Spinner";

import { getCurrentDate, getDayFromADate } from "../../utils/dateUtils";
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

    //const [searchedCity, setSearchedCity] = useState(city)

    //console.log(city);//Se muestra el valor
    const currentDate = getCurrentDate();

    useEffect(() => {
        setIsLoading(true);
        //setSearchedCity(city);
        statesReset();

        getCurrentWeatherInformation();
        getForecastInformation();
        console.log(city);
        
    },[city]);

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
                        condition={currentWeather?.current?.condition?.text} 
                        feelsLike={currentWeather?.current?.feelslike_c}
                        humidity={currentWeather?.current?.humidity}
                        wind={currentWeather?.current?.wind_kph}
                        precipitation={currentWeather?.current?.precip_mm}
                    />)}
                <h2 className="text-xl text-center my-2 font-semibold">Pronóstico</h2>
                {hasForecastError ? (
                    <div className="relative flex flex-col items-center m-auto w-80 h-28">
                        <ErrorMessage message={forecastErrorMessage} />
                    </div> 
                ) : (
                    <div className="flex flex-row justify-center gap-5 mt-5 ">
                        {
                            forecast?.forecast?.forecastday?.map((item, index) =>(
                                <ForecastCard 
                                    key={index}
                                    icon={item?.day?.condition?.icon}
                                    day={getDayFromADate(item.date)}
                                    maxTem={item?.day?.maxtemp_c}
                                    minTem={item?.day?.mintemp_c}
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