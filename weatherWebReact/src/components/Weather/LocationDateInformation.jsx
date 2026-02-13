import { LuMapPin } from "react-icons/lu";

//Tendrá un props para indicar la ciudad, país y fecha
export default function LocationDateInformation() {
    return (
        <div className="flex flex-col gap-1 mb-8 mt-2">
            <div className="flex flex-row justify-center items-center gap-1">
                <LuMapPin className="text-xl" />
                <h3 className="text-xl font-semibold">San Salvador, El Salvador</h3>
            </div>
            <div>
                <div className="text-center">
                    <p className="">jueves, 12 de febrero de 2026</p>
                </div>
            </div>
        </div>
    )
}