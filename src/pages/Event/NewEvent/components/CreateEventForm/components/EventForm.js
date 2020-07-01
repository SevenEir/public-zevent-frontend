import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: 'TECHNOLOGY',
      desc: '',
      eventIsPaid: false,
      type: 'PUBLIC',
      eventValue: '',
    };
  }
  render() {
    const { name, category, desc, eventIsPaid, type, eventValue } = this.state;

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
                  onChange={(e) => this.setState({ name: e.target.value })}
                  value={name}
                />
              </div>
              <div className="form-label-input">
                Tipo:
                <select
                  type="select"
                  className="input-select"
                  onChange={(e) => this.setState({ type: e.target.value })}
                  value={type}
                >
                  <option value="PUBLIC">Publico</option>
                  <option value="PRIVATE">Privado</option>
                </select>
              </div>
              <div className="form-label-input">
                Categoria:
                <select
                  type="select"
                  className="input-select"
                  onChange={(e) => this.setState({ category: e.target.value })}
                  value={category}
                >
                  <option value="TECHNOLOGY">Tecnologia</option>
                  <option value="AUTOMOBILISTIC">Automobílistica</option>
                  <option value="GASTRONOMIC">Gastronomia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="event-description">
            <div className="form-label-input text-area-input">
              Descrição
              <textarea
                value={desc}
                onChange={(e) => this.setState({ desc: e.target.value })}
              />
            </div>
            <div className="event-price-description">
              <div className="form-label-input checkbox-input">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  checked={eventIsPaid}
                  onChange={() =>
                    this.setState({ eventIsPaid: !eventIsPaid, eventValue: '' })
                  }
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
