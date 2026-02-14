import { MdErrorOutline } from "react-icons/md";

export default function ErrorMessage({ message }){
    return(
        <div className="absolute flex justify-center items-center rounded-md bg-white/30 backdrop-blur-sm w-full h-full">
            <div className="flex flex-row items-center justify-center gap-2 p-2 border rounded-md border-red-900 bg-red-700
                w-5/6">
                <MdErrorOutline className="text-seashell-white text-2xl " />
                <p className="text-seashell-white ">{message}</p>
            </div>
        </div>
    )
}
