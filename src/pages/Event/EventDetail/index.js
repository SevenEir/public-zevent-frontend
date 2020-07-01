import React from 'react';
import Event from './components/Event';
import Menu from '../../../components/Menu';
import Header from '../../../components/Header';
import './styles.css';

export default function EventDetail(props) {
  const { id } = props.match.params;
  return (
    <div className="container-menu">
      <Menu />
      <div className="container-content">
        <Header title={'Evento'} />
        <Event id={id} />
      </div>
    </div>
  );
}
