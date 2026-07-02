import "./Cargando.css"
export default function Cargando (cargando){
    return(
        <div className="modal-carga">
            <div className="modal-contenido">
                <div className="spinner"></div>
                Cargando tareas...
            </div>
        </div>
    )
}