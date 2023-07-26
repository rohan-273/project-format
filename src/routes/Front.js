
import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Login from '../_components/Auth/Login';
import { history } from '../_helpers/utilities';
import Dashboard from '../_components/Dashboard/Dashboard';


const Front = () => {

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}


export default Front