import axios from 'axios';

export default axios.create({
  baseURL: 'https://guestreportingapi.com/',
  //baseURL: 'http://127.0.0.1:8000',
  //baseURL: 'http://192.168.1.226:8000',
});
