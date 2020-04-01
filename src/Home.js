import React , {Component} from 'react';
import Header from './Header';

export default class Home extends Component {
    render(){
        return(
            <div className="App"> 
                <header>
                    <Header/>
                </header>
                <main>
                    <h1> Bienvenido al Home</h1>
                </main>
            </div>
        )
    }
}