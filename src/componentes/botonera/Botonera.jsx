import "./Botonera.css";
import FiltroCategoria from "../filtroCategoria/FiltroCategoria.jsx";
import OrdenUrgencia from "../ordenUrgencia/OrdenUrgencia.jsx";

export default function Botonera ({ onCambiarOrden, onCambiarFiltro }){

    return(
        <nav>
            <FiltroCategoria onCambiarFiltro={onCambiarFiltro}/>
            <OrdenUrgencia onCambiarOrden={onCambiarOrden}/>
        </nav>
    )
}