import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Popup from './popup';

const setup = (newProps) => {
  const props = {
    popupClass: 'test',
    text: 'Successfully logged in!',
    ...newProps,
  };

  const wrapper = shallow(<Popup {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Popup', () => {
  it('should render text', () => {
    const { wrapper, props } = setup();

    expect(wrapper.text()).toBe(props.text);
  });
});