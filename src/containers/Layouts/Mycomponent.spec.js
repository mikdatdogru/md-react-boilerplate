import React from 'react';
import { shallow } from 'enzyme';
// import { expect } from 'chai';
import { MyComponent } from './Mycomponent';
import { mockStore } from '../../utils/testHelpers';

describe('App Component', () => {
  it('should blabla', () => {
    const initialState = {
      locale: {
        type: '@md/LOCALE_SET',
        lang: 'tr',
      },
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<MyComponent store={store} />);
    const instance = wrapper.instance();
    instance.setData(2);
    expect(wrapper.state('data')).toBe(2);
  });
});
