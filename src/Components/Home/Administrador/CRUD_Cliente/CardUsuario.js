import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {api_banco} from '../../../../Constants/api_url';
import { Button } from 'react-bootstrap';
import { Tabs, Tab} from 'react-bootstrap';

class CardUsuario extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            clientes: [],
            isFetch:true,
            user: []
        }
    }

    componentDidMount() {
         fetch(api_banco).then(res => {
        return res.json();
    
        })
        .then(data => {
            this.setState({clientes: data, isFetch: false,
        user: data.results[0].login })
            
        })
        
    }
   
    handleClickEditar(){
        return (      
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Lista de Usuarios" > </Tab> 
            </Tabs>
        );
    }

    render() {
        console.log("->", this.state.user);
        if(this.state.isFetch){
            return 'Loading ...'
        }
        
        return (
            
        <div className="App">
            <div className="row mb-4 p-4" >
                <div className="col-sm-12 ">
                    <div className="card-body">
                        <Table striped bordered hover>
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
                            { this.state.clientes.results.map( client =>  {
                                return (
                                    <tr>
                                    <th>{ client.login.username }</th>
                                    <th> { client.name.last  }</th>
                                    <th> { client.id.value} </th>
                                    <th> { client.location.city } </th>
                                    <th > 
                                        <Button onClick= {this.handleClickEditar }> Editar </Button> 
                                        <Button> Eliminar </Button> 
                                    </th>
                                    </tr>
                                
                                )
                                })
                            }
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