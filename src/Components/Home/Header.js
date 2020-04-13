import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem , NavbarBrand} from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md" variant="dark" bg="dark">
                    <NavbarBrand> React-Bootstrap </NavbarBrand>
                        <Nav className="mr-auto " >
                            <NavItem>
                                <NavLink to="/" > Home   | </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/administrador" activeClassName="Administrador">|   Administrador   | </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/cliente" activeClassName="Cliente">|    Cliente   | </NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink to="/agenteCuenta" activeClassName="AgenteCuenta">|   Agente de cuenta </NavLink>
                            </NavItem>
                        </Nav>
                        <NavLink to="/Login" activeClassName="Login"> Iniciar Sesion </NavLink>
                </Navbar>
            </div>
        );
    }
}

export default Header;

/*
<NavLink to="/sucursales" activeClassName="DatosSucursales"> Sucursales </NavLink>
                            <NavLink to="/clientes" activeClassName="CardUsuario"> Clientes </NavLink>
*/