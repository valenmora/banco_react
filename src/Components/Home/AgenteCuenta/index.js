import React from 'react';
import { Tabs , Tab} from 'react-bootstrap';


function AgenteCuenta(props) { 
    return(
        <div classNmae="cotainer">
            <div className="menuAdmin">
                <div className="p-4 bd-highlight"> 
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Lista de Usuarios" ></Tab> 
                        <Tab eventKey="profile" title="Sucursales">  </Tab>
                        <Tab eventKey="contact" title="Mensajeria"> </Tab>
                    </Tabs>
                </div> 
            </div>
        </div>
    );  
};

export default AgenteCuenta;