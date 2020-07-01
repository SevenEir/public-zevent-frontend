import React from 'react';
import './styles.css';
import Menu from './../../../components/Menu';
import Header from './../../../components/Header';
import CreateEvent from './components/CreateEventForm';

export default function NewEvent() {
  return (
    <div className="container-menu">
      <Menu />
      <div className="container-content">
        <Header title="Novo Evento" />
        <CreateEvent />
      </div>
    </div>
  );
}
