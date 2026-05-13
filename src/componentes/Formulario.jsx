import usePersona from "../hooks/usePersona";
export default function Formulario({ guardar }) {
  
  const [persona, setDatoPersona] = usePersona();
  
  const hanlderSubmit = (e) => {
    e.preventDefault();

    const alumno = persona.rol == "alumno";
    const id = (new Date()).getTime();
    
    guardar({...persona, alumno, id});
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
            onChange={(e) => setDatoPersona("titulo", e.target.value)}
            value={persona.titulo}
          />
        </div>

        <div className="inputDiv">
          <label>Descripcion</label>
          <input
            type="text"
            placeholder="ej: Debo $1500"
            onChange={(e) => setDatoPersona("info", e.target.value)}
            value={persona.info}
          />
        </div>
        <div className="inputDiv">
          <label>Urgencia</label>
          <select onChange={(e) => setDatoPersona("rol",e.target.value)} value={persona.rol}>
            <option value="-1">Selecciona</option>
            <option value="alumno">Muy urgente</option>
            <option value="docente">Urgente</option>
            <option value="docente2">No urgente</option>
          </select>
        </div>
        <div className="inputDiv">
          <label>Categoria</label>
          <select onChange={(e) => setDatoPersona("curso", e.target.value)} value={persona.curso}>
            <option value="-1">Selecciona</option>
            <option value="1">Trabajo</option>
            <option value="2">Hogar</option>
            <option value="3">Pagos</option>
            <option value="4">Aprendizaje</option>
            <option value="5">Deberes</option>
          </select>
        </div>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
