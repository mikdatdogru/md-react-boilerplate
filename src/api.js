import axios from 'axios';
import errorHandler from './utils/errorHandler';

const { apiUrl } = window.env;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});
export const client = axiosInstance;

client.interceptors.response.use(
  response =>
    // request success ise once buraya gelir

    response,
  error => {
    // request error ise once buraya gelir

    errorHandler(error);

    return Promise.reject(error);
  },
);

export default {
  sampleRequest: data =>
    client({
      method: 'get',
      url: `/users/${data}`,
    }).then(res => res),

  auth: data =>
    client({
      method: 'post',
      url: `/login`,
      data,
    }).then(res => res),
};
