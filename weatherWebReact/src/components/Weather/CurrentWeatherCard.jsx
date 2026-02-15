import MoreButton from "./CurrentWeatherCard/MoreButton"
import WeatherDetailCard from "./CurrentWeatherCard/WeatherDetailCard"
import WeatherImage from "../../assets/sunny.png"

import { LuCloudRainWind, LuWind } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";

export default function CurrentWeatherCard({ icon,temperature,condition,feelsLike, humidity, wind, precipitation }) {

    const weatherDetails = [
        {   
            detail:"Humedad",
            value: `${humidity}%`,
            icon: <FiDroplet className="text-2xl" />
        },
        {
            detail:"Viento",
            value: `${wind} km/h`,
            icon: <LuWind className="text-2xl" />
        },
        {
            detail:"Precipitación",
            value: `${precipitation}%`,
            icon: <LuCloudRainWind className="text-2xl" />
        }
    ]

    return(
        <div className="relative flex flex-col items-center m-auto w-80 bg-congress-blue-100 rounded-lg">   
            <MoreButton />
            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col items-center">
                    <img src={icon} alt="Imagen del clima"/>
                    <h2 className="text-2xl font-semibold">{temperature}°C</h2>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">{condition}</h2>
                    <h2 className="text-lg">Sensación térmica: {feelsLike}°C</h2>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 w-full p-2 mt-5">
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