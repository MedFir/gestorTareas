import Tarjeta from './Tarjeta';
export default function Listado ({personas, eliminar}){
  
  return (
    <div className="listadoTodo"> 
      <p className='subtitulo'>Tareas:</p>
      <div className="listado">
        {
          personas.map((persona) =>
            <Tarjeta
              key={persona.id}
              documento={persona.documento}
              apellidos={persona.apellidos}
              nombres={persona.nombres}
              alumno={persona.alumno}
              curso={persona.curso}
              divicion={persona.divicion}
              eliminar={() => eliminar(persona.id)}
            />
        )}
      </div>
    </div>
  )
}