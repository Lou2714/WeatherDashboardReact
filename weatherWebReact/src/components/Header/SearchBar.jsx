import { FaSearch } from "react-icons/fa";

const handlerSubmit = (e) =>{
    e.preventDefault();
    //Debo obtener el valor
}

export default function SearchBar(){
    return(
        <form className="flex flex-row gap-1 items-center rounded-lg bg-congress-blue-100 p-2 w-56 h-10 
                border-2 border-solid border-congress-blue-100 focus-within:border-congress-blue " 
            onSubmit={handlerSubmit}>
            <FaSearch className="text-lg" />
                <input type="text"
                    placeholder="Ingrese una ciudad"
                    className="bg-congress-blue-100 w-full focus:outline-none"
                />
        </form>
    )
}
