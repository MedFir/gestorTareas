import { useState } from "react";

export default function useTarea() {
  const [titulo, setTitulo] = useState("");
  const [info, setInfo] = useState("");
  const [tipoUrgencia, setTipoUrgencia] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");

  const cambiarDato = (campo, valor) => {
    const opciones = {
      titulo: (valor) => setTitulo(valor),
      info: (valor) => setInfo(valor),
      tipoUrgencia: (valor) => setTipoUrgencia(valor),
      categoria: (valor) => setCategoria(valor),
      estado: (valor) => setEstado(valor),
    };
    opciones[campo](valor);
  }
  return [
    {titulo,info,tipoUrgencia,categoria,estado},
    cambiarDato
  ]
}