import "./Botonera.css";
import FiltroCategoria from "../filtroCategoria/FiltroCategoria.jsx";
import OrdenUrgencia from "../ordenUrgencia/OrdenUrgencia.jsx";

export default function Botonera (){

    return(
        <nav>
            <FiltroCategoria/>
            <OrdenUrgencia/>
        </nav>
    )
}