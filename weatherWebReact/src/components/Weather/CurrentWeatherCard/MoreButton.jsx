import { MdMoreHoriz } from "react-icons/md";
import TemperatureUnitsMenu from "./TemperatureUnitsMenu";
import { useState } from "react";

export default function MoreButton() {
    const [showMenu, setShowMenu] = useState(false);

    const handlerClick = () =>{
        //Cambia de false a true y viceversa
        setShowMenu(!showMenu);
        fetchWeather();
    }

    return(
        <>
        <button className="flex justify-center cursor-pointer relative left-28 top-2 bg-congress-blue-100 rounded-md px-1
                    transition-all transition-discrete delay-150"
                onClick={handlerClick}>
            <MdMoreHoriz className="text-3xl active:text-congress-blue active:border active:border-congress-blue active:rounded-lg 
            hover:border hover:border-congress-blue hover:rounded-lg hover:text-congress-blue" />
        </button>
        {showMenu && <TemperatureUnitsMenu/>}
        </>
    )
}