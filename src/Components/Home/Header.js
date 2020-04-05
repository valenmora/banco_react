import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand> React-Bootstrap </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <React.Fragment>
                            <NavLink to="/" > Home</NavLink>
                            <NavLink to="/sucursales" activeClassName="DatosSucursales"> Sucursales </NavLink>
                            <NavLink to="/clientes" activeClassName="CardUsuario"> Clientes </NavLink>
                        </React.Fragment>
                    </Nav>
                    <React.Fragment>
                        <NavLink to="/Login" activeClassName="Login"> Iniciar Sesion </NavLink>
                    </React.Fragment>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;