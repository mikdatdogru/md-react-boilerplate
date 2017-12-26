import moment from 'moment';
import * as _ from 'lodash';

export const x = () => x;

// localstorage belli bir formatta data yazar ve okur
export const localStorageData = {
  agentID: 'user',
  get: item =>
    new Promise((resolve, reject) => {
      if (localStorage.getItem(`${localStorageData.agentID}-${item}`)) {
        const { data, expiration, creation } = JSON.parse(
          localStorage.getItem(`${localStorageData.agentID}-${item}`),
        );
        resolve({ data, expiration, creation });
      } else {
        reject(new Error(`${item} has not found!`));
      }
    }),
  set: (datas, item) => {
    const allData = {
      data: datas,
      creation: moment(),
      expiration: moment().add(1, 'month'),
    };

    return new Promise((resolve, reject) => {
      if (!_.isEmpty(localStorageData.agentID) && !_.isEmpty(item)) {
        localStorage.setItem(`${localStorageData.agentID}-${item}`, JSON.stringify(allData));

        const { data, expiration, creation } = JSON.parse(
          localStorage.getItem(`${localStorageData.agentID}-${item}`),
        );

        resolve({ status: 'success', item, data: { data, expiration, creation } });
      } else {
        reject(new Error(`${item} has not created!`));
      }
    });
  },
};
