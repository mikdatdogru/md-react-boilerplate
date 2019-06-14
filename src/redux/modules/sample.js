import { SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILURE } from '../types';
import api from '../../api';
import createDispatcher from '../../utils/createDispatcher';
import createReducer from '../../utils/createReducer';

// Reducer
export default createReducer({
  mapActionToKey: action => action.type,
  types: [SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILURE],
});

// Without using createReducer example:
/*
export function sampleRequest(data) {
  return {
    type: SAMPLE_REQUEST,
    data,
  };
}
*/

// Action Creators
export function sampleAction(data) {
  return (dispatch) => {
    // dispatch(sampleRequest(data));
    dispatch(createDispatcher(SAMPLE_REQUEST, data));

    return api
      .sampleRequest(data)
      .then((res) => {
        dispatch(createDispatcher(SAMPLE_SUCCESS, res.data));
        return res;
      })
      .catch((err) => {
        dispatch(createDispatcher(SAMPLE_FAILURE, err.response));

        return err;
      });
  };
}

// Without using sampleAction example:
/*
export default function reducer(
  state = {
    isFetching: false,
    isLoaded: false,
    isFailure: false,
  },
  action,
) {
  switch (action.type) {
    case SAMPLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFailure: false,
        isLoaded: false,
        payload: action.payload,
      };

    case SAMPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFailure: false,
        isLoaded: true,
        payload: action.payload,
      };

    case SAMPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFailure: true,
        isLoaded: false,
        payload: action.payload,
      };

    default:
      return state;
  }
}
*/
