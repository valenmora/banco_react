import React , {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import CardUsuario from './Components/Home/Administrador/CardUsuario';
import DatosSucursal from './Components/Home/Cliente/datosSucursal';
import Login from './Components/Home/Login/Login';

class App extends Component {
  render() {
  return (

    <Router>
      <div>
        
          <Route exact path="" component={Home}/>
          <Route exact path="/sucursales" component={DatosSucursal}/>
          <Route exact path="/clientes" component={CardUsuario}/>
          <Route exact path="/login" component={Login}/>
          
      </div>
    </Router>
    
   
  );
}
}

export default App ;

