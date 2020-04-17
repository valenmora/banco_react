import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { urlAsignacion } from '../../../../api/url'
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
        fetch(urlAsignacion).then(response => {
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
    console.log(this.state.sucursales[0]);
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
                        {/* this.state.sucursales[0]({ return ( ) })*/ }
                            <tr>
                            <th> { this.state.sucursales[0].id }  </th>
                            <th> {this.state.sucursales[0].sucursal.ciudad}
                            {/*{ s.location.city } ,{ s.location.street.number}*/}</th>
                            <th> { this.state.sucursales[0].sucursal.region} </th>
                            <th> { this.state.sucursales[0].sucursal.telefono} </th>
                            <th> { this.state.sucursales[0].sucursal.correo} </th>
                            </tr>
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