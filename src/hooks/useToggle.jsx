import { useState } from 'react';


//esto es un hook personalizado para intercambiar el estado de visibilidad de un modal
//importalo con:    import useToggle from '../../hooks/useToggle';
//usalo asi en el script: const [nombreDeEstado, nombreFuncionAlternarModal] = useToggle();
//usalo asi en el modal:  style={{ display: nombreDeEstado ? 'flex' : 'none' }}
//cambia el estado con: alternarModal();  o  onClick={alternarModal}

export default function useToggle (estadoInicial = false)  {
    // estadoInicial es false por defecto (display: none)
    const [isVisible, setIsVisible] = useState(estadoInicial);

    // Función que invierte el valor
    const toggle = () => setIsVisible(!isVisible);

    return [isVisible, toggle];
};