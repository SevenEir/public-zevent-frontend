import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

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
    </div>
  );
}

EventItem.propTypes = {
  event: {
    id: PropTypes.String,
    name: PropTypes.String,
    initDate: PropTypes.Date,
    seats: PropTypes.Number,
    imageUrl: PropTypes.String,
  },
};
