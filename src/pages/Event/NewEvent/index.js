import React from 'react';
import './styles.css';
import Menu from './../../../components/Menu';
import Header from './../../../components/Header';
import CreateEvent from './components/CreateEventForm';

export default function NewEvent() {
  return (
    <div className="container-menu">
      <Menu />
      <div className="container-new-event">
        <div className="content-header">
          <Header title="Novo Evento" />
        </div>
        <div className="content-form-event">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
}
