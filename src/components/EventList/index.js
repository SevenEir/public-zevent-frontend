import React from 'react';
import { Link } from 'react-router-dom';
import eventServices from '../../services/eventService';
//import userServices from '../../services/userService';
import EventItem from '../EventItem';
import NewEvent from '../pages/NewEvent';
import Loading from '../Loading';
import './styles.css';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [], isLoading: true };
  }

  async componentDidMount() {
    const response = await eventServices.getEvents();
    //await userServices.getUserInfo();
    this.setState({ events: response, isLoading: false });
  }

  renderEvents() {
    const { events } = this.state;
    return events.map((event) => {
      return <EventItem key={event.id} event={event} />;
    });
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <div className="container-eventLoading">
        <Loading />
      </div>
    ) : (
      <>
        <div className="container-event">
          <div>
            Filtro:
            <select name="Áreas">
              <option>Administração</option>
              <option>Marketing</option>
              <option>Tecnologia</option>
            </select>
          </div>
          <Link to={NewEvent}>
            <button className="button-newEvent">Adicionar Evento</button>
          </Link>
        </div>
        <div className="container-eventList">{this.renderEvents}</div>
      </>
    );
  }
}

export default EventList;
