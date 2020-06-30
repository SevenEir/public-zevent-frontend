import React, { Component } from 'react';
import cep from 'cep-promise'

import './index.css';

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      address: '',
      addressNumber: '',
      addressComplement: '',
      addressNeighborhood: '',
      addressState: '',
      addressCity: '',
      initialDate: new Date(),
      finalDate: '',
      initialHour: '',
      finalhour: '',
    };
  }

  getAddressByCep = () => {
    if (this.state.zipCode.length < 8) return;

    cep(this.state.zipCode).then(r => this.setState({
      address: r.street,
      addressNeighborhood: r.neighborhood,
      addressState: r.state,
      addressCity: r.city,
    })).catch(console.log);
  }

  render() {
    const {
      zipCode,
      address,
      addressNumber,
      addressComplement,
      addressNeighborhood,
      addressState,
      addressCity,
      initialDate,
      finalDate,
      initialHour,
      finalhour,
    } = this.state;

    return (
      <div className="container-form">
        <form>
          <div className="content-form-address">
            <div className="content-address-details">
              <div className="address-zipCode">
                <div className="form-label-input">
                  CEP:
                  <input
                    type="text"
                    onBlur={() => this.getAddressByCep()}
                    maxLength={8}
                    onChange={(e) => this.setState({ zipCode: e.target.value })}
                    value={zipCode}
                  />
                </div>
              </div>
              <div className="address-information">
                <div className="form-label-input">
                  Logradouro:
                  <input
                    type="text"
                    onChange={(e) => this.setState({ address: e.target.value })}
                    value={address}
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
                    type="date"
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
                    type="date"
                    value={finalDate}
                    onChange={(e) =>
                      this.setState({
                        finalDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-label-input">
                  Hora inicial:
                  <input
                    type="text"
                    value={initialHour}
                    onChange={(e) =>
                      this.setState({
                        initialHour: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-label-input">
                  Hora Final:
                  <input
                    type="text"
                    value={finalhour}
                    onChange={(e) =>
                      this.setState({
                        finalhour: e.target.value,
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
