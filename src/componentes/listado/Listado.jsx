import Tarjeta from '../tarjeta/Tarjeta';
import "./listado.css";
export default function Listado ({tareas, eliminar}){
  
  return (
    <div className="listadoTodo"> 
      <p className='subtitulo'>Tareas:</p>
      <div className="listado">
        {
          tareas.map((tarea) =>
            <Tarjeta 
              key={tarea.id}
              titulo={tarea.titulo}
              info={tarea.info}
              tipoUrgencia={tarea.tipoUrgencia}
              categoria={tarea.categoria}
              estado={tarea.estado}
              id={tarea.id}
              eliminar={() => eliminar(tarea.id)}
            />
        )}
      </div>
    </div>
  )
}