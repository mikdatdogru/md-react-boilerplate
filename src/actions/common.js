import { LOCALE_SET } from './types';
import { localStorageData } from '../utils/helper';

export function localeSet(lang) {
  return {
    type: LOCALE_SET,
    lang,
  };
}

export const setLocale = lang => dispatch => {
  localStorageData.set(lang, 'language');
  dispatch(localeSet(lang));
};
