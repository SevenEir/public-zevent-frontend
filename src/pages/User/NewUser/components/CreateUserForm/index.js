import React, { Component } from 'react';
import './index.css';

export default class CreateUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userBirthdate: '',
      userGender: '',
      userPhone: '',
      userOccupation: '',
      userEmail: '',
      userType: '',
      userImage: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png',
    };
  }

  handleChange = (event) => {
    console.log("dasdf", URL.createObjectURL(event.target.files[0]));
    this.setState({
      userImage: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    const {
      userName,
      userBirthdate,
      userGender,
      userPhone,
      userOccupation,
      userEmail,
      userType,
    } = this.state;

    return (
      <form className="container-form">
        <div className="user-details">
          <div className="user-image">
            Foto do Usuário
              <img src={this.state.userImage} alt=" " />
            <input
              type="file"
              onChange={this.handleChange}
              accept="image/*"
            />
          </div>
          <div className="user-information">
            <div className="form-label-input">
              Nome:
                <input
                type="text"
                onChange={(e) => this.setState({ userName: e.target.value })}
                value={userName}
              />
            </div>
            <div className="content-user-gender">
              <div className="form-label-input">
                Genêro:
                  <input
                  type="radio"
                  value="female"
                  onSelect={() => this.setState({ userGender: 'female' })}
                  checked={userGender === 'female'}
                /> Feminino
                <input
                  type="radio"
                  value="male"
                  onSelect={() => this.setState({ userGender: 'male' })}
                  checked={userGender === 'male'}
                /> Masculino
              </div>
            </div>
          </div>
        </div>
        <div className="group-input">
          <div className="form-label-input">
            Data de nascimento
            <input
              type="date"
              onChange={(e) => this.setState({ userBirthdate: e.target.value })}
              value={userBirthdate}
            />
          </div>
          <div className="form-label-input">
            Telefone:
            <input
              type="tel"
              value={userPhone}
              onChange={(e) => this.setState({ userPhone: e.target.value })}
            />
          </div>
        </div>
        <div className="group-input">
          <div className="form-label-input">
            Ocupação:
            <input
              type="text"
              checked={userOccupation}
              onChange={(e) =>
                this.setState({ userOccupation: e.target.value })
              }
            />
          </div>
          <div className="form-label-input">
            Email:
            <input
              type="mail"
              value={userEmail}
              onChange={(e) =>
                this.setState({
                  userEmail: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="form-label-input">
          Tipo de usuário:
          <input
            type="radio"
            value="user"
            onSelect={() => this.setState({ userType: 'user' })}
            checked={userType === 'user'}
          />
           Usuário
            <input
            type="radio"
            value="admin"
            onSelect={() => this.setState({ userType: 'admin' })}
            checked={userType === 'admin'}
          /> Adminstrador
        </div>
      </form >
    );
  }
}
