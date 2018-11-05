import { SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILURE } from './types';
import api from '../api';
import createDispatcher from '../utils/createDispatcher';

export const x = () => {};
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
