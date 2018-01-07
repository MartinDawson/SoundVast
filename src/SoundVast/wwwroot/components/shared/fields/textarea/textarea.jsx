import React from 'react';
import PropTypes from 'prop-types';
import ResizableTextArea from 'react-fluid-textarea';

import styles from './textarea.less';

const Textarea = ({ input, placeholder }) => (
  <ResizableTextArea
    className={styles.textArea}
    value={input.value}
    onChange={e => input.onChange(e.currentTarget.value)}
    placeholder={placeholder}
  />
);

Textarea.defaultProps = {
  placeholder: null,
};

Textarea.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  placeholder: PropTypes.string,
};

export default Textarea;
