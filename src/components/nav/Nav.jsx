import "./Nav.css";
import { Link } from "wouter";

export default function Nav() {
  return (
    <div className="navCompleto">
      <Link className="nav-botonRuta" href="/">
        Inicio
      </Link>
      <Link className="nav-botonRuta" href="/crear">
        Crear tarea
      </Link>
      <Link className="nav-botonRuta" href="/listado">
        Tareas
      </Link>
    </div>
  );
}
