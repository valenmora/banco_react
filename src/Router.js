import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cliente from './Components/Cliente';
import Home from './App';

const Routes = () => {
    return(
        <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} /> Home
            <Route path='/cliente' component={Cliente} /> Cliente
        </div>
        </BrowserRouter>
    );
}

export default Routes;