import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NewEvent from './pages/Event/EventList';
import NewUser from './pages/User/NewUser';
import EventDetail from './pages/Event/EventDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/event/new" component={NewEvent} />
        <Route path="/user/new" component={NewUser} />
        <Route path="/event/:id" component={EventDetail} />
      </Switch>
    </BrowserRouter>
  );
}
