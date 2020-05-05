import React from 'react';
import {Table} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

 const Sucursales = ({Direccion, Ciudad, Region, Telefono,Correo,  history }) => {

    return (
        <Table striped bordered hover>
        <thead>
        <tr>
            <th> Dirección </th>
            <th> Ciudad</th>
            <th> Región/Estado </th>
            <th> Teléfono de contacto </th>
            <th> Email </th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
                <th> {Direccion} </th>
                <th> {Ciudad} </th>
                <th> {Region} </th>
                <th> {Telefono} </th>
                <th> {Correo} </th>
                <th > 
                    <Button > Editar </Button> 
                </th>
        </tr>

        </tbody>
        </Table>
    );
};

export default withRouter(Sucursales);
