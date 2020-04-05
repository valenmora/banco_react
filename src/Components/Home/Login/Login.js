import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';


class Login extends Component {

    constructor(){
        super();
        this.state = {
            user: "",
            password: "",
            userMio:  "valen",
            passwordMio:"123",
        }
    }

    handleLogin (user,password){
        if(this.state.user === this.state.userMio && password === this.state.passwordMio)
        {
            return console.log("ok")
        }
    };

    render() {
        return (
            <div className="Login">
            <div className="row mb-4">
                <div className="mx-auto" >
                <Form>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Username </Form.Label>
                    <Form.Control type="user" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick={ this.handleLogin(this.user,this.password) }>
                    Submit
                </Button>
                </Form>
                </div>
            </div>
        </div>
        );
    };
};

Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,    
};

export default Login;