import React from 'react';
import { shallow } from 'enzyme';
import ConnectedTopNavigation, { TopNavigationComp } from './TopNavigation';
import { findByTestAttr, mockStore } from '../../utils/testHelpers';

const shallowSetup = (Component, props = {}) => {
  return shallow(<Component {...props} />);
};
/*

const mountSetup = (Component, props = {}) => {
  return mount(<Component {...props} />);
};
*/

describe('App Component', () => {
  let wrapper;
  let connectedWrapper;
  const initialState = {
    locale: {
      type: '@md/LOCALE_SET',
      lang: 'tr',
    },
  };
  const store = mockStore(initialState);
  const setLocale = jest.fn();

  beforeEach(() => {
    wrapper = shallowSetup(TopNavigationComp, { lang: 'tr', setLocale });
    connectedWrapper = shallowSetup(ConnectedTopNavigation, { store });
  });

  it('Component başarılı bir sekilde render olmalı', () => {
    wrapper = findByTestAttr(wrapper, 'TopNavigation');
    expect(wrapper.length).toBe(1);
  });

  it('languageChanger metodu setLocale propunu tetiklemeli', () => {
    const instance = wrapper.instance();
    instance.languageChanger('tr');
    expect(setLocale).toBeCalled();
  });
  it('initialState icerisinde set edilen lang popertysi propslardan okunabilmeli ', () => {
    const toShallow = connectedWrapper.shallow();
    expect(toShallow.props().lang).toEqual('tr');
  });
});
