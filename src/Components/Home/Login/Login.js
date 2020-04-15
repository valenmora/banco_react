import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

/*import {api_banco} from '../../../api/url';*/


class Login extends Component {

    handleLogin (username){
        if (this.user.results.username === username) {
                return "Ok .. "
            } 
                   
            /*if(this.state.user === this.state.userMio && password === this.state.passwordMio)
        {
            return console.log("ok")
        }*/
    };

    constructor(props){
        super(props);
        this.state = {
            isFetch:true,
            user: []
        }
    }

   /* componentDidMount() {
        fetch(api_banco).then(res => {
       return res.json();
   
       })
       .then(data => {
           this.setState({isFetch: false,user: data.results[1].login})
           
       })
       
   }*/

    render() {
        console.log(".>", this.state.user);
        return (
            <div className="Login">
            <div className="row mb-4">
                <div className="mx-auto" >
                <Form>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Username </Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" onClick= {() =>this.handleLogin(this.username) } >
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