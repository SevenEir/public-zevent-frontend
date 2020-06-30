import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTitle: '',
      eventCategory: '',
      eventDescription: '',
      eventIsPaid: false,
      eventType: '',
      eventValue: '',
    };
  }
  render() {
    const {
      eventTitle,
      eventCategory,
      eventDescription,
      eventIsPaid,
      eventType,
      eventValue,
    } = this.state;

    return (
      <div className="container-form">
        <div className="form-event">
          <div className="event-details">
            <div className="event-image">
              <p>Capa</p>
              <img
                src="https://www.adtsys.com.br/wp-content/uploads/2019/10/google-cloud-linkedin.jpg"
                alt="Capa do Evento"
              />
            </div>
            <div className="event-information">
              <div className="form-label-input">
                Titulo:
                <input
                  type="text"
                  className="input-text"
                  onChange={(e) =>
                    this.setState({ eventTitle: e.target.value })
                  }
                  value={eventTitle}
                />
              </div>
              <div className="form-label-input">
                Tipo:
                <select
                  type="select"
                  className="input-select"
                  onChange={(e) => this.setState({ eventType: e.target.value })}
                  value={eventType}
                >
                  <option>Presencial</option>
                  <option>Online</option>
                </select>
              </div>
              <div className="form-label-input">
                Categoria:
                <select
                  type="select"
                  className="input-select"
                  onChange={(e) =>
                    this.setState({ eventCategory: e.target.value })
                  }
                  value={eventCategory}
                >
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Cloud">Cloud</option>
                  <option value="Segurança da Informação">
                    Segurança da Informação
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="event-description">
            <div className="form-label-input text-area-input">
              Descrição
              <textarea
                value={eventDescription}
                onChange={(e) =>
                  this.setState({ eventDescription: e.target.value })
                }
              />
            </div>
            <div className="event-price-description">
              <div className="form-label-input checkbox-input">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  checked={eventIsPaid}
                  onChange={() => this.setState({ eventIsPaid: !eventIsPaid })}
                />
                Gratuito
              </div>
              <div className="form-label-input">
                Valor:
                <input
                  type="number"
                  className="input-text"
                  value={eventValue}
                  onChange={(e) =>
                    this.setState({
                      eventIsPaid: false,
                      eventValue: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="handle-steps-button">
          <Link to="/home">
            <button>Cancelar Evento</button>
          </Link>
          <button
            onClick={() => this.props.handleSteps(1, 'event', this.state)}
          >
            Dados do Endereço
          </button>
        </div>
      </div>
    );
  }
}
