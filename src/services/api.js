import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.56.1:3000',
});

api.interceptors.request.use(
  function (config) {
    console.log('Passou no interceptor Request');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    console.log('Passou no interceptor Response');
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
