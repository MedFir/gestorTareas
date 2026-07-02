import Tarjeta from "../../components/tarjeta/Tarjeta";
import "./listado.css";
import { useState, useEffect } from "react";
import axios from "axios";


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
              nombre={tarea.nombre}
              descripcion={tarea.descripcion}
              prioridad={tarea.prioridad}
              categoria={tarea.categoria}
              estado={tarea.estado}
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
