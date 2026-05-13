import { useState } from "react";

export default function usePersona() {
  const [documento, setDocumento] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [nombres, setNombres] = useState("");
  const [rol, setRol] = useState("");
  const [curso, setCurso] = useState("");
  const [divicion, setDivicion] = useState("");

  const cambiarDato = (campo, valor) => {
    const opciones = {
      documento: (valor) => setDocumento(valor),
      apellidos: (valor) => setApellidos(valor),
      nombres: (valor) => setNombres(valor),
      rol: (valor) => setRol(valor),
      curso: (valor) => setCurso(valor),
      divicion: (valor) => setDivicion(valor),
    };
    opciones[campo](valor);
  }
  return [
    {documento,apellidos,nombres,rol,curso,divicion},
    cambiarDato
  ]
}