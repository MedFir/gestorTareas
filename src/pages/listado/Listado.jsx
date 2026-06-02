import Tarjeta from "../../components/tarjeta/Tarjeta";
import "./listado.css";

export default function Listado({ tareas, eliminar, cambiarEstado }) {
  return (
    <div className="listadoTodo">
      <p className="subtitulo">Tareas:</p>
      <div className="listado">
        {tareas.map((tarea) => (
          <Tarjeta
            key={tarea.id}
            titulo={tarea.titulo}
            info={tarea.info}
            tipoUrgencia={tarea.tipoUrgencia}
            categoria={tarea.categoria}
            estado={tarea.estado}
            id={tarea.id}
            eliminar={() => eliminar(tarea.id)}
            // 2. Se la pasamos a la Tarjeta vinculando su id
            cambiarEstado={(nuevoEstado) =>
              cambiarEstado(tarea.id, nuevoEstado)
            }
          />
        ))}
      </div>
    </div>
  );
}
