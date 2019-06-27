import React from 'react';
import { shallow, mount } from 'enzyme';
// import { expect } from 'chai';
import Fa from './Fa';
import { findByTestAttr } from '../../utils/testHelpers';

const shallowSetup = (props = {}) => {
  const wrapper = shallow(<Fa {...props} />);
  return wrapper;
};
const mountSetup = (props = {}) => {
  const wrapper = mount(<Fa {...props} />);
  return wrapper;
};

describe('Fa Component', () => {
  let component;

  beforeEach(() => {});

  it('Component başarılı bir sekilde render olmalı', () => {
    component = shallowSetup({ icon: 'user' });
    component = findByTestAttr(component, 'faComponent');
    expect(component.length).toBe(1);
  });

  it('Component icine icon propsu gitmeli', () => {
    const wrapper = mountSetup({ icon: 'user' });
    expect(wrapper.props().icon).toEqual('user');
  });
});
