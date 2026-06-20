import useToggle from "../../hooks/useToggle.jsx";
import "./tarjeta.css";

export default function Tarjeta({
  titulo,
  info,
  tipoUrgencia,
  categoria,
  estado,
  eliminar,
  id,
  cambiarEstado,
}) {
  const [estadoModal, mostrarModal] = useToggle();

  const valorEstadoOriginal = estado;

  let tipoUrgenciaTexto = "";
  let colorFondo = "";
  let colorTexto = "";
  if (tipoUrgencia == "1") {
    tipoUrgenciaTexto = "No urgente";
    colorFondo = "#ef444440";
    colorTexto = "#ef4444";
  } else if (tipoUrgencia == "2") {
    tipoUrgenciaTexto = "Urgente";
    colorFondo = "#fff20040";
    colorTexto = "#fff200";
  } else if (tipoUrgencia == "3") {
    tipoUrgenciaTexto = "Muy urgente";
    colorFondo = "#77ef4440";
    colorTexto = "#77ef44";
  }

  let estadoTexto = "";
  if (estado == "1") {
    estadoTexto = "Pendiente";
  } else if (estado == "2") {
    estadoTexto = "En proceso";
  } else if (estado == "3") {
    estadoTexto = "Finalizado";
  }

  return (
    <>
      <div className="tarjeta">

        <div
         className="tareaUrgencia"
         style={{
          backgroundColor: colorFondo,  
          color: colorTexto
        }
        }
         >
          <p>{tipoUrgenciaTexto}</p>
        </div>

        <div className="tareaTitulo">
          <p>{titulo}</p>
        </div>
        <div className="tareaInfo">
          <p>{estadoTexto}</p>
          <p>{categoria}</p>
        </div>
        <hr className="tareaHr"/>
        <div className="tareaBotones">
          <button onClick={mostrarModal} className="tareaBotonDetalles">
            <img src="./eye.png" alt="icono" />
            <p>Ver detalles</p>
          </button>
          <button onClick={() => eliminar()} className="tareaBotonEliminar">
            <img src="./trash.png" alt="icono" />
          </button>
        </div>
      </div>

      <div
        className="fondoDetalles"
        style={{ display: estadoModal ? "block" : "none" }}
      ></div>

      <div
        id={id}
        className="modalDetalles"
        style={{ display: estadoModal ? "block" : "none" }}
      >
        <div className="navDetalles">
          <p>{titulo}</p>
          <button onClick={mostrarModal} className="cerrarDetalles">
            x
          </button>
        </div>

        <div className="mainDetalles">
          <div className="cabezeraDetalles">
            <p>{tipoUrgenciaTexto}</p>

            <div className="contenedor-cambio-estado">
              <label htmlFor={`cambiar-estado-${id}`}>Estado: </label>
              <select
                id={`cambiar-estado-${id}`}
                value={valorEstadoOriginal}
                onChange={(e) => cambiarEstado(e.target.value)}
              >
                <option value="1">Pendiente</option>
                <option value="2">En proceso</option>
                <option value="3">Finalizado</option>
              </select>
            </div>

            <p>{categoria}</p>
          </div>
          <hr className="linea"></hr>
          <div>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </>
  );
}
