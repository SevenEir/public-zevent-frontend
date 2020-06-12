import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import UserImage from '../../assets/user.png';

export default function Menu() {
  return (
    <div className="container-aside">
      <img className="user-image" src={UserImage} alt="conversa-fiada"></img>
      <Link to="/home">Home</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="">Usuários</Link>
      <Link to="">Configurações</Link>
      <Link to="">Sair</Link>
    </div>
  );
}
