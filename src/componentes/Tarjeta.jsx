

export default function Tarjeta({titulo,info,tipoUrgencia,categoria,estado, eliminar}) {
  
  return ( 
    <div 
      className="tarjeta"
      style={{
        backgroundColor: tipoUrgencia ? "#8d5c24" : "#8d5c24",
        color: tipoUrgencia ? "#eac94c" : "#eac94c"
      }}
    >
      <span className="eliminar" onClick={() => eliminar()} >x</span>
      <h2>{titulo}</h2>
      <h3>{info}, {tipoUrgencia}</h3>
      <h3>{categoria}, {estado}</h3>
      
    </div>
  )
}