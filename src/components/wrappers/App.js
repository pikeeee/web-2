import React, {Component} from 'react';
import Pikeshorttest from '../ui/TodoListApp';
import Information from '../general/information';
import {Route} from "react-router-dom"
import Navbar from './Navbar';
class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Route exact path="/" component={Information}/>
                <Route exact path="/test" component={Pikeshorttest}/>
            </div>
        );
    }
}

export default App;
