import React from 'react';
import Event from './components/Event';
import Menu from '../../../components/Menu';
import Header from '../../../components/Header';
import './styles.css';

export default function EventDetail(props) {
  console.log(props.id);
  return (
    <div className="container-menu">
      <Menu />
      <div className="container-content">
        <Header title={'Evento'} />
        <Event id={props.id} />
      </div>
    </div>
  );
}
