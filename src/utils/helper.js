import moment from 'moment';
import * as _ from 'lodash';

export const x = () => x;

// localstorage belli bir formatta data yazar ve okur
// localstorage belli bir formatta data yazar ve okur
export const localStorageData = {
  prefix: 'user',
  get: item => JSON.parse(localStorage.getItem(`${localStorageData.prefix}-${item}`)),
  set: (datas, item) => {
    const allData = {
      data: datas,
      creation: moment(),
      expiration: moment().add(1, 'month'),
    };

    return new Promise((resolve, reject) => {
      if (!_.isEmpty(localStorageData.prefix) && !_.isEmpty(item)) {
        localStorage.setItem(`${localStorageData.prefix}-${item}`, JSON.stringify(allData));

        const { data, expiration, creation } = JSON.parse(
          localStorage.getItem(`${localStorageData.prefix}-${item}`),
        );

        resolve({ status: 'success', item, data: { data, expiration, creation } });
      } else {
        reject(new Error(`${item} has not created!`));
      }
    });
  },
};
