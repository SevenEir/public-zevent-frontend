// import http from '../utils/http';
// eslint-disable-next-line no-undef
const fetch = require('node-fetch');

export default {
  getUserInfo() {
    return fetch('https://zevent-core.herokuapp.com/api/user/get-actual-user', {
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
