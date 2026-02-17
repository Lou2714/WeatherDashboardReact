import { FaSearch } from "react-icons/fa";
import { useState } from "react";


export default function SearchBar({ onSearchCity }){
    const [city, setCity] = useState("");

    const handlerSubmit = (e) =>{
        e.preventDefault();
        //Verifica que el valor no sea vacío, si no hay valor no se envia nada
        if (city.trim()) {
            //Es un callback para obtener la ciudad en el componente padre, que es header y así pasar el valor al otro componente
            onSearchCity(city);
            setCity("");
        }
        
    }

    return(
        <form className="flex flex-row gap-1 items-center rounded-lg bg-congress-blue-100 p-2 w-56 md:w-4/6 lg:w-2/6  h-10 
                border-2 border-solid border-congress-blue-100 focus-within:border-congress-blue dark:bg-river-bed-300 dark:focus-within:border-river-bed-600" 
            onSubmit={handlerSubmit}>
            <FaSearch className="text-lg" />
                <input type="text"
                    placeholder="Ingrese una ciudad"
                    className="bg-congress-blue-100 dark:bg-river-bed-300 w-full focus:outline-none"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
        </form>
    )
}
