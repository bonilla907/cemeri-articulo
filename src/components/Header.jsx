import login from '../assets/img/login.png'
import correo from '../assets/img/correo.png';
import search from '../assets/img/search.png';
function Header() {
    return (
        <header>
            <div>
                <nav>
                    <ul className="menudos">
                        <li>
                            <a href="#"><img src={login} alt="" width="33" height="30" /> Login</a>
                        </li>


                        <li><a href="#"><img src={search} alt="" width="33" height="30" /> Búsqueda</a>
                        </li>

                        <li align="center"><a href="#">
                            <h1>CEMERI</h1>
                        </a>

                        </li>

                        <li><a href="#"><img src={correo} alt="" width="33" height="30" /> Registrarse</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav className="navegacion" align="center">
                    <ul className="menu">
                        <li><a href="#">Artículos</a>
                            <ul className="submenu">
                                <li><a href="#">De análisis</a></li>
                                <li><a href="#">De opinión</a></li>
                                <li><a href="#">Digest Digital</a></li>
                                <li><a href="#">Reseñas</a></li>
                            </ul>
                        </li>


                        <li><a href="#">Contenido</a>
                            <ul className="submenu">
                                <li><a href="#">Mapas</a></li>
                                <li><a href="#">Enciclopedia</a></li>
                                <li><a href="#">Regiones</a></li>
                                <li><a href="#">Temas</a></li>
                            </ul>
                        </li>
                        <li><a href="#">CEMERI</a>
                            <ul className="submenu">
                                <li><a href="#">Acerca</a></li>
                                <li><a href="#">Buscador Académico</a></li>
                            </ul>
                        </li>

                        <li><a href="#">Contacto</a>
                            <ul className="submenu">
                                <li><a href="#">Convocatorias</a></li>
                                <li><a href="#">Redes Sociales</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
