import MoreButton from "./CurrentWeatherCard/MoreButton"
import WeatherDetailCard from "./CurrentWeatherCard/WeatherDetailCard"
import WeatherImage from "../../assets/sunny.png"
import { getTemperatureUnit } from "../../utils/storage";

import { useState, useEffect } from "react";

import { LuCloudRainWind, LuWind } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";

export default function CurrentWeatherCard({ 
    icon,
    temperature,
    temperature_f,
    condition,
    feelsLike, 
    feelsLike_f,
    humidity, 
    wind,
    wind_mph, 
    precipitation,
    precipitation_in, 
    onUnitTemperatureChange 
}) {
    
    const [isCelsius, setIsCelsius] = useState(true);

    useEffect(() =>{
        setTemperatureUnit();
    }, [])

    const weatherDetails = [
        {   
            detail:"Humedad",
            value:  `${humidity}%`,
            icon: <FiDroplet className="text-2xl" />
        },
        {
            detail:"Viento",
            value:  isCelsius ? `${wind} km/h` : `${wind_mph} mph`,
            icon: <LuWind className="text-2xl" />
        },
        {
            detail:"Precipitación",
            value:  isCelsius ? `${precipitation} mm` : `${precipitation_in} in`,
            icon: <LuCloudRainWind className="text-2xl" />
        }
    ]
    
    const setTemperatureUnit = () =>{
        if (getTemperatureUnit() != "celsius") {
            setIsCelsius(false);
        }else{
            setIsCelsius(true)
        }
    }

    return(
        <div className="relative flex flex-col items-center m-auto w-86 md:w-96 px-2 bg-congress-blue-100 dark:bg-river-bed-300 rounded-lg">   
            <MoreButton onUnitTemperatureChange={onUnitTemperatureChange}/>
            <div className="flex flex-row justify-between gap-5 md:gap-10">
                <div className="flex flex-col items-center">
                    <img src={icon} alt="Imagen del clima" className="md:w-24"/>
                    <h2 className="text-2xl font-semibold">
                        {isCelsius ? (`${temperature}°C`) : (`${temperature_f}°F`)}
                    </h2>
                </div>
                <div className="flex flex-col w-52 justify-center">
                    <h2 className="text-xl font-bold">{condition}</h2>
                    <h2 className="text-lg ">Sensación térmica:
                        {isCelsius ? (` ${feelsLike}°C`) : (` ${feelsLike_f}°F`)}
                    </h2>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-1 md:justify-around w-full pb-2 mt-5">
                {weatherDetails.map((item,index) =>
                        (
                            <WeatherDetailCard 
                                key={index}
                                icon={item.icon}
                                value={item.value}
                                detail={item.detail}
                            />
                        )
                    )
                }
                
            </div>
        </div>
    )
}