import React from 'react';
import Menu from '../../Menu';
import Header from '../../Header';
import './styles.css';

export default function Home() {
  return (
    <div className="container-home">
      <Menu />
      <Header title="Home" />
    </div>
  );
}
