import Listado from './componentes/Listado.jsx';
import Formulario from './componentes/Formulario.jsx';
import './App.css';
import { useState } from 'react';
const personasDefault = [ 
  { 
    id: 1,
    documento: '11182998',
    nombres: 'Thiago',
    apellidos: 'Aguero',
    alumno: true,
    curso: '7',
    divicion: '2'
  },
  {
    id: 2,
    documento: '48354503',
    nombres: 'Kevin',
    apellidos: 'Ariaudo',
    alumno: true,
    curso: '7',
    divicion: '2'
  },
  {
    id: 3,
    documento: '2214112',
    nombres: 'Ezequiel',
    apellidos: 'Suarez',
    alumno: false,
    curso: '7',
    divicion: '2'
  },
  
]

export default function App (){

  const [personas, setPersonas] = useState(personasDefault)
  const guardar = (persona) => {
    console.log(persona)
    
    let nuevasPersonas = [...personas];
    nuevasPersonas.push(persona);
    setPersonas(nuevasPersonas);
  }

  const eliminar = (persona_id) => {
    const nuevasPersonas = personas.filter((persona) =>
      persona.id != persona_id
    );
    console.log(nuevasPersonas)
    setPersonas(nuevasPersonas)
  }
  
  return (
    <div className='App'>
      
      <header>
      <h1>Tareas by MedFir</h1>
      </header>
      
      <div className="contenedor">
        
        <Formulario 
          guardar={(persona) => guardar(persona)}
        />
        
        <Listado
          personas={personas}
          eliminar={(persona_id)=> eliminar(persona_id)}
        />
        
      </div>
      
    </div>
  )
  
}