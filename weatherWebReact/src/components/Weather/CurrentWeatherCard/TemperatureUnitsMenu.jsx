export default function TemperatureUnitsMenu() {
    return(
        <div className="absolute top-8 right-12 p-3 bg-congress-blue-50 border rounded-md border-congress-blue-200">
            <p>Unidades de temperatura</p>
            <div className="flex flex-row items-center gap-2">
                <input type="radio" name="temperatureUnit" id="celsius" value="celsius" />
                <label for="celsius">Celsius (°C)</label>
            </div>
            <div className="flex flex-row items-center gap-2">
                <input type="radio" name="temperatureUnit" id="fahrenheit" value="fahrenheit" />
                <label for="fahrenheit">Fahrenheit (°F)</label>
            </div>
        </div>
    )
}