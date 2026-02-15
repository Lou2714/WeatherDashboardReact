//TODO: Revisar la documentancion de tailwind con respecto a ala animacion, ya existe para simular spinner
/* Me la dio lo profundo, deepseek
<div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />

Recomendable hacer que se vea cargando en toda la pagina, más práctico, igual deepseek me dio una plantilla de componente
de ahí me puedo basar para replicar

*/

export default function Spinner() {
    return(
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center z-5">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
    )
}