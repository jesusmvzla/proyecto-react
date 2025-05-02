import "../css/Navbar.css";
import CartWidget from "./CartWidget";
import logo from "../assets/img/logo.png";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <img src={logo} alt="Campo HIT Airsoft Bogotá" className="logo-nav"/>
            <div className="a-container">
                <a href="">Alquiler</a>
                <a href="">Operador</a>
                <a href="">Partida Abierta</a>
                <a href="">Partida Empresarial</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;