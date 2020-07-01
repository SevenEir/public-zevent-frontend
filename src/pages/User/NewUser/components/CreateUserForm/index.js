import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cep from 'cep-promise'

import './index.css';
import userService from '../../../../../services/userService';

export default class CreateUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userBirthday: '',
      userGender: '',
      userPhone: '',
      userEmail: '',
      userPassword: '',
      address: '',
      postalCode: '',
      addressStreet: '',
      addressNumber: '',
      addressComplement: '',
      addressNeighborhood: '',
      addressState: '',
      addressCity: '',
      userImage: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png',
    };
  }

  handleChange = (event) => {
    if (event.target.files[0]) this.setState({
      userImage: URL.createObjectURL(event.target.files[0]),
    });
  }



  getAddressByCep = () => {
    if (this.state.postalCode.length < 8) return;

    cep(this.state.postalCode).then(r => this.setState({
      addressStreet: r.street,
      addressNeighborhood: r.neighborhood,
      addressState: r.state,
      addressCity: r.city,
    })).catch(console.log);
  }

  submitData = async (e) => {
    e.preventDefault();

    const {
      userName,
      userBirthday,
      userGender,
      userPhone,
      userPassword,
      userEmail,
      postalCode,
      addressStreet,
      addressNumber,
      addressComplement,
      addressNeighborhood,
      addressState,
      addressCity,
    } = this.state;

    const data = {
      name: userName,
      birthday: userBirthday,
      roles: [
        {
          name: "USER"
        }
      ],
      gender: "MALE",
      phone: userPhone,
      email: userEmail,
      password: userPassword,
      address: {
        postalCode,
        country: "Brasil",
        state: addressState,
        city: addressCity,
        neighborhood: addressNeighborhood,
        street: addressStreet,
        number: addressNumber,
        complement: addressComplement
      }
    };

    await userService.createUser(data);
  }

  render() {
    const {
      userName,
      userBirthday,
      userGender,
      userPhone,
      userEmail,
      postalCode,
      addressStreet,
      addressNumber,
      addressComplement,
      addressNeighborhood,
      addressState,
      addressCity,
      userPassword,
    } = this.state;

    return (
      <form className="container-form" onSubmit={(e) => this.submitData(e)}>
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
            <div className="group-input">
              <div className="form-label-input">
                Genêro:
                  <input
                  type="radio"
                  value="FEMALE"
                  onChange={() => this.setState({ userGender: 'FEMALE' })}
                  checked={userGender === 'FEMALE'}
                /> Feminino
                  <input
                  type="radio"
                  value="MALE"
                  onChange={() => this.setState({ userGender: 'MALE' })}
                  checked={userGender === 'MALE'}
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
              onChange={(e) => this.setState({ userBirthday: e.target.value })}
              value={userBirthday}
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
          <div className="form-label-input">
            Password:
            <input
              type="password"
              value={userPassword}
              onChange={(e) =>
                this.setState({
                  userPassword: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="content-address-details">
          <div className="address-postalCode">
            <div className="form-label-input">
              CEP:
                  <input
                type="text"
                onBlur={() => this.getAddressByCep()}
                maxLength={8}
                onChange={(e) => this.setState({ postalCode: e.target.value })}
                value={postalCode}
              />
            </div>
          </div>
          <div className="address-information">
            <div className="form-label-input">
              Logradouro:
                  <input
                type="text"
                onChange={(e) => this.setState({ addressStreet: e.target.value })}
                value={addressStreet}
              />
            </div>
            <div className="form-label-input">
              N°:
                  <input
                type="text"
                onChange={(e) =>
                  this.setState({ addressNumber: e.target.value })
                }
                value={addressNumber}
              />
            </div>
            <div className="form-label-input">
              Complemento:
                  <input
                type="text"
                onChange={(e) =>
                  this.setState({ addressComplement: e.target.value })
                }
                value={addressComplement}
              />
            </div>
            <div className="form-label-input">
              Bairro:
                  <input
                type="text"
                value={addressNeighborhood}
                onChange={(e) =>
                  this.setState({ addressNeighborhood: e.target.value })
                }
              />
            </div>
            <div className="form-label-input">
              Estado:
                  <input
                type="text"
                value={addressState}
                onChange={(e) =>
                  this.setState({ addressState: e.target.value })
                }
              />
            </div>
            <div className="form-label-input">
              Cidade:
                  <input
                type="text"
                value={addressCity}
                onChange={(e) =>
                  this.setState({
                    addressCity: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="button-submit">
          <button type="submit">
            Concluir Cadastro
            </button>
          <Link to={'/'}  >
            <button type="button">
              Cancelar
          </button>
          </Link>
        </div>
      </form >
    );
  }
}
