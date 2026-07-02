import useTareas from "../../hooks/useTareas";
import "./crearTarea.css";
import axios from "axios";

export default function CrearTarea({ guardar }) {
  const [tarea, setDatoTarea] = useTareas();

  const hanlderSubmit = (e) => {
    e.preventDefault();

    const estado = "1";
    const tareaActual = { ...tarea, estado };//tengo que ver porque se manda priridad como string
    console.log(tareaActual)

    const url = "https://api-tareas.ctpoba.edu.ar/api/tareas";
    const config = {
      headers: { Authorization: "48354503" },
    };

    axios
      .post(url, tareaActual, config)
      .then((resp) => {
        console.log(resp);
        alert("Persona guardada");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al guardar");
      });
    
  };

  return (
    <div className="formulario">
      <h2>Nueva Tarea</h2>

      <form className="formDiv" onSubmit={hanlderSubmit}>
        <div className="inputDiv">
          <label>Titulo</label>
          <input
            type="text"
            placeholder="ej: Pagar la luz"
            onChange={(e) => setDatoTarea("nombre", e.target.value)}
            value={tarea.nombre}
            required
          />
        </div>

        <div className="inputDiv">
          <label>Nivel de urgencia</label>
          <select
            onChange={(e) => setDatoTarea("prioridad", e.target.value)}
            value={tarea.prioridad}
            required
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            <option value={3}>Muy urgente</option>
            <option value={2}>Urgente</option>
            <option value={1}>No urgente</option>
          </select>
        </div>
        <div className="inputDiv">
          <label>Categoria</label>
          <select
            onChange={(e) => setDatoTarea("categoria", e.target.value)}
            value={tarea.categoria}
            required
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            <option value="trabajo">Trabajo</option>
            <option value="hogar">Hogar</option>
            <option value="pagos">Pagos</option>
            <option value="aprendizaje">Aprendizaje</option>
            <option value="deberes">Deberes</option>
          </select>
        </div>

        <div className="inputDiv">
          <label>Descripcion</label>
          <textarea
            type="text"
            placeholder="máx. 600 caracteres"
            maxLength={600}
            cols="4"
            onChange={(e) => setDatoTarea("descripcion", e.target.value)}
            value={tarea.descripcion}
            required
          />
        </div>

        <button className="submitButton" type="submit">
          <img src="./iconoCrearTarea.png" alt="icono boton" />
          Crear tarea
        </button>
      </form>
    </div>
  );
}
