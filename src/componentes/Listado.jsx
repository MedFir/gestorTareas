import Tarjeta from './Tarjeta';
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
              eliminar={() => eliminar(tarea.id)}
            />
        )}
      </div>
    </div>
  )
}