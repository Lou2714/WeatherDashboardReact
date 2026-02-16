import { useState, useEffect } from "react"
import { getTemperatureUnit } from "../../utils/storage"

export default function ForecastCard({ icon, day, minTem, minTem_f, maxTem, maxTem_f }) {

    const [isCelsius, setIsCelsius] = useState(true);

    useEffect(() =>{
        setTemperatureUnit();
    }, [])

    const setTemperatureUnit = () =>{
        if (getTemperatureUnit() != "celsius") {
            setIsCelsius(false);
        }else{
            setIsCelsius(true)
        }
    }

    return(
        <div className="flex flex-col items-center gap-1 p-2 w-24 border rounded-lg border-congress-blue-200 bg-congress-blue-100">
            <h2 className="text-lg font-semibold">{day}</h2>
            <img src={icon} alt="Icono del clima"/>
            <p>
                {isCelsius ? (`${maxTem}°/${minTem}°`) : (`${maxTem_f}°/${minTem_f}°`)}
            </p>
        </div>
    )
}