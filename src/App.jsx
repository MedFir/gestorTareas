import Listado from "./componentes/Listado.jsx";
import CrearTarea from "./componentes/CrearTarea.jsx";
import "./App.css";
import { useState } from "react";
const tareasDefault = [
  {
    id: 1,
    titulo: "Prueba 17/02",
    info: "Estudiar matematicas",
    tipoUrgencia: "Aguero",
    categoria: "",
    estado: "pendiente?",
  },
];

export default function App() {
  const [tareas, setTareas] = useState(tareasDefault);
  const guardar = (tarea) => {
    console.log(tarea);

    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea);
    setTareas(nuevasTareas);
  };

  const eliminar = (tarea_id) => {
    const nuevasTareas = tareas.filter((tareas) => tareas.id != tarea_id);
    console.log(nuevasTareas);
    setTareas(nuevasTareas);
  };

  return (
    <div className="App">
      <header>
        <h1>Tareas by MedFir</h1>
      </header>

      <div className="contenedor">
        <CrearTarea guardar={(tarea) => guardar(tarea)} />

        <Listado tareas={tareas} eliminar={(tarea_id) => eliminar(tarea_id)} />
      </div>
    </div>
  );
}
