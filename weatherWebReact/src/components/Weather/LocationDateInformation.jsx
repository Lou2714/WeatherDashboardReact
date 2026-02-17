import { LuMapPin } from "react-icons/lu";

//Tendrá un props para indicar la ciudad, país y fecha
export default function LocationDateInformation({ locationName, locationCountry, date }) {
    return (
        <div className="flex flex-col gap-1 mb-8 mt-2 dark:text-seashell-white">
            <div className="flex flex-row justify-center items-center gap-1">
                <LuMapPin className="text-xl" />
                <h3 className="text-xl font-semibold">{locationName}, {locationCountry}</h3>
            </div>
            <div>
                <div className="text-center">
                    <p className="">{date}</p>
                </div>
            </div>
        </div>
    )
}