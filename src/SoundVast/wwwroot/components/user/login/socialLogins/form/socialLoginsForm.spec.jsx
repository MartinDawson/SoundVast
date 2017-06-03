import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SocialLoginsForm from './socialLoginsForm';
import SocialLogin from './socialLogin/socialLogin';
import loginProviders from '../socialLoginsMockData.spec';
import AntiForgeryToken from '../../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<SocialLoginsForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SocialLoginsForm', () => {
  let wrapper;
  let props;

  it('should render all social logins if there are login providers', () => {
    ({ wrapper, props } = setup({ loginProviders }));

    expect(wrapper.find(SocialLogin).length).toBe(props.loginProviders.length);
  });

  it('should render an anti-forgery token', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });
});