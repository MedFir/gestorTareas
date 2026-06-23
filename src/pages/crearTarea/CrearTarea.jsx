import useTareas from "../../hooks/useTareas";
import "./crearTarea.css";
export default function CrearTarea({ guardar }) {
  const [tarea, setDatoTarea] = useTareas();

  const hanlderSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime();

    //tipoUrgencia:
    //  "1" = No urgente.
    //  "2" = Urgente.
    //  "3" = Muy urgente.

    //estado:
    // "1" = "Pendente" default
    // "2" = "En proceso"
    // "3" = "Finalizado"

    const estado = "1";
    guardar({ ...tarea, estado, id });
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
            onChange={(e) => setDatoTarea("titulo", e.target.value)}
            value={tarea.titulo}
            required
          />
        </div>

        <div className="inputDiv">
          <label>Nivel de urgencia</label>
          <select
            onChange={(e) => setDatoTarea("tipoUrgencia", e.target.value)}
            value={tarea.tipoUrgencia}
            required
          >
            <option value="" disabled hidden>
              Selecciona
            </option>
            <option value="3">Muy urgente</option>
            <option value="2">Urgente</option>
            <option value="1">No urgente</option>
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
            onChange={(e) => setDatoTarea("info", e.target.value)}
            value={tarea.info}
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
