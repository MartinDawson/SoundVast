import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';

import BasicInfo from './component';
import ImageDropzone from './imageDropzone/container';

const setup = (newProps) => {
  const props = {
    genres: [
      { id: 0, name: 'metal' },
      { id: 1, name: 'rock' },
    ],
    id: 'test',
    ...newProps,
  };

  const wrapper = shallow(<BasicInfo {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('BasicInfo', () => {
  it('should render ImageDropzone', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ImageDropzone).exists()).toBe(true);
  });

  it('should map no selectable genres when no genres', () => {
    const { wrapper } = setup({ genres: [] });
    const genreSelect = wrapper.find(Field).filter('[name="genreId"]');

    expect(genreSelect.find('option').length).toBe(1);
  });

  it('should map selectable genres when genres', () => {
    const { wrapper } = setup();
    const genreSelect = wrapper.find(Field).filter('[name="genreId"]');

    expect(genreSelect.find('option').length).toBe(3);
  });
});
