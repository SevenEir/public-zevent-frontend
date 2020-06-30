import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import NewEvent from './components/pages/NewEvent';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/event/new" component={NewEvent} />
      </Switch>
    </BrowserRouter>
  );
}
