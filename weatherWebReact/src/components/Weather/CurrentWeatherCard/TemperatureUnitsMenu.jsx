import { useState } from "react"
import { saveTemperatureUnitChecked, getTemperatureUnit } from "../../../utils/storage";

export default function TemperatureUnitsMenu({ onTemperatureUnitChange }) {

    const [temperatureUnit, setTemperatureUnit] = useState("");
    //saveTemperatureUnitChecked("celsius");

    const handlerTemperatureUnitChange = (e) =>{
        setTemperatureUnit(e.target.value);
        //Guardo en el local el valor nuevo y aviso del cambio a través de props
        saveTemperatureUnitChecked(e.target.value);
        onTemperatureUnitChange(temperatureUnit);
        
    }
    

        return(
        <div className="absolute top-8 right-12 p-3 bg-congress-blue-50 border rounded-md border-congress-blue-200">
            <p>Unidades de temperatura</p>
            <div className="flex flex-row items-center gap-2">
                <input type="radio" name="temperatureUnit" id="celsius" value="celsius"
                //Verifica si el valor que hay en el localStorage es celsius o fahrenheit para mostrar la opcion marcada
                    checked={ getTemperatureUnit() === "celsius"} 
                    onChange={handlerTemperatureUnitChange}/>
                <label htmlFor="celsius">Celsius (°C)</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="radio" name="temperatureUnit" id="fahrenheit" value="fahrenheit"
                    
                    checked={getTemperatureUnit() === "fahrenheit"} 
                    onChange={handlerTemperatureUnitChange}/>
                <label htmlFor="fahrenheit">Fahrenheit (°F)</label>
            </div>
        </div>
    )
}