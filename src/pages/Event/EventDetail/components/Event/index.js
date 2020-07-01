import React from 'react';
import './styles.css';
import eventServices from '../../../../../services/eventService';
import Loading from '../../../../../components/Loading';
import Home from '../../../../Home';
import { Link } from 'react-router-dom';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: {}, eventId: props.id, isLoading: true };
  }

  getDateByDateTime(datetime) {
    const index = datetime.indexOf('T');
    return datetime.slice(0, index);
  }

  getHourByDateTime(datetime) {
    const index = datetime.indexOf('T');
    return datetime.slice(index + 1, index + 6);
  }

  async componentDidMount() {
    const { eventId } = this.state;
    const response = await eventServices.getEventById(eventId);
    this.setState({ event: response, isLoading: false });
    this.setState({
      event: response,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, event } = this.state;
    return isLoading ? (
      <div className="container-eventLoading">
        <Loading />
      </div>
    ) : (
      <>
        <div className="container-event-detail">
          <img src={event.imageUrl}/>
          <div className="container-event-content">
            <h1>{event.name}</h1>
            <div className="container-event-desc">
              <p>{event.desc}</p>
              <p>Data: {this.getDateByDateTime(event.initDate)}</p>
              <p>
                Endereço: {event.organization.address.street},{' '}
                {event.organization.address.number},{' '}
                {event.organization.address.complement},{' '}
                {event.organization.address.neighborhood} -{' '}
                {event.organization.address.city} -{' '}
                {event.organization.address.state}, {''}
                {event.organization.address.postalCode}
              </p>
              <p>Horário: {this.getHourByDateTime(event.initDate)}</p>
            </div>
            <Link to="/home">
              <button className="button-back">Voltar</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Event;
