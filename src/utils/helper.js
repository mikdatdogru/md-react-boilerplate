import moment from 'moment';
import * as _ from 'lodash';
// import staticData from '../utils/staticData.json';



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
  clearExpired: ()=>{
    // clear expired data
    Object.keys(localStorage).reduce((total, item) => {
      let data;

      try {
        data = JSON.parse(localStorage[item]);

        /*
         console.log(moment(data.expiration).format());
         console.log(moment().format());

         */

        if (moment(data.expiration).format() < moment().format()) {
          localStorage.removeItem(item);
        }
      } catch (err) {
        console.log('localstorage uzerinde gecersiz kayit tespit edildi');
      }
      return total;
    }, []);
    // clear expired data
  }
};

export const prettify = text =>
  text
    .replace(/[i|İ]/g, 'i')
    .replace(/[ı|I]/g, 'i')
    .replace(/[ş|Ş]/g, 's')
    .replace(/[ö|Ö]/g, 'o')
    .replace(/[ü|Ü]/g, 'u')
    .replace(/[ç|Ç]/g, 'c')
    .replace(/[ğ|Ğ]/g, 'g')
    .replace(/\s/gi, '-')
    .replace(/[-]+/gi, '-')
    .toLowerCase();