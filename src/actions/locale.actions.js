import { localStorageData } from '../utils/helper';
import { LOCALE_SET } from './types';

export const x = () => {};
export const setLocale = lang => dispatch => {
  localStorageData.set('language', lang);
  dispatch({
    type: LOCALE_SET,
    lang,
  });
};
