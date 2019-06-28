import sample, { sampleAction } from '../../../redux/modules/sample';
import { SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILURE } from '../../../redux/types';
import { mockStore } from '../../../utils/testHelpers';

describe('Sample Module', () => {
  let store;

  const initialState = {
    locale: {
      type: '@md/LOCALE_SET',
      lang: 'tr',
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('Sample: Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: '@md/SAMPLE_REQUEST',
        payload: 'mikdatdogru',
      },
    ];

    sampleAction('mikdatdogru')(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('SAMPLE_REQUEST', () => {
    const action = { type: SAMPLE_REQUEST, payload: 'mikdatdogru' };
    const expectedState = {
      isFetching: true,
      isLoaded: false,
      isFailure: false,
      payload: 'mikdatdogru',
    };
    expect(sample(undefined, action)).toEqual(expectedState);
  });
  test('SAMPLE_SUCCESS', () => {
    const action = { type: SAMPLE_SUCCESS };
    const expectedState = {
      isFetching: false,
      isLoaded: true,
      isFailure: false,
      payload: undefined,
    };
    expect(sample(undefined, action)).toEqual(expectedState);
  });
  test('SAMPLE_FAILURE', () => {
    const action = { type: SAMPLE_FAILURE };
    const expectedState = {
      isFetching: false,
      isLoaded: false,
      isFailure: true,
      payload: undefined,
    };
    expect(sample(undefined, action)).toEqual(expectedState);
  });
});
