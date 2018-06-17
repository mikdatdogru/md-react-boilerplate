import { LOCALE_SET, SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILURE } from './types';
import { localStorageData } from '../utils/helper';
import api from '../utils/api';
import createDispatcher from '../utils/createDispatcher';

export function localeSet(lang) {
  return {
    type: LOCALE_SET,
    lang,
  };
}

export const setLocale = lang => dispatch => {
  localStorageData.set('language', lang);
  dispatch(localeSet(lang));
};

export function sampleAction(data) {
  return dispatch => {
    dispatch(createDispatcher(SAMPLE_REQUEST, data));

    return api
      .sampleRequest(data)
      .then(res => {
        dispatch(createDispatcher(SAMPLE_SUCCESS, res.data));

        return res;
      })
      .catch(err => {
        dispatch(createDispatcher(SAMPLE_FAILURE, err.response));

        return err;
      });
  };
}
