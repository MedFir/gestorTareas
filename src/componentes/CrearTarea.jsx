import useTareas from "../hooks/useTareas";
export default function CrearTarea({ guardar }) {
  
  const [tarea, setDatoTarea] = useTareas();
  
  const hanlderSubmit = (e) => {
    e.preventDefault();

    const id = (new Date()).getTime();
    const estado = "pendiente";
    guardar({ ...tarea, estado, id });
    
  };

  return (
    <div className="formulario">
      <h2>Nueva Tarea:</h2>

      <form onSubmit={hanlderSubmit}>
        
        <div className="inputDiv">
          <label>Titulo:</label>
          <input
            type="text"
            placeholder="ej: Pagar la luz"
            onChange={(e) => setDatoTarea("titulo", e.target.value)}
            value={tarea.titulo}
            required
          />
        </div>

        <div className="inputDiv">
          <label>Descripcion</label>
          <input
            type="text"
            placeholder="ej: Debo $1500"
            onChange={(e) => setDatoTarea("info", e.target.value)}
            value={tarea.info}
            required
          />
        </div>
        <div className="inputDiv">
          <label>Urgencia</label>
          <select onChange={(e) => setDatoTarea("tipoUrgencia",e.target.value)} value={tarea.tipoUrgencia} required>
            <option value="" disabled selected hidden>Selecciona</option>
            <option value="3">Muy urgente</option>
            <option value="2">Urgente</option>
            <option value="1">No urgente</option>
          </select>
        </div>
        <div className="inputDiv">
          <label>Categoria</label>
          <select onChange={(e) => setDatoTarea("categoria", e.target.value)} value={tarea.categoria} required>
            <option value="" disabled selected hidden>Selecciona</option>
            <option value="trabajo">Trabajo</option>
            <option value="hogar">Hogar</option>
            <option value="pagos">Pagos</option>
            <option value="aprendizaje">Aprendizaje</option>
            <option value="deberes">Deberes</option>
          </select>
        </div>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
