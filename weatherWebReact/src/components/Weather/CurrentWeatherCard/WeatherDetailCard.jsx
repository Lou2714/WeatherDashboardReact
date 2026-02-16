//Dependiendo de si es humedad, precipitacion o viento cambian todos los valores y también de si es °C o °F
export default function WeatherDetailCard({ icon, value, detail }) {

    return(
        <div className="flex flex-col justify-center items-center bg-congress-blue-50 w-28 py-2 border border-congress-blue-200 rounded-md">
            {icon}
            <p>{value}</p>
            <p>{detail}</p>
        </div>
    )
}