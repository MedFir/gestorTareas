import Listado from "./componentes/listado/Listado.jsx";
import CrearTarea from "./componentes/crearTarea/CrearTarea.jsx";
import "./App.css";
import { useState } from "react";

export default function App() {
  const tareasLocalStorage = JSON.parse(localStorage.getItem('tareasLocal'));
  let verificador = [];
  if(!tareasLocalStorage){
    verificador = [];
  }else{
    verificador = [...tareasLocalStorage]
  }

  const [tareas, setTareas] = useState(verificador);

  const guardar = (tarea) => {
    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea);
    setTareas(nuevasTareas);
    localStorage.setItem('tareasLocal', JSON.stringify(nuevasTareas));
  };

  const eliminar = (tarea_id) => {
    const nuevasTareas = tareas.filter((tareas) => tareas.id != tarea_id);
    console.log(nuevasTareas);
    setTareas(nuevasTareas);
    localStorage.setItem('tareasLocal', JSON.stringify(nuevasTareas));
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
