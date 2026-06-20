import "./Botonera.css";
import FiltroCategoria from "../../components/filtroCategoria/FiltroCategoria.jsx";
import OrdenUrgencia from "../../components/ordenUrgencia/OrdenUrgencia.jsx";

export default function Botonera({ onCambiarOrden, onCambiarFiltro }) {
  return (
    <nav>
      <div className="nav-contenidos">
        <FiltroCategoria onCambiarFiltro={onCambiarFiltro} />
        <OrdenUrgencia onCambiarOrden={onCambiarOrden} />
      </div>
    </nav>
  );
}
