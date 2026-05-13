

export default function Tarjeta({documento,apellidos,nombres, alumno, curso, divicion, eliminar}) {
  
  return ( 
    <div 
      className="tarjeta"
      style={{
        backgroundColor: alumno ? "#8d5c24" : "#8d5c24",
        color: alumno ? "#eac94c" : "#eac94c"
      }}
    >
      <span className="eliminar" onClick={() => eliminar()} >x</span>
      <h2>{documento}</h2>
      <h3>{apellidos}, {nombres}</h3>
      <h3>{curso}, {divicion}</h3>
      
    </div>
  )
}