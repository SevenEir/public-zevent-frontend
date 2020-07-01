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

  createEvent(data) {
    return fetch('https://zevent-core.herokuapp.com/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log('Event', json));
  },
};
