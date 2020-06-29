import http from '../utils/http';

export default {
  getEvents() {
    return http.get('api/public-event').then(({ data }) => data);
  },
};
