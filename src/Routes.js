import React from "react";
import { Route, Switch } from "react-router-dom";

// My imports
import Home from './containers/Home/Home';
import Login from './components/Login/LoginForm';


export default function Routes() {
  return (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/login' exact component={ Login } />
    </Switch>
  );
}