import { SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILURE } from '../../actions/types';
import createReducer from '../../utils/createReducer';

export const x = () => {};

// Without using createReducer example:
/*

export const sampleData = (
  state = {
    isFetching: false,
    isLoaded: false,
    isFailure: false,
  },
  action = {},
) => {
  switch (action.type) {
    case SAMPLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFailure: false,
        isLoaded: false,
        data: action.data,
      };

    case SAMPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFailure: false,
        isLoaded: true,
        data: action.data,
      };

    case SAMPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFailure: true,
        isLoaded: false,
        data: action.data,
      };

    default:
      return state;
  }
};
*/

export const sampleData = createReducer({
  mapActionToKey: action => action.type,
  types: [SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILURE],
});
