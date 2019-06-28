import locale, { setLocale } from '../../../redux/modules/locale';
import { LOCALE_SET, SAMPLE_REQUEST } from '../../../redux/types';
import { mockStore } from '../../../utils/testHelpers';

describe('Locale Module', () => {
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

  test('setLocale: Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: '@md/LOCALE_SET',
        lang: 'en',
      },
    ];

    setLocale('en')(store.dispatch);
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('returns the correct state', () => {
    const action = { type: LOCALE_SET, lang: 'en' };
    const expectedState = { lang: 'en', type: '@md/LOCALE_SET' };

    expect(locale(undefined, action)).toEqual(expectedState);
  });
  test('returns the default state', () => {
    const action = { type: SAMPLE_REQUEST, lang: 'en' };
    const expectedState = { lang: 'tr' };
    expect(locale(undefined, action)).toEqual(expectedState);
  });
  test('returns the default state for undefined action', () => {
    const expectedState = { lang: 'tr' };
    expect(locale(undefined, undefined)).toEqual(expectedState);
  });
});
