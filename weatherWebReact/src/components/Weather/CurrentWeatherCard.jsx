import MoreButton from "./CurrentWeatherCard/MoreButton"
import WeatherDetailCard from "./CurrentWeatherCard/WeatherDetailCard"
import WeatherImage from "../../assets/sunny.png"

export default function CurrentWeatherCard() {
    return(
        <div className="relative flex flex-col items-center m-auto w-80 bg-congress-blue-100 rounded-lg">   
            <MoreButton />
            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col items-center">
                    <img src={WeatherImage} alt="Imagen del clima"/>
                    <h2 className="text-2xl font-semibold">25°C</h2>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-xl font-bold">Soleado</h2>
                    <h2 className="text-lg">Sensación térmica: 25°C</h2>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-0.5 w-full p-2 mt-5">
                <WeatherDetailCard />
                <WeatherDetailCard />
                <WeatherDetailCard />
            </div>
        </div>
    )
}