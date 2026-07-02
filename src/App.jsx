import Listado from "./pages/listado/Listado.jsx";
import CrearTarea from "./pages/crearTarea/CrearTarea.jsx";
import Botonera from "./pages/botonera/Botonera.jsx";
import Nav from "./components/nav/Nav.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Router, Route, Switch } from "wouter";

export default function App() {
  useEffect(() => {
    const url = "https://api-tareas.ctpoba.edu.ar/api/tareas";
    const config = {
      headers: { Authorization: "48354503" },
    };
    axios
      .get(url, config)
      .then((resp) => {
        console.log(resp);
        setTareas(resp.data.tareas);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("none");

  const tareasMostradas =
    filtro === "none"
      ? tareas
      : tareas.filter((tarea) => tarea.categoria === filtro);

  const ordenarTareas = (ordenSeleccionado) => {
    let tareasOrdenadas = [...tareas];
    if (ordenSeleccionado === "asc") {
      //orden asc = NoUrg a MuyUrg
      tareasOrdenadas.sort((a, b) => a.tipoUrgencia - b.tipoUrgencia); //ASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    } else if (ordenSeleccionado === "desc") {
      //orden desc = MuyUrg a NoUrg
      tareasOrdenadas.sort((a, b) => b.tipoUrgencia - a.tipoUrgencia); //ASSSSSSSSSSSSSSSSSSssssssssssssssssssssssssssssssss
    } else {
      //por fecha de creacion desc
      const tareasOriginales =
        JSON.parse(localStorage.getItem("tareasLocal")) || [];
      tareasOrdenadas = tareasOriginales;
    }
    setTareas(tareasOrdenadas);
    console.log(tareasOrdenadas);
  };

  const guardar = (tarea) => {
    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea);
    setTareas(nuevasTareas);
    localStorage.setItem("tareasLocal", JSON.stringify(nuevasTareas));
  };

  const eliminar = (tarea_id) => {
    const nuevasTareas = tareas.filter((tareas) => tareas.id != tarea_id);
    console.log(nuevasTareas);
    setTareas(nuevasTareas);
    localStorage.setItem("tareasLocal", JSON.stringify(nuevasTareas));
  };

  const cambiarEstado = (tarea_id, nuevoEstado) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === tarea_id) {
        return { ...tarea, estado: nuevoEstado }; // Modificamos solo el estado de esta tarea
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    localStorage.setItem("tareasLocal", JSON.stringify(tareasActualizadas));
  };

  return (
    <div className="App">
      <header>
        <img src="./gestorTareas.png" alt="icono de pagina" />
        <div>
          <h1>Gestor de tareas</h1>
          <h2>By MedFir</h2>
        </div>
      </header>

      <Nav />

      <div className="App-paneles">
        <Router>
          <Switch>
            <Route path="/">
              <h1>Bienvenido al menu de inicio</h1>
            </Route>

            <Route path="/crear">
              <CrearTarea guardar={(tarea) => guardar(tarea)} />
            </Route>

            <Route path="/listado">
              <div className="App-panelesPares">
                <Botonera
                  onCambiarOrden={ordenarTareas}
                  onCambiarFiltro={setFiltro}
                />

                <Listado
                  tareas={tareasMostradas}
                  eliminar={(tarea_id) => eliminar(tarea_id)}
                  cambiarEstado={cambiarEstado}
                />
              </div>
            </Route>

            <Route>
              <h1>Pagina no encontrada - error 404</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
