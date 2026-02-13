import LocationDateInformation from "./LocationDateInformation";
import CurrentWeatherCard from "./CurrentWeatherCard/CurrentWeatherCard";

export default function Weather() {
    return(
        <div>
            <LocationDateInformation />
            <CurrentWeatherCard />
        </div>
    )
}