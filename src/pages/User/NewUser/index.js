import React from 'react';
import Menu from './../../../components/Menu';
import Header from './../../../components/Header';
import CreateUserForm from './components/CreateUserForm';

import './index.css';

export default function NewUser() {
  return (
    <div className="container-menu">
      <Menu />
      <div className="container-new-user">
        <Header title="Novo Usuário" />
        <div className="content-form-user">
          <CreateUserForm />
        </div>
      </div>
    </div>
  );
}
