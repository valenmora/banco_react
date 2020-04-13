import React, { Component } from 'react';
import { Tab, Tabs} from 'react-bootstrap';

import Mensajes from './Acciones/consulta';
import Sucursal from './Acciones/datosSucursal';
import AgenteCuenta from './Acciones/datosAgente';

class index extends Component {
    render() {
        return (
            <div>
                <div className="menuAdmin">
                    <div className="p-4 bd-highlight"> 
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Agente de cuenta" > <AgenteCuenta /> </Tab> 
                            <Tab eventKey="profile" title="Sucursales"> <Sucursal /> </Tab>
                            <Tab eventKey="contact" title="Mensajes"> <Mensajes /> </Tab>
                        </Tabs>
                    </div> 
                </div>
            </div>
        );
    }
}

export default index;