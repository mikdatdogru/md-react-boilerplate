import axios from 'axios';

const { apiUrl } = window.env;

export default {

  sampleRequest: data =>
    axios({
      method: 'post',
      url: `${apiUrl}/sampleRequest`,
      data,
    }).then(res => res),

 auth: data =>
    axios({
      method: 'post',
      url: `${apiUrl}/login`,
      data,
    }).then(res => res),


};
