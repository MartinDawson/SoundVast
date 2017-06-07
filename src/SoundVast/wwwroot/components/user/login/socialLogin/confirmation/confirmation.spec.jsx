import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLoginConfirmation from './confirmation';
import SocialLoginConfirmationForm from './form/formContainer';

const setup = (newProps) => {
  const props = {
    location: {
      search: '?loginProvider=Facebook&email=test@outlook.com',
    },
    ...newProps,
  };

  const wrapper = shallow(<SocialLoginConfirmation {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SocialLoginConfirmation', () => {
  let wrapper;

  it('should render a form', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(SocialLoginConfirmationForm).length).toBe(1);
  });

  it('should extract properties from search', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(SocialLoginConfirmationForm).prop('loginProvider')).toBe('Facebook');
    expect(wrapper.find(SocialLoginConfirmationForm).prop('email')).toBe('test@outlook.com');
  });
});
