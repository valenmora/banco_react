import React , {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Home/Login/Login';

import Administrador from './Components/Home/Administrador';
import Cliente from './Components/Home/Cliente';
import AgenteCuenta from './Components/Home/AgenteCuenta';



class App extends Component {  
  
  render() {      
    return (
      
      <Router>
        <div>
            <Route exact path="" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/cliente" component={Cliente}/>
            <Route exac path="/administrador" component={Administrador}/>
            <Route exact path="/agenteCuenta" component={AgenteCuenta}/>

        </div>
      </Router>
    );
  }
}

export default App ;

