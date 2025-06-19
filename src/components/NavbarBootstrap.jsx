import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/img/logo.png";
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css";

function NavbarBootstrap() {
    return (
        <>
        <div className="navbarstyle">
            <Navbar expand="lg" className="navFull">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img src={logo} alt="Campo HIT Airsoft Bogotá" className="logo-nav" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
                            <Nav.Link as={NavLink} to="/airsoft">¿Qué es Airsoft?</Nav.Link>
                            <NavDropdown title="Reservas" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/category/campo170">Campo 170</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/category/campochia">Campo Chía</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/category/productos">Otros productos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink to="/cart" style={{ textDecoration: "none" }}><CartWidget /></NavLink>
                    
                </Container>
            </Navbar>
            <div className='redBar'></div>
        </div>
        </>
    );
}

export default NavbarBootstrap;