import React from 'react';
import { Button, Form , Row, Container, Col} from 'react-bootstrap';

const consulta = () => {
  return (
      <div className="row mb-4 p-5">
<Container >
<Row >
    <Col>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Remitente</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Destinatario</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button type="submit">Enviar</Button>
        </Form>
        </Col>
        <Col lg="2" >
            <Button type="button" className="btn btn-primary ">
                Mensajes <span className="badge badge-light">4</span>
            </Button>
        </Col>  
        </Row>
        </Container>
        </div>
  );
}

export default consulta;
