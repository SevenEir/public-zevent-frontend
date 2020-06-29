import React from 'react';
import loginService from '../../../services/loginService';
import './styles.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  
  userReq = () => {
    const { email, password } = this.state;
    const response = loginService.getUser(email, password);
    localStorage.setItem('token', response.token);
  }
  
  render() {
    const { email, password } = this.state;
    return(
    <div className="container-login">
      <form className="container-auth" onSubmit={this.userReq()}>
        <h1 className="h1-login">Bem vindo!</h1>
        <input 
          onChange={(e) => this.setState({email: e.target.value})} 
          value={email} 
          id="email" 
          placeholder="Usuário">
        </input>
        <input 
          onChange={(e) => this.setState({password: e.target.value})} 
          value={password} 
          id="password" 
          placeholder="Senha">
        </input>
        <button type="submit" className="button-login">
          Entrar
        </button>
        <a href="/">Esqueceu a senha?</a>
      </form>
    </div>
    )
  }
}

export default Login;