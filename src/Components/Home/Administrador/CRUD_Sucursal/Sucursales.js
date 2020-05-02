import React from 'react';
import {Table} from 'react-bootstrap';

/*const sucursals=  fetch(urlAsignacion).then(response => { response.json(); });*/

const Sucursales = ( {sucursals} ) => {
    return (
        <div className="App">
            <div className="row mb-4 p-4" >
                <div className="col-sm-12 ">
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
                       {/* <tbody>
                            <th> prueba 1 </th>
                            <th> prueba 2 </th>
                            <th> prueba 3 </th>
                            <th> prueba 4 </th>
                            <th> prueba 5 </th>
                       </tbody>*/}
                        <tbody>
                           { /*sucursals.map( sucursals =>  {
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
                            */}
                        </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

Sucursales.propTypes = {
    
};

export default Sucursales;