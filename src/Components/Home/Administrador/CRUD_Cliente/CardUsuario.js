import React  from 'react';
import { Table } from 'react-bootstrap';
//import {urlUsuarios} from '../../../../api/url';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const CardUsuario = ({DNI, Lastname, Name, Login, id,  history }) => {

    const handleSeeUserClick = () => {
        history.push(`/administrador/${id}`);
    }
    
    const handleDeleteUserClick = () => {

    }
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Usuario </th>
                <th>DNI </th>
                <th>Apellido </th>
                <th>Nombre </th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th> {Login.Username} </th>
                <th> { DNI } </th>
                <th> { Lastname}</th>
                <th> { Name} </th>
                <th  > 
                    <Button onClick={handleSeeUserClick}> Editar </Button> 
                </th>
                <th  > 
                    <Button onClick={handleDeleteUserClick}> Eliminar </Button> 
                </th>
                </tr>
            </tbody>
        </Table>
    );
};

export default withRouter(CardUsuario);

