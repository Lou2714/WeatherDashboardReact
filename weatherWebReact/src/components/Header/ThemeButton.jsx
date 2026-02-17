import { LuSunMedium, LuMoon } from "react-icons/lu";
import { saveThemePreference, getThemePreference } from "../../utils/storage";

import { useState } from "react";

export default function ThemeButton({ onToggleChange, darkMode }) {

    //https://tailwindcss.com/docs/hover-focus-and-other-states#
    return(
        <div className="m-1">
            <label className="relative inline-block w-16 h-8">
                <input type="checkbox" role="switch"
                    className="opacity-0 w-0 h-0 peer checked:bg-river-bed-300 focus:shadow-md focus:shadow-river-bed-600" 
                    /*El peer-checked del span solo responde al input, por lo que debo de controlarlo según el true o false
                    que devuelva el darkmode */
                    checked={darkMode}
                    onChange={onToggleChange}/>
                <span className="absolute cursor-pointer rounded-full bg-congress-blue-100 top-0 left-0 right-0 bottom-0 transition-all transition-discrete delay-150 
                        before:absolute before:flex before:items-center before:justify-center
                        before:w-6 before:h-6 before:left-1 before:bottom-1 before:bg-congress-blue before:transition-all before:transition-discrete before:delay-150 
                        before:rounded-full peer-checked:bg-river-bed-300 peer-checked:before:translate-x-8 peer-checked:before:bg-river-bed-600">
                    {/*<LuSunMedium className="text-xl text-congress-blue-50"/> Este por alguna razon no se ve, sospercho que se maneja con estado */}
                    {/* Este elemento tendría que ser condicional, reemplazar el sol al dar click en el botón <LuMoon /> */}
                    {/* <span className="absolute inset-0 flex items-center justify-between px-1.5">
                        <LuSunMedium className="w-4 h-4 text-congress-blue-50" />
                        <LuMoon className="w-4 h-4 text-[#1F2226]" />
                    </span> */}
                </span>
            </label>
            
        </div>
    )
    
}