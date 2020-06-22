import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
