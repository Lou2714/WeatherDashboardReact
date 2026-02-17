const TEMPERATURE_UNIT_KEY = "temperatureUnit";
const THEME_PREFERENCE = "darkMode";

export const saveTemperatureUnitChecked = (unit) =>{
    localStorage.setItem(TEMPERATURE_UNIT_KEY, unit);
}

export const getTemperatureUnit = () =>{
    return localStorage.getItem(TEMPERATURE_UNIT_KEY);
}

export const saveThemePreference = (theme) =>{
    //Será true o false
    localStorage.setItem(THEME_PREFERENCE, theme);
}

export const getThemePreference = () =>{
    return localStorage.getItem(THEME_PREFERENCE);
}