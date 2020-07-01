// import http from '../utils/http';
// eslint-disable-next-line no-undef
const fetch = require('node-fetch');

export default {
  getEvents() {
    return fetch('https://zevent-core.herokuapp.com/api/public-event', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
      },
    })
      .then((res) => res.json())
      .then((json) => json);
  },
  getEventById(id) {
    console.log(id);
    return fetch(`https://zevent-core.herokuapp.com/api/public-event/${id}`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
      },
    })
      .then((res) => res.json())
      .then((json) => json);
  },
};
