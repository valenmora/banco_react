import React , {Component} from 'react';
import Header from './Header';
import Login from './Login/Login'
import { Button } from 'react-bootstrap'

import { createStore } from 'redux';

import {api_banco} from './../../Constants/api_url';

const store = createStore (() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Home extends Component {

    constructor(){
        super();
        this.state = {
            clientes: [],
            isFetch: true,
        }  
      }

    activarFetch(){
        fetch(api_banco).then(res => {
        return res.json();
        })
        .then(data => {
        this.setState({clientes: data, isFetch:false}) 
    });
    }

    handleClick = clientes  => {
        if(this.state.isFetch)
        {
            this.activarFetch();
        }
    
        const action= { type: 'setClientes' ,value: clientes}
        store.dispatch(action)
    }

    render(){
        const {clientes} = this.state;
        return(
            <div className="App"> 
                <header>
                    <Header/>
                </header>
                <main>
                    <div className=".col-md-4">
                        <Button variant="primary" onClick={this.handleClick(clientes)}> Activar Api</Button>
                    </div>
                </main>
            </div>
        )
    }
}


export default Home;
