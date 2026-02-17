import { MdMoreHoriz } from "react-icons/md";
import TemperatureUnitsMenu from "./TemperatureUnitsMenu";
import { useState } from "react";

export default function MoreButton({ onUnitTemperatureChange }) {
    const [showMenu, setShowMenu] = useState(false);

    const handlerClick = () =>{
        //Cambia de false a true y viceversa
        setShowMenu(!showMenu);
    }

    return(
        <>
        <button className="flex justify-center cursor-pointer relative left-32 top-2 bg-congress-blue-100 dark:bg-river-bed-300 rounded-md px-1
                    transition-all transition-discrete delay-150"
                onClick={handlerClick}>
            <MdMoreHoriz className="text-3xl active:text-congress-blue dark:active:text-river-bed-600 active:border active:border-congress-blue dark:active:border-river-bed-600 active:rounded-lg 
            hover:border hover:border-congress-blue dark:hover:border-river-bed-600 hover:rounded-lg hover:text-congress-blue dark:hover:text-river-bed-600"/>
        </button>
        {showMenu && <TemperatureUnitsMenu onTemperatureUnitChange={onUnitTemperatureChange} />}
        </>
    )
}