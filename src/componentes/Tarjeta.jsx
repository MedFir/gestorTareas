

export default function Tarjeta({titulo, info, tipoUrgencia, categoria, estado, eliminar}) {
  const color = false;

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
    <div 
      className="tarjeta"
      style={{
        backgroundColor: color ? "#8d5c24" : "#8d5c24",
        color: color ? "#eac94c" : "#eac94c"
      }}
    >
      <div className="tareaTitulo">
        <p>{titulo}</p>
      </div>
      <div className="tareaInfo">
        <p>{tipoUrgencia}</p>
        <p>{estado}</p>
        <p>{categoria}</p>
      </div>
      <div className="tareaBotones">
        <button className="tareaBotonDetalles">Detalles</button>
        <button onClick={() => eliminar()} className="tareaBotonEliminar">Eliminar</button>
      </div>
      
    </div>
  )
}