import React from 'react';
import './styles.css';
import Menu from '../../Menu';
import Header from '../../Header';
import CreateEvent from '../../CreateEventForm';

export default function NewEvent() {
  return (
    <div className="container-menu">
      <Menu />
      <div className="container-content">
        <Header title="NewEvent" />
        <CreateEvent />
      </div>
    </div>
  );
}
