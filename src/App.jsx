import Listado from "./componentes/listado/Listado.jsx";
import CrearTarea from "./componentes/crearTarea/CrearTarea.jsx";
import Botonera from "./componentes/botonera/Botonera.jsx";
import "./App.css";
import { useState } from "react";

export default function App() {
  const verificador = JSON.parse(localStorage.getItem('tareasLocal'));
  let tareasLocalStorage = [];
  if(!verificador){
    tareasLocalStorage = [];
  }else{
    tareasLocalStorage = [...verificador]
  }
  const [tareas, setTareas] = useState(tareasLocalStorage);

  const [filtro, setFiltro] = useState("none");

  const tareasMostradas = filtro === "none" ? tareas : tareas.filter(tarea => tarea.categoria === filtro);

  const ordenarTareas = (ordenSeleccionado) => {
    let tareasOrdenadas = [...tareas];
    if (ordenSeleccionado === "asc") {
      //orden asc = NoUrg a MuyUrg
      tareasOrdenadas.sort((a, b) => a.tipoUrgencia - b.tipoUrgencia); 
    } else if (ordenSeleccionado === "desc") {
      //orden desc = MuyUrg a NoUrg
      tareasOrdenadas.sort((a, b) => b.tipoUrgencia - a.tipoUrgencia);
    } else {
      //por fecha de creacion desc
      const tareasOriginales = JSON.parse(localStorage.getItem('tareasLocal')) || [];
      tareasOrdenadas = tareasOriginales;
    }
    setTareas(tareasOrdenadas);
    console.log(tareasOrdenadas)
  };

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
      <Botonera onCambiarOrden={ordenarTareas} onCambiarFiltro={setFiltro}/>

      <div className="contenedor">
        <CrearTarea guardar={(tarea) => guardar(tarea)} />
          
        <Listado tareas={tareasMostradas} eliminar={(tarea_id) => eliminar(tarea_id)} />
      </div>
    </div>
  );
}
