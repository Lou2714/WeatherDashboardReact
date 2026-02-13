import { MdMoreHoriz } from "react-icons/md";

const handlerClick = () =>{
    console.log("Abriendo menu de opciones de temperatura");
    
}

export default function MoreButton() {
    return(
        <button className="flex justify-center cursor-pointer relative left-28 top-2 bg-congress-blue-100 rounded-md px-1
                    transition-all transition-discrete delay-150"
                onClick={handlerClick}>
            <MdMoreHoriz className="text-3xl active:text-congress-blue active:border active:border-congress-blue active:rounded-lg 
            hover:border hover:border-congress-blue hover:rounded-lg hover:text-congress-blue" />
        </button>
    )
}