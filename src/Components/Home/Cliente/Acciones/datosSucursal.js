import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {api_sucursales} from './../../../../Constants/api_url_sucursales'
import {Table} from 'react-bootstrap';

class datosSucursal extends Component {

    constructor(){
        super();
        this.state = {
            sucursales: [],
            isFetch: true,
        }
    }

    componentDidMount() {
        fetch(api_sucursales).then(response => {
            return response.json();
        })
        .then (data => {
            this.setState( {sucursales: data, isFetch: false})

        });
    }
    
    
    render(){
        if(this.state.isFetch){
            return 'Loading ...'
        }

        return(
           
            <div className="container">
                <div className="row mb-4" >
                <p></p>
                <div className="col-sm-12 grid-margin">
                    <div className="card h-100">
                    <h4 className="card-header"> Sucursales </h4>
                    <div className="card-body">
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th> Dirección </th>
                            <th> Ciudad</th>
                            <th> Región/Estado </th>
                            <th> Teléfono de contacto </th>
                            <th> Email </th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.state.sucursales.results.map( sucursal =>  {
                            return (
                                <tr>
                                
                                <th> { sucursal.location.street.name } ,{ sucursal.location.street.number} </th>
                                <th> { sucursal.location.city } </th>
                                <th> { sucursal.location.state} </th>
                                <th> { sucursal.location.postcode} </th>
                                <th> #</th>

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
        )
                    }
};


export default datosSucursal;