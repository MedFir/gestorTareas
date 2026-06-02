import useToggle from '../../hooks/useToggle.jsx';
import "./tarjeta.css";

// 1. Recibimos cambiarEstado en las props
export default function Tarjeta({ titulo, info, tipoUrgencia, categoria, estado, eliminar, id, cambiarEstado }) {

  const [estadoModal, mostrarModal] = useToggle();

  const valorEstadoOriginal = estado;

  let tipoUrgenciaTexto = "error";
  if (tipoUrgencia == "1"){
    tipoUrgenciaTexto = "No urgente";
  }else if (tipoUrgencia == "2"){
    tipoUrgenciaTexto = "Urgente";
  }else if (tipoUrgencia == "3"){
    tipoUrgenciaTexto = "Muy urgente";
  }

  let estadoTexto = "error";
  if (estado == "1"){
    estadoTexto = "Pendiente";
  }else if (estado == "2"){
    estadoTexto = "En proceso";
  }else if (estado == "3"){
    estadoTexto = "Finalizado";
  }

  return (
    <>
      <div className="tarjeta">
        <div className="tareaTitulo">
          <p>{titulo}</p>
        </div>
        <div className="tareaInfo">
          <p>{tipoUrgenciaTexto}</p>
          <p>{estadoTexto}</p>
          <p>{categoria}</p>
        </div>
        <div className="tareaBotones">
          <button onClick={mostrarModal} className="tareaBotonDetalles">Detalles</button>
          <button onClick={() => eliminar()} className="tareaBotonEliminar">Eliminar</button>
        </div>
      </div>

      <div className='fondoDetalles' style={{ display: estadoModal ? 'block' : 'none' }}></div>

      <div
        id={id}
        className="modalDetalles"
        style={{ display: estadoModal ? 'block' : 'none' }}
      >
        <div className="navDetalles">
          <p>{titulo}</p>
          <button onClick={mostrarModal} className="cerrarDetalles">x</button>
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
  )
}
