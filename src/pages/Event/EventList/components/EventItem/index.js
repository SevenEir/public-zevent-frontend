import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Link } from 'react-router-dom';

export default function EventItem(props) {
  const { event } = props;
  function getDateByDateTime(datetime) {
    const index = datetime.indexOf('T');
    return datetime.slice(0, index);
  }

  function getHourByDateTime(datetime) {
    const index = datetime.indexOf('T');
    return datetime.slice(index + 1, index + 6);
  }

  return (
    <div className="container-eventItem">
      <img src={event.imageUrl} alt="Event"></img>
      <h1>{event.name}</h1>
      <p>Data: {getDateByDateTime(event.initDate)}</p>
      <p>Horário: {getHourByDateTime(event.initDate)}</p>
      <p>Assentos: {event.seats}</p>
      <Link to={`/event/${event.id}`}>
        <button className="eventItem-button">+ Informações</button>
      </Link>
    </div>
  );
}

EventItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    seats: PropTypes.number,
    imageUrl: PropTypes.string,
  }),
};
