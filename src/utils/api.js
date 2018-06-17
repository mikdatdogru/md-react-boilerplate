import axios from 'axios';

const { apiUrl } = window.env;

export default {
  sampleRequest: (data) =>
    axios({
      method: 'get',
      url: `${apiUrl}/users/${data}`,
    }).then(res => res),

  auth: data =>
    axios({
      method: 'post',
      url: `${apiUrl}/login`,
      data,
    }).then(res => res),
};
