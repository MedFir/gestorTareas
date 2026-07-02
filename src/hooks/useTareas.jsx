import { useState } from "react";

export default function useTarea() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");

  const cambiarDato = (campo, valor) => {
    const opciones = {
      nombre: (valor) => setNombre(valor),
      descripcion: (valor) => setDescripcion(valor),
      prioridad: (valor) => setPrioridad(valor),
      categoria: (valor) => setCategoria(valor),
      estado: (valor) => setEstado(valor),
    };
    opciones[campo](valor);
  };
  return [{ nombre, descripcion, prioridad, categoria, estado }, cambiarDato];
}
