import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { history } from '../_helpers/utilities'
import Home from '../_components/Home/Home';

const Main = () => {
  console.log('xysfwe');
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
      </Switch>
    </Router>
  )
}

export default Main