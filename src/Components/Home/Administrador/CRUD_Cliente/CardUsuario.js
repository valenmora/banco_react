import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
//import {urlUsuarios} from '../../../../api/url';
import { Button } from 'react-bootstrap';
import { Tabs, Tab} from 'react-bootstrap';

class CardUsuario extends Component {
    
    constructor(){
        super();
        this.state = {
            clientes: []        
        }
    }

    /*componentDidMount() {
        fetch(urlUsuarios).then(response => {
            return response.json();
        })
        .then (data => {
            this.setState( {clientes: data})

        });
    }*/


    handleClickEditar(){
        return (      
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Lista de Usuarios" > </Tab> 
            </Tabs>
        );
    }

    handleClickDetalle(){
        return(
            <div> loading... </div>
        );
    }

    render() {

        return (
    
        <div className="App">
            <div className="row mb-4 p-4" >
                <div className="col-sm-12 ">
                    <div className="card-body">
                        <Table striped bordered hover onClick={this.handleClickDetalle}>
                            <thead>
                                <tr>
                                <th>Usuario </th>
                                <th>Apellido </th>
                                <th> DNI </th>
                                <th> Ciudad</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* this.state.clientes.map( client =>  {
                                return (
                                    <tr>
                                    <th>{ client.login.username }</th>
                                    <th> { client.lastname}</th>
                                    <th> { client.DNI} </th>
                                    <th> { client.location.city } </th>
                                    <th > 
                                        <Button onClick= {this.handleClickEditar }> Editar </Button> 
                                        <Button> Eliminar </Button> 
                                    </th>
                                    </tr>
                                
                                )
                                })
                            */}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

CardUsuario.propTypes = {
    cliente: PropTypes.array,
};

export default CardUsuario;