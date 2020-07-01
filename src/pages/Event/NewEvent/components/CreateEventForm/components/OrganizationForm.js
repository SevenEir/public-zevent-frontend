import React, { Component } from 'react';
import './index.css';

export default class OrganizationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnpj: '',
      organizationName: '',
      organizationSocialName: '',
      organizationOcuppation: '',
    };
  }
  render() {
    const {
      cnpj,
      organizationName,
      organizationSocialName,
      organizationOcuppation,
    } = this.state;

    return (
      <div className="container-form">
        <form>
          <div className="content-form-organization">
            <div className="content-organization-details">
              <div className="organization-cnpj">
                <div className="form-label-input">
                  CNPJ:
                  <input
                    type="text"
                    className="input-text"
                    onChange={(e) => this.setState({ cnpj: e.target.value })}
                    value={cnpj}
                  />
                </div>
              </div>
              <div className="organization-information">
                <div className="form-label-input">
                  Nome Fantasia:
                  <input
                    type="text"
                    className="input-text"
                    onChange={(e) =>
                      this.setState({ organizationName: e.target.value })
                    }
                    value={organizationName}
                  />
                </div>
                <div className="form-label-input">
                  Razão Social:
                  <input
                    type="text"
                    className="input-text"
                    onChange={(e) =>
                      this.setState({ organizationSocialName: e.target.value })
                    }
                    value={organizationSocialName}
                  />
                </div>
                <div className="form-label-input">
                  Área de Atuação:
                  <select
                    className="input-select"
                    onChange={(e) =>
                      this.setState({ organizationOcuppation: e.target.value })
                    }
                    value={organizationOcuppation}
                  >
                    <option value="Tecnologia">Tecnologia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="handle-steps-button">
          <button onClick={() => this.props.handleSteps(1, 'organization', {})}>
            Dados da Organização
          </button>

          <button onClick={() => this.props.saveEvent(this.state)}>
            Dados da Organização
          </button>
        </div>
      </div>
    );
  }
}
