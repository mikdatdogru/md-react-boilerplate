import { LOCALE_SET, SAMPLE_FETCH, SAMPLE_RECEIVE,
  SAMPLE_FAILURE } from './types';
import { localStorageData } from '../utils/helper';
import api from '../utils/api';

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

export const sampleFetch = data => ({
  type: SAMPLE_FETCH,
  data,
});

export const sampleReceive = data => ({
  type: SAMPLE_RECEIVE,
  data,
});

export const sampleFailure = data => ({
  type: SAMPLE_FAILURE,
  data,
});

export function sampleAction(data) {
  return dispatch => {
    dispatch(sampleFetch(data));

    return api
      .sampleRequest(data)
      .then(res => {
        dispatch(sampleReceive(res.data));
        return res;
      })
      .catch(err => {
        dispatch(sampleFailure(err.response));

        return err;
      });
  };
}
