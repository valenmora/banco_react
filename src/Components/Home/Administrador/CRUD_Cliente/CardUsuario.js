import React  from 'react';
import { Table } from 'react-bootstrap';
//import {urlUsuarios} from '../../../../api/url';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const CardUsuario = ({DNI, lastname, name,username, id,  history }) => {

    const handleSeeUserClick = () => {
        history.push(`/administrador/${id}`);
    }

    console.log(history)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Usuario </th>
                <th>DNI </th>
                <th>Apellido </th>
                <th>Nombre </th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th> {username} </th>
                <th> { DNI } </th>
                <th> { lastname}</th>
                <th> { name} </th>
                <th > 
                    <Button onClick={handleSeeUserClick}> Ver Mas/Editar </Button> 
                </th>
                </tr>
            </tbody>
        </Table>
    );
};

export default withRouter(CardUsuario);

