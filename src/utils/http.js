import axios from 'axios';

class Http {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
    this.axios = axios.create({
      header: {
        'Content-type': 'application/json',
      },
    });
  }

  get(urlPath, params) {
    return this.axios.get(this._getUrl() + urlPath, params);
  }

  post(urlPath, params) {
    return this.axios.post(this._getUrl() + urlPath, params);
  }

  put(urlPath, params) {
    return this.axios.put(this._getUrl() + urlPath, params);
  }

  _getUrl() {
    return this.baseUrl;
  }
}

const baseUrl = 'https://zevent-core.herokuapp.com/api';

let http;
if (!http) {
  http = new Http({ baseUrl });
}

export default http;
