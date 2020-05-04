import React , { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';

import { Tabs , Tab, Card} from 'react-bootstrap';

import CardUsuario from './CRUD_Cliente/CardUsuario';
import Sucursales from './CRUD_Sucursal/Sucursales';
import queryString from 'query-string'
import { searchUsuario } from '../../../redux/actions/search';
import { userResults, isSearchLoading } from '../../../redux/selector';


export default ({location}) => {
        
        const dispatch = useDispatch();
        
        const usuarios = useSelector(state => userResults(state))

        console.log(usuarios);

        useEffect(() => {
            const { user } = queryString.parse(location.search);
            if ( user && !usuarios){
                dispatch(searchUsuario({user}));
            }
            
        })
        
        const renderUsers = () => {
            if(usuarios){
                return usuarios.map((value, index ) => <CardUsuario key={index} {...value} /> )   
            }
        }

        return (
            <div> 
                <div className="menuAdmin" >
                    <div className="p-4 bd-highlight" > 
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" >
                            <Tab eventKey="home" title="Lista de Usuarios" style={{  padding: "40px"}}> { renderUsers() } <CardUsuario/></Tab> 
                            <Tab eventKey="profile" title="Sucursales" style={{  padding: "40px"}}> <Sucursales/> </Tab>
                            <Tab eventKey="contact" title="Asignacion Agente a Cliente" style={{  padding: "40px"}}> </Tab>
                        </Tabs>
                    </div> 
                </div>
            </div>
        );
}
