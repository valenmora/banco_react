import React , {Component} from 'react';
import Header from './Header';
import Login from './Login/Login'

import { createStore } from 'redux';


const store = createStore (() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Home extends Component {

   /* 
    handleClick = clientes  => {
        if(this.state.isFetch)
        {
            this.activarFetch();
        }
    
        const action= { type: 'setClientes' ,value: clientes}
        store.dispatch(action)
        const {clientes} = this.state;
    }*/

    render(){

        return(
            <div className="App"> 
                <header>
                    <Header/>
                </header>
                <main>

                </main>
            </div>
        )
    }
}


export default Home;
