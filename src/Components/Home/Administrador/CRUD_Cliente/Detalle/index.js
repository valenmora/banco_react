import React, {useEffect} from 'react';
import {InputGroup, FormControl, Container, Row, Col} from 'react-bootstrap';

import {useDispatch, useSelector} from 'react-redux';
import {userResult as userResultSelector} from '../../../../../redux/selector';

import { searchUsuarioById } from '../../../../../redux/actions/search'

export default ({match}) => {

    const dispatch  = useDispatch();
    const userResult  = useSelector(state => userResultSelector(state));

    console.log(userResult.name);
    
    useEffect(() =>{
        if(!userResult){
            const userId = match.params.id;
            dispatch(searchUsuarioById({userId}));
        }
    });

    return (
        <Container>
            
            <Row > 
                <Col>
                
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Username"
                        aria-label="basic-addon1"
                        aria-describedby="basic-addon1" 
                        />
                    </InputGroup>
                </Col>

                <Col >
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Rol</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Rol"
                        aria-label="basic-addon1"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"

                        />
                    </InputGroup>
                </Col>
            </Row>

            <label htmlFor="basic-url">Datos Personales</label>

            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                                Nombre 
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                </Col>

                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Apellido</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>DNI</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="dni" aria-describedby="basic-addon3" />
                    </InputGroup>
                </Col>

                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Fecha de Nacimiento</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                </Col>

                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Sexo</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                                Direccion 
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Localidad</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Provincia</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="provincia" aria-describedby="basic-addon3" />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Celular/Telefono</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="basic-addon1"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
}                                          