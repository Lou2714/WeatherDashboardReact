
export default function ForecastCard({ icon, day, minTem, maxTem }) {
    return(
        <div className="flex flex-col items-center gap-1 p-2 w-24 border rounded-lg border-congress-blue-200 bg-congress-blue-100">
            <h2 className="text-lg font-semibold">{day}</h2>
            <img src={icon} alt="Icono del clima"/>
            <p>{maxTem}°/{minTem}°</p>
        </div>
    )
}