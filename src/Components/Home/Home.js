import React , {Component} from 'react';
import Header from './Header';
import Login from './Login/Login'

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
