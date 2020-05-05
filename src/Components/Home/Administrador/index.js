import React , { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';

import { Tabs , Tab} from 'react-bootstrap';

import CardUsuario from './CRUD_Cliente/CardUsuario';
import Sucursales from './CRUD_Sucursal/Sucursales';
import Asignaciones from './Asignaciones/Asignacion';
import queryString from 'query-string'
import { searchUsuario, loadSucursales, loadAsignaciones } from '../../../redux/actions/search';
import { userResults, sucursalesResults , asignacionesResults} from '../../../redux/selector';

export default ({location}) => {
        
        const dispatch = useDispatch();
        
        const usuarios = useSelector(state => userResults(state))

        const sucursales = useSelector(state => sucursalesResults(state))
        
        const asignaciones = useSelector(state => asignacionesResults(state))

        useEffect(() => {
            const { user } = queryString.parse(location.search);
            if ( user && !usuarios && !sucursales & !asignaciones){
                dispatch(searchUsuario({user}));
                dispatch(loadSucursales({user}));
                dispatch(loadAsignaciones({user}));
            }
            
        })
        
        const renderUsers = () => {
            if(usuarios){
                return usuarios.map((value, index ) => <CardUsuario key={index} {...value} /> )   
            }
        }
        const renderSucursales = () => {
            if(sucursales){
                return sucursales.map((value, index ) => <Sucursales key={index} {...value} /> )   
            }
        }

        const renderAsignaciones = () => {
            if(asignaciones){
                return asignaciones.map((value, index ) => <Asignaciones key={index} {...value} /> )   
            }
        }

        return (
            <div> 
                <div className="menuAdmin" >
                    <div className="p-4 bd-highlight" > 
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" >
                            <Tab eventKey="home" title="Lista de Usuarios" style={{  padding: "40px"}}> { renderUsers() } </Tab> 
                            <Tab eventKey="profile" title="Sucursales" style={{  padding: "40px"}}> { renderSucursales() }</Tab>
                            <Tab eventKey="contact" title="Asignacion Agente a Cliente" style={{  padding: "40px"}}> { renderAsignaciones() } </Tab>
                        </Tabs>
                    </div> 
                </div>
            </div>
        );
}
