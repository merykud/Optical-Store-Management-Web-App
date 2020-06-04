import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Login/Login";
import Signup from "./Signup/Signup.js"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
}from 'react-router-dom';


class App extends React.Component {

    render() {
        return (

            <Router>

                <Route  exact path="/" component={Login}/>
                <Route  exact path="/login" component={Login}/>
                <Route  exact path="/signup" component={Signup}/>

            </Router>

        );

    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));