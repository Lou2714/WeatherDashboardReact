import Sunny from "../../assets/sunny.png"

export default function ForecastCard(params) {
    return(
        <div className="flex flex-col items-center gap-2 p-2 w-24 border rounded-lg border-congress-blue-200 bg-congress-blue-100">
            <h2 className="text-lg font-semibold">Jueves</h2>
            <img src={Sunny} alt="Icono del clima" className="w-12"/>
            <p>32.4°/16.9°</p>
        </div>
    )
}