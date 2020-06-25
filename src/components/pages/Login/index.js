import React from 'react';
import './styles.css';

export default function Login() {
  return (
    <div className="container-login">
      <div className="container-auth">
        <h1 className="h1-login">Bem vindo!</h1>
        <input id="email" placeholder="Usuário"></input>
        <input id="password" placeholder="Senha"></input>
        <button type="submit" className="button-login">
          Entrar
        </button>
        <a href="/">Esqueceu a senha?</a>
      </div>
    </div>
  );
}
