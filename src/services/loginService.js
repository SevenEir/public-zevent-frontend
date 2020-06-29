import axios from 'axios';

function loginService(login, password) {
  return axios
    .post('https://zevent-core.herokuapp.com/oauth/token', {
      body: {
        grant_type: 'password',
        login,
        password,
      },
      auth: {
        username: 'zevent-client',
        password: '123',
      },
    })
    .then(({ data }) => data);
}

export default loginService;
