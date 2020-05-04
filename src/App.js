import React , {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Home/Login/Login';

import Administrador from './Components/Home/Administrador';
import Cliente from './Components/Home/Cliente';
import AgenteCuenta from './Components/Home/AgenteCuenta';

import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import UsuarioDetalle from './Components/Home/Administrador/CRUD_Cliente/UsuarioDetalle';


const App = ({store}) => ( 
      <Fragment>
        <Provider store={store}>
          <Router>
            <div>
                <Route exact path="" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cliente" component={Cliente}/>
                <Route exact path="/administrador" component={Administrador}/>
                <Route exact path="/agenteCuenta" component={AgenteCuenta}/>
                <Route exact path="/administrador/:id" component={UsuarioDetalle} />
            </div>
          </Router>
        </Provider>
      </Fragment>  
);

App.propTypes= {
  store: PropTypes.object.isRequired
}
export default App ;

