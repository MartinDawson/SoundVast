import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Modal from '../../shared/modal/modalContainer';
import FormGroup from '../../shared/form/formGroup';
import Button from '../../shared/button/button';
import Input from '../../shared/fields/input/input';
import ValidationErrors from '../../shared/validation/validationErrors';

const ForgotPassword = ({ error: errors, handleSubmit }) => (
  <Modal title="Reset your password." id="forgotPassword">
    <form onSubmit={handleSubmit} action="">
      <ValidationErrors errors={errors} />

      <FormGroup>
        <Field name="email" component={Input} type="email" placeholder="Email" />
      </FormGroup>

      <Button>
        Reset
      </Button>
    </form>
  </Modal>
);

ForgotPassword.defaultProps = {
  error: [],
};

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ForgotPassword;