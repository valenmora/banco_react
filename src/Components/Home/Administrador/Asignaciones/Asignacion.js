import React from 'react';
import {Table} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

 const Asignaciones = ({ id, usuarios, sucursal, usuario, aprobado, history }) => {

    return (
        <Table striped bordered hover>
        <thead>
        <tr>
            <th> ID Asignacion </th>
            <th> Apellido y Nombre </th>
            <th> Usuario </th>
            <th> Sucursal Asignada </th>
            <th> Usuario de Agente </th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>  {id} </th>
            <th>  {usuario.Lastname} , {usuario.Name}  </th>
            <th>  {usuario.Login.Username}  </th>
            <th>  {sucursal.Ciudad}  </th>
            <th>  {usuarios.Login.Username}</th>
            <th > 
                <Button > { aprobado ? 'Aprobar' : 'Rechazar' }</Button> 
            </th>
        </tr>

        </tbody>
        </Table>
    );
};

export default withRouter(Asignaciones);
