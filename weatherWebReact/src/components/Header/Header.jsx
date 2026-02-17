import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

export default function Header({ onSearchCity, onToggleChange, darkMode }) {
    
    return(
        <div className="flex flex-row items-center justify-between p-5 dark:bg-[#131925]">
            {/* Pasa directo porque no utilizo el valor aquí */}
            <SearchBar onSearchCity={onSearchCity} />
            <ThemeButton onToggleChange={onToggleChange} darkMode={darkMode}/>
        </div>
    )
}