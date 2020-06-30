import React from 'react';
import { Link } from 'react-router-dom';
import loginService from '../../../services/loginService';
import { Redirect } from 'react-router-dom';
import Loading from '../../../components/Loading';
import './styles.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      isLoading: false,
    };
  }

  async userReq(e) {
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    e.preventDefault();
    const response = await loginService(email, password);
    this.setState({ isLoading: false });
    response.access_token
      ? this.setState({ redirect: true })
      : this.setState({ redirect: 'err' });
    localStorage.setItem('token', response.access_token);
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/home" />;
    } else if (this.state.redirect === 'err') {
      alert('User invalido');
    }
    const { email, password, isLoading } = this.state;
    return (
      <div className="container-login">
        {isLoading ? (
          <Loading />
        ) : (
          <form
            className="container-auth"
            onSubmit={(event) => this.userReq(event)}
          >
            <h1 className="h1-login">Bem vindo!</h1>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              value={email}
              className="input-email"
              placeholder="Usuário"
            ></input>
            <input
              type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              value={password}
              className="input-password"
              placeholder="Senha"
            ></input>
            <div className="button-login">
              <button className="button-logIn" type="submit">
                Entrar
              </button>
              <Link to="/user/new">
                <button className="button-register">Cadastre-se</button>
              </Link>
            </div>
            <Link className="login-forgotPass" to="/user/forgotpassword">
              Esqueceu a senha?
            </Link>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
