import { LuCloudRainWind, LuWind } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";

export default function WeatherDetailCard(params) {
    return(
        <div className="flex flex-col justify-center items-center bg-congress-blue-50 w-28 py-2 border border-congress-blue-200 rounded-md">
            <FiDroplet className="text-2xl" />
            <p>51%</p>
            <p>Húmedad</p>
            {/* <LuWind />
            <LuCloudRainWind /> */}
        </div>
    )
}