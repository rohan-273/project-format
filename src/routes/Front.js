
import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from '../_components/Home/Home';
import Login from '../_components/Auth/Login';


const Front = () => {

    const history = createBrowserHistory();
    
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}


export default Front