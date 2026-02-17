import Header from "../components/Header/Header";
import Weather from "../components/Weather/Weather";
import { useState } from "react";

export default function WeatherWeb({ onToggleChange, darkMode }) {
    //Aqui establezco el valor por defecto para que se muestre su información al cargar la página por primera vez
    const [searchedCity, setSearchedCity] = useState("San Salvador");

    return(
        <div>
         {/* Pasa setSearchedCity directamente como callback, recordar que setSearchedCity es una función para establecer el nuevo valor, por ende obtiene directamente el valor */}
            <Header onSearchCity={setSearchedCity} onToggleChange={onToggleChange} darkMode={darkMode} />
            <Weather city={searchedCity} />
        </div>
    )
}