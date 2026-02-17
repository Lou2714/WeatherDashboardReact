import WeatherWeb from "./pages/WeatherWeb"
import { getThemePreference, saveThemePreference } from "./utils/storage"

import { useState, useEffect } from "react"

function App() {

  const [darkTheme, setDarkTheme] = useState(()=>{
      const savedTheme = getThemePreference();
      //verifica si existe un estado del darkTheme almacenado en el local, si no hay establece el valor como falso
      return savedTheme ? JSON.parse(savedTheme) : false;
  }) 

  useEffect(() =>{
    /*Si el la preferencia del tema es darkTheme se añade la clase "dark" al nivel más alto del 
    árbol html, esto según las indicaciones de tailwind para manejar el darkmode manualmente */
    if (darkTheme) {
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark");
    }
    //Almacena la preferencia del estado en el localStorage
    saveThemePreference(darkTheme);
  }, [darkTheme])

  const handlerToggleChange = () =>{
    setDarkTheme(!darkTheme);
    //setDarkTheme(prev => !prev);
  }

  return (
    <>
      <WeatherWeb onToggleChange={handlerToggleChange} darkMode={darkTheme}/>
    </>
  )
}

export default App
