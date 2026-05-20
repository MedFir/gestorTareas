import useToggle from '../../hooks/useToggle.jsx';
import "./tarjeta.css";
export default function Tarjeta({ titulo, info, tipoUrgencia, categoria, estado, eliminar, id }) {

  const [estadoModal, mostrarModal] = useToggle();
  
  if (tipoUrgencia == "1"){
    tipoUrgencia = "No urgente";
  }else if (tipoUrgencia == "2"){
    tipoUrgencia = "Urgente";
  }else if (tipoUrgencia == "3"){
    tipoUrgencia = "Muy urgente";

  }else{tipoUrgencia = "ERROR";}

  if (estado == "1"){
    estado = "Pendiente";
  }else if (estado == "2"){
    estado = "En proceso";
  }else if (estado == "3"){
    estado = "Finalizado";

  }else{estado = "ERROR";}

  return ( 
    <>

    <div className="tarjeta">
      <div className="tareaTitulo">
        <p>{titulo}</p>
      </div>
      <div className="tareaInfo">
        <p>{tipoUrgencia}</p>
        <p>{estado}</p>
        <p>{categoria}</p>
      </div>
      <div className="tareaBotones">
        <button onClick={mostrarModal} className="tareaBotonDetalles">Detalles</button>
        <button onClick={() => eliminar()} className="tareaBotonEliminar">Eliminar</button>
      </div>
      </div>

      
      <div className='fondoDetalles' style={{ display: estadoModal ? 'block' : 'none' }}></div>
      <div
        id='{id}'
        className="modalDetalles"
        style={{ display: estadoModal ? 'block' : 'none' }}
      >
        
        <div className="navDetalles">
          <p>{titulo}</p>
          <button onClick={mostrarModal} className="cerrarDetalles">x</button>
        </div>
        
        <div className="mainDetalles">
            <div className="cabezeraDetalles">
              <p>{tipoUrgencia}</p>
              <p>{estado}</p>
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