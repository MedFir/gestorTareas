import Listado from "./pages/listado/Listado.jsx";
import CrearTarea from "./pages/crearTarea/CrearTarea.jsx";
import Botonera from "./pages/botonera/Botonera.jsx";
import Nav from "./components/nav/Nav.jsx";
import Footer from "./components/footer/Footer.jsx";
import Cargando from "./components/cargando/Cargando.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Router, Route, Switch } from "wouter";

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(false);

  //Estados para recordar qué filtros eligió el usuario
  const [filtro, setFiltro] = useState("none");
  const [orden, setOrden] = useState("none");

  const ordenarTareas = (ordenSeleccionado) => {
    actualizar(ordenSeleccionado);
  };

  //PUT
  const cambiarEstado = (tarea_id, nuevoEstado) => {

    const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/estado/${tarea_id}`;

    const body = { 
        estado: nuevoEstado 
    };

    const config = {
      headers: { Authorization: "48354503" },
    };
    axios
      .put(url, body, config)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
        alert("Tarea no actualzada")
      })
      .finally(() => {
        actualizar();
      });
  };

  const guardar = (tarea) => {
    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea);
    setTareas(nuevasTareas);
  };

  //GET
  const actualizar = () => {
    setCargando(true);
    const url = "https://api-tareas.ctpoba.edu.ar/api/tareas";
    const config = {
      headers: { Authorization: "48354503" },
      params: {} 
    };

    if (orden === "ASC" || orden === "DESC") {
      config.params.orden = orden;
    }
    if (filtro !== "none") {
      config.params.categoria = filtro;
    }

    axios
      .get(url, config)
      .then((resp) => {
        //console.log(resp);
        setTareas(resp.data.tareas); 
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setCargando(false); 
      });
  };

  useEffect(() => {
    actualizar();
  }, [filtro, orden]);

  //DELETE
  const eliminar = (tarea_id) => {
    setCargando(true);
    const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/${tarea_id}`;
    const config = {
      headers: { Authorization: "48354503" },
    };
    axios
      .delete(url, config)
      .then((resp) => {
        //console.log(resp);
      })
      .catch((error) => {
        console.error(error);
        alert("No se elimino la tarea, error: "+error);
      })
      .finally(() => {
        setCargando(false);
        actualizar();
      });
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

      {cargando && (
        <Cargando />
      )}

      <div className="App-paneles">
        <Router>
          <Switch>
            <Route path="/">
              <h1>Bienvenido al menu de inicio</h1>
            </Route>

            <Route path="/crear">
              <CrearTarea 
                guardar={(tarea) => guardar(tarea)}
                actualizar={actualizar}
                setCargando={setCargando}
              />
            </Route>

            <Route path="/listado">
              <div className="App-panelesPares">
                <Botonera
                  onCambiarOrden={setOrden}
                  onCambiarFiltro={setFiltro}
                />

                <Listado
                  tareas={tareas}
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
      <Footer/>
    </div>
  );
}
