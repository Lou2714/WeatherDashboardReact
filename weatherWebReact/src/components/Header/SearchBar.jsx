import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";


export default function SearchBar({ initialCityValue,onSearchCity }){
    const [city, setCity] = useState("");
//Revisar esto del initial value
    useEffect(() => {
        onSearchCity(initialCityValue);
    }, [initialCityValue]);

    const handlerSubmit = (e) =>{
        e.preventDefault();
        //Es un callback para obtener la ciudad en el componente padre, que es header y así pasar el valor al otro componente
        onSearchCity(city);
        setCity("");
    }

    return(
        <form className="flex flex-row gap-1 items-center rounded-lg bg-congress-blue-100 p-2 w-56 h-10 
                border-2 border-solid border-congress-blue-100 focus-within:border-congress-blue " 
            onSubmit={handlerSubmit}>
            <FaSearch className="text-lg" />
                <input type="text"
                    placeholder="Ingrese una ciudad"
                    className="bg-congress-blue-100 w-full focus:outline-none"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
        </form>
    )
}
