import React from 'react';
import { shallow, mount } from 'enzyme';
import LangFlag from './LangFlag';
import { findByTestAttr } from '../../utils/testHelpers';

const shallowSetup = (Component, props = {}) => {
  return shallow(<Component {...props} />);
};

const mountSetup = (Component, props = {}) => {
  return mount(<Component {...props} />);
};

describe('LangFlag Component', () => {
  let shallowedWrapper;
  let mountedWrapper;

  beforeEach(() => {
    shallowedWrapper = shallowSetup(LangFlag, { name: 'tr' });
    mountedWrapper = mountSetup(LangFlag, { name: 'tr' });
  });

  it('Component başarılı bir sekilde render olmalı', () => {
    shallowedWrapper = findByTestAttr(shallowedWrapper, 'flagComponent');
    expect(shallowedWrapper.length).toBe(1);
  });

  it('Component icine name propsu gitmeli', () => {
    expect(mountedWrapper.props().name).toEqual('tr');
  });
});
