import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { Tabs , Tab} from 'react-bootstrap';

import CardUsuario from './CRUD_Cliente/CardUsuario';
import Sucursales from './CRUD_Sucursal/Sucursales';

class index extends Component {
    
    /*componentDidMount(){
        console.log("Loanding...")
        return (
            <Modal.Dialog  >
                <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body >
                    <p> ¡ Bienvenido Administrador !</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.enableDiv}> Close </Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }*/

    render() {
        return (
            <div> 
                <div className="menuAdmin">
                    <div className="p-4 bd-highlight"> 
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Lista de Usuarios" > <CardUsuario/></Tab>
                            <Tab eventKey="profile" title="Sucursales"> <Sucursales/> </Tab>
                            <Tab eventKey="contact" title="Asignacion Agente a Cliente"> </Tab>
                        </Tabs>
                    </div> 
                </div>
            </div>
        );
    }
}

export default index;