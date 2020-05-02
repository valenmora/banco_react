import React, { useState, Fragment } from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem , NavbarBrand} from 'react-bootstrap';


export default function  Header() {
    const [visible ]= useState(false);

        return (
            <Fragment>
                    <Navbar expand="lg" variant="dark" bg="dark">
                        <NavbarBrand> React-Bootstrap </NavbarBrand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto " >
                                <NavItem>
                                    <NavLink to="/" > Home   | </NavLink>
                                </NavItem>
                                {/*
                                    visible.visibleAdmin &&
                                    <NavItem>
                                        <NavLink to="/administrador" activeClassName="Administrador">|   Administrador   | </NavLink>
                                    </NavItem>
                                */},
                                {
                                    visible &&
                                    <NavItem>
                                        <NavLink to="/cliente" activeClassName="Cliente">|    Cliente   | </NavLink>
                                    </NavItem>
                                 },
                                {
                                    visible &&
                                    <NavItem> 
                                        <NavLink to="/agenteCuenta" activeClassName="AgenteCuenta">|   Agente de cuenta </NavLink>
                                    </NavItem>
                                }
                                
                            </Nav>
                            <NavLink to="/login" activeClassName="Login"> Iniciar Sesion </NavLink>
                        </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        );
    
}


