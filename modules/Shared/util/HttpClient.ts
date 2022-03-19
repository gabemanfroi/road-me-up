import axios from 'axios';

class HttpClient {
  public axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

export default new HttpClient();
