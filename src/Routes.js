import React from "react";
import { Route, Switch } from "react-router-dom";

// My imports
import Home from './containers/Home/Home';


export default function Routes() {
  return (
    <Switch>
        <Route path='/' exact component={ Home } />
    </Switch>
  );
}