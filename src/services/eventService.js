import http from '../utils/http';

export default {
  getEvents() {
    return http.get('/public-event').then(({ data }) => data);
  },
};
