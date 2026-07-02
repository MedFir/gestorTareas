import Tarjeta from "../../components/tarjeta/Tarjeta";
import "./listado.css";

export default function Listado({ tareas, eliminar, cambiarEstado }) {
  return (
    <div className="listadoTodo">
      <p className="subtitulo">Tareas</p>
      <div className="listado">
        {tareas.length === 0 ? (
          <p className="no-tareas">No hay tareas pendientes. ¡Buen trabajo!</p>
        ) : (
          tareas.map((tarea) => (
            <Tarjeta
              key={tarea.id}
              titulo={tarea.titulo}
              info={tarea.info}
              tipoUrgencia={tarea.tipoUrgencia}
              categoria={tarea.categoria}
              estado={tarea.estado}
              id={tarea.id}
              eliminar={() => eliminar(tarea.id)}
              cambiarEstado={(nuevoEstado) =>
                cambiarEstado(tarea.id, nuevoEstado)
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
