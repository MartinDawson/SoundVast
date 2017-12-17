import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../input/input';

const NameField = ({ id, label }) => (
  <label htmlFor={`name_${id}`}>{label} *
    <Field name="name" id={`name_${id}`} component={Input} />
  </label>
);

NameField.defaultProps = {
  label: 'Name',
  id: 0,
};

NameField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default NameField;
