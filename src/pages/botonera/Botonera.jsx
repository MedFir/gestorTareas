import "./Botonera.css";
import FiltroCategoria from "../../components/filtroCategoria/FiltroCategoria.jsx";
import OrdenUrgencia from "../../components/ordenUrgencia/OrdenUrgencia.jsx";

export default function Botonera({ onCambiarOrden, onCambiarFiltro }) {
  return (
    <nav>
      <FiltroCategoria onCambiarFiltro={onCambiarFiltro} />
      <OrdenUrgencia onCambiarOrden={onCambiarOrden} />
    </nav>
  );
}
