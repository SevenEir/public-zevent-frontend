import React, { Component } from 'react';
import cep from 'cep-promise'

import './index.css';

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postalCode: '',
      addressStreet: '',
      addressNumber: '',
      addressComplement: '',
      addressNeighborhood: '',
      addressState: '',
      addressCity: '',
      initialDate: new Date(),
      finishDate: ''
    };
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

  render() {
    const {
      postalCode,
      addressStreet,
      addressNumber,
      addressComplement,
      addressNeighborhood,
      addressState,
      addressCity,
      initialDate,
      finishDate,
    } = this.state;

    return (
      <div className="container-form">
        <form>
          <div className="content-form-address">
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
                <div className="form-label-input">
                  Data inicial:
                  <input
                    type="datetime"
                    value={initialDate}
                    onChange={(e) =>
                      this.setState({
                        initialDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-label-input">
                  Data Final:
                  <input
                    type="datetime"
                    value={finishDate}
                    onChange={(e) =>
                      this.setState({
                        finishDate: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="handle-steps-button">
          <button onClick={() => this.props.handleSteps(0, 'address', {})}>
            Dados do Evento
          </button>
          <button
            onClick={() => this.props.handleSteps(2, 'address', this.state)}
          >
            Dados da Organização
          </button>
        </div>
      </div>
    );
  }
}
