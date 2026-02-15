import { useState } from "react"

export default function TemperatureUnitsMenu() {

    const [temperatureUnit, setTemperatureUnit] = useState("celsius");

    const handlerTemperatureUnitChange = (e) =>{
        setTemperatureUnit(e.target.value);
        //onTemperatureUnitChange(temperatureUnit);
    }

    return(
        <div className="absolute top-8 right-12 p-3 bg-congress-blue-50 border rounded-md border-congress-blue-200">
            <p>Unidades de temperatura</p>
            <div className="flex flex-row items-center gap-2">
                <input type="radio" name="temperatureUnit" id="celsius" value="celsius"
                    checked={temperatureUnit == "celsius"}
                    onChange={handlerTemperatureUnitChange}/>
                <label htmlFor="celsius">Celsius (°C)</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="radio" name="temperatureUnit" id="fahrenheit" value="fahrenheit"
                    checked={temperatureUnit == "fahrenheit"}
                    onChange={handlerTemperatureUnitChange}/>
                <label htmlFor="fahrenheit">Fahrenheit (°F)</label>
            </div>
        </div>
    )
}