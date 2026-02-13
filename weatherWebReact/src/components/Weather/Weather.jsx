import LocationDateInformation from "./LocationDateInformation";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";

export default function Weather() {
    return(
        <div>
            <LocationDateInformation />
            <CurrentWeatherCard />
            <h2 className="text-xl text-center my-2 font-semibold">Pronóstico</h2>
            <div className="flex flex-row justify-center gap-5 mt-5 ">
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
            </div>
        </div>
    )
}