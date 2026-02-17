import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

export default function Header({ onSearchCity, onToggleChange, darkMode }) {
    
    return(
        <div className="flex flex-row items-center justify-between lg:justify-center lg:gap-12 p-5 md:py-5 md:px-10">
            {/* Pasa directo porque no utilizo el valor aquí */}
            <SearchBar onSearchCity={onSearchCity} />
            <ThemeButton onToggleChange={onToggleChange} darkMode={darkMode}/>
        </div>
    )
}