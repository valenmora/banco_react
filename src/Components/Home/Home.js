import React , {Component, Fragment} from 'react';
import Header from './Header';

class Home extends Component {
    render(){
        return(
            <Fragment>
                <div className="App"> 
                    <header>
                        <Header/>
                    </header>
                </div>
            </Fragment>
        )
    }
}


export default Home;
