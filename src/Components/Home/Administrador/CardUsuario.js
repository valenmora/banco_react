import React, { Component } from 'react';
import Moment from 'react-moment';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {api_banco} from '../../../Constants/api_url';

class CardUsuario extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            clientes: [],
            isFetch:true,
        }
    }

    componentDidMount() {
         fetch(api_banco).then(res => {
        return res.json();
    
        })
        .then(data => {
        this.setState({clientes: data, isFetch: false })
        });
    }
    
   

    render() {
        if(this.state.isFetch){
            return 'Loading ...'
        }
        
        return (
            
        <div className="App">

            <div className="container">
                <div className="row mb-4" >
                    <p></p>
                    <div className="col-sm-12 grid-margin">
                        <div className="card h-100">
                            <h4 className="card-header"> Clientes </h4>
                            <div className="card-body">
                                <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Usuario </th>
                                    <th>Nombre </th>
                                    <th>Apellido </th>
                                    <th> DNI </th>
                                    <th> Fecha de nacimiento </th>
                                    <th> Dirección </th>
                                    <th> Ciudad</th>
                                    <th> Región/Estado </th>
                                    <th> Teléfono de contacto </th>
                                    </tr>
                                </thead>
                                <tbody>
                                { this.state.clientes.results.map( client =>  {
                                    return (
                                        <tr>
                                        <td></td>
                                        <th>{ client.login.username }</th>
                                        <th>{ client.name.first }</th>
                                        <th> { client.name.last  }</th>
                                        <th> { client.id.value} </th>
                                        <th>  <Moment format="yyyy/MM/DD"> {client.dob.date} </Moment> </th>
                                        <th> { client.location.street.name } ,{ client.location.street.number} </th>
                                        <th> { client.location.city } </th>
                                        <th> { client.location.state} </th>
                                        <th> { client.phone} </th>
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
            </div>

        </div>
        );
    }
}

CardUsuario.propTypes = {
    cliente: PropTypes.array,
};

export default CardUsuario;