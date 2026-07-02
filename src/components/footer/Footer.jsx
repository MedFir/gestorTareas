import "./Footer.css";
export default function Footer () {
    return(
        <footer className="footer-contenedor">
            <div className="footer-inferior"></div>
            <div className="footer-contenido">
                <div className="footer-seccion">
                    <h3>Mi Proyecto</h3>
                    <p>Organiza tus tareas de forma rápida y sencilla. Mantén todo bajo control.</p>
                </div>

                <div className="footer-seccion">
                    <h3>Enlaces útiles</h3>
                    <ul className="footer-links">
                        <li><a href="#inicio">Este footer</a></li>
                        <li><a href="#tareas">es</a></li>
                        <li><a href="#perfil">feisimo</a></li>
                    </ul>
                </div>

                <div className="footer-seccion">
                    <h3>Contacto</h3>
                    <p>Email: soporte@medfir.org</p>
                    <p>Tel: +54 9 2901 676767</p>
                </div>

            </div>
            
                
            <div className="footer-inferior">
                <p>&copy; 2026 Mi Proyecto. Todos los derechos reservados.</p>
            </div>
                
        </footer>
    )
}