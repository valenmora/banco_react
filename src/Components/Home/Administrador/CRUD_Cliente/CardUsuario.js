import React  from 'react';
import { Table } from 'react-bootstrap';
//import {urlUsuarios} from '../../../../api/url';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const CardUsuario = ({DNI, Lastname, Name,Username, id,  history }) => {

    const handleSeeUserClick = () => {
        history.push(`/administrador/${id}`);
    }

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
                <th> {Username} </th>
                <th> { DNI } </th>
                <th> { Lastname}</th>
                <th> { Name} </th>
                <th > 
                    <Button onClick={handleSeeUserClick}> Ver Mas/Editar </Button> 
                </th>
                </tr>
            </tbody>
        </Table>
    );
};

export default withRouter(CardUsuario);

