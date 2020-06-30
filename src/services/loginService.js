import fetch from 'node-fetch';

async function loginService(login, password) {
  return fetch('https://zevent-security.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: login,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((json) => json);
}

export default loginService;
