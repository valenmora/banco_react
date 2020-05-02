import React , { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';

import { Tabs , Tab} from 'react-bootstrap';

import CardUsuario from './CRUD_Cliente/CardUsuario';
import Sucursales from './CRUD_Sucursal/Sucursales';
import queryString from 'query-string'
import { searchUsuario } from '../../../redux/actions/search';

export default ({location}) => {
        
        const dispatch = useDispatch();
        
        const usuarios = useSelector(state => {
            console.log(state);
            
        })
        useEffect(() => {
            const { user } = queryString.parse(location.search);
            dispatch(searchUsuario({user}));
        })

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
