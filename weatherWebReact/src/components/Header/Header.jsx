import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

export default function Header() {
    return(
        <div className="flex flex-row items-center justify-between p-5">
            <SearchBar />
            <ThemeButton />
        </div>
    )
}