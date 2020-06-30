import React from 'react';
import Menu from './../../components/Menu';
import Header from './../../components/Header';
import ItemList from './../Event/EventList';
import './styles.css';

export default function Home() {
  return (
    <div className="container-menu">
      <Menu />
      <div className="container-content">
        <Header title="Home" />
        <ItemList />
      </div>
    </div>
  );
}
