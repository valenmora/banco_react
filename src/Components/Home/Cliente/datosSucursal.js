import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { api_sucursales } from '../../../Constants/api_url_sucursales';


class DatosSucursal extends Component {

   constructor(){
        super();
        this.state = {
            sucursales: [],
            isFetch: true
        }
    }
    
     componentDidMount() {
        fetch(api_sucursales).then(res => {
        return res.json();
        }).then (data => {
        this.setState({sucursales:data, isFetch: false})
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
                        { this.state.sucursales.results.map( sucursals =>  {
                            return (
                                <tr>
                                
                                <th> { sucursals.location.street.name } ,{ sucursals.location.street.number} </th>
                                <th> { sucursals.location.city } </th>
                                <th> { sucursals.location.state} </th>
                                <th> { sucursals.location.postcode} </th>
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


export default DatosSucursal;