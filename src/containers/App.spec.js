import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { mockStore } from '../utils/testHelpers';

const setUp = store => {
  let wrapper = shallow(<App store={store} />);

  wrapper = wrapper.dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  let store;

  const initialState = {
    locale: {
      type: '@md/LOCALE_SET',
      lang: 'tr',
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    console.log(process.env);
    wrapper = setUp(store);
  });

  it('Should render without errors', () => {
    expect(wrapper.prop('lang')).toEqual(initialState.locale.lang);
  });
});
