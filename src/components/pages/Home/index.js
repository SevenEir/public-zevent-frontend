import React from 'react';
import Menu from '../../Menu';
import Header from '../../Header';
import ItemList from '../../EventList';
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
