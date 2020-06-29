import http from '../utils/http';

export default {
  getUser(login, password) {
    return http.post('/', { login, password }).then(({ data }) => data);
  },
};
