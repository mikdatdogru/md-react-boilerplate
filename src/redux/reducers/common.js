import { SAMPLE_FETCH, SAMPLE_RECEIVE, SAMPLE_FAILURE } from '../../actions/types';

const initialState = {
  isFetching: false,
  isLoaded: false,
  isFailure: false,
};

export const x = () => {};

export const sampleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAMPLE_FETCH:
      return {
        ...state,
        isFetching: true,
        isFailure: false,
        isLoaded: false,
        data: action.data,
      };

    case SAMPLE_RECEIVE:
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
