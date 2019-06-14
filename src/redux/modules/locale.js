import { LOCALE_SET } from '../types';
import { localStorageData } from '../../utils/helper';

export const setLocale = lang => dispatch => {
  localStorageData.set('language', lang);
  dispatch({
    type: LOCALE_SET,
    lang,
  });
};

export default function locale(state = { lang: 'tr' }, action = {}) {
  if (action.type === LOCALE_SET) {
    return action;
  }
  return state;
}
