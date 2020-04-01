import React , {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {api_banco} from './Constants/api_url';
import Cliente from './Components/Cliente/'
import Moment from 'react-moment';
import Home from './Home';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends Component {

  constructor(){
    super();
    this.state = {
      clientes: [],
      isFetch: true,
    }
  }
  
 /* componentDidMount() {
    fetch(api_banco).then(res => {
      return res.json();

    })
    .then(data => {
      this.setState({clientes: data, isFetch: false })
    });
  }*/


  render() {
  
    /*if(this.state.isFetch){
      return 'Loading ...'
    }*/

  return (

    <Router>
      <div>
      <Route exact path="" component={Home}/>
          <Route exact path="/clientes" component={Cliente}/>
      </div>
    </Router>
    
   /* <div className="App">

      {/*<div className="container">
        <div className="row mb-4" >
          <p></p>
          <div className="col-sm-12 grid-margin">
            <div className="card h-100">
              <h4 className="card-header"> Clientes </h4>
              <div className="card-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Usuario </th>
                      <th>Nombre </th>
                      <th>Apellido </th>
                      <th> DNI </th>
                      <th> Fecha de nacimiento </th>
                      <th> Dirección </th>
                      <th> Ciudad</th>
                      <th> Región/Estado </th>
                      <th> Teléfono de contacto </th>
                    </tr>
                  </thead>
                  <tbody>
                  { this.state.clientes.results.map( cliente =>  {
                      return (
                        <tr>
                          <td></td>
                        <th>{ cliente.login.username }</th>
                        <th>{ cliente.name.first }</th>
                        <th> { cliente.name.last  }</th>
                        <th> { cliente.id.value} </th>
                        <th>  <Moment format="yyyy/MM/DD"> {cliente.dob.date} </Moment> </th>
                        <th> { cliente.location.street.name } ,{ cliente.location.street.number} </th>
                        <th> { cliente.location.city } </th>
                        <th> { cliente.location.state} </th>
                        <th> { cliente.phone} </th>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
                </div>

                </div>*/
  );
}
}

export default App;

