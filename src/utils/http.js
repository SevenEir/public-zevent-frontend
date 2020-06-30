import axios from 'axios';

class Http {
  constructor({ baseUrl }) {
    // const token = localStorage.getItem('token');
    this.baseUrl = baseUrl;
    this.axios = axios.create({
      header: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
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

const baseUrl = 'https://zevent-core.herokuapp.com/';

let http;
if (!http) {
  http = new Http({ baseUrl });
}

export default http;
