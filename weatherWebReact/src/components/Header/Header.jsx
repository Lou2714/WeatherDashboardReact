import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

export default function Header({ onSearchCity }) {
    const defaultCity = "San Salvador"
    
    return(
        <div className="flex flex-row items-center justify-between p-5">
            {/* Pasa directo porque no utilizo el valor aquí */}
            <SearchBar initialCityValue={defaultCity} onSearchCity={onSearchCity} />
            <ThemeButton />
        </div>
    )
}