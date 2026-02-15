import Header from "../components/Header/Header";
import Weather from "../components/Weather/Weather";
import { useState } from "react";

export default function WeatherWeb() {
    //Aqui establezco el valor por defecto para que se muestre su información al cargar la página por primera vez
    const [searchedCity, setSearchedCity] = useState("San Salvador");

    // const handlerSearchedCity = (city) =>{
    //     setSearchedCity(city);
    // }

    return(
        <>
         {/* Pasa setSearchedCity directamente como callback, recordar que setSearchedCity es una función para establecer el nuevo valor, por ende obtiene directamente el valor */}
            <Header onSearchCity={setSearchedCity} />
            <Weather city={searchedCity} />
        </>
    )
}