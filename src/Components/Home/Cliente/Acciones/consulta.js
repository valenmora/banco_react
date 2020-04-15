import React, { Component } from 'react';
import { Button, Form , Row, Container, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

class consulta extends Component {
    constructor(){
        super();
        this.state= {
            cantidadMensaje: 5,

        }
    }
 
    render() {
        return (

            <Container className="p-3" >
            <Row xs={1} md={1} >
                <Col md={{ span: 2, offset: 10 }} >
                    <Button type="button" className="btn btn-primary " >
                        Mensajes <span className="badge badge-light">{this.state.cantidadMensaje}</span>
                    </Button>
                </Col>
                <Col>
                    <Form>
                        <Form.Group >
                            <Form.Label>Remitente</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Destinatario</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Col>
            </Row>
            </Container>


        );
    }
}

consulta.propTypes = {
    cantidadMensaje: PropTypes.number.isRequired,
}

export default consulta;