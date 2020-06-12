import http from '../utils/http';

export default {
  getEvents() {
    return http.get().then(({ data }) => data.result);
  },
};
