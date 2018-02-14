import React from 'react';
import PropTypes from 'prop-types';

const StackIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M16 5L8 1 0 5l8 4 8-4zM8 2.328L13.345 5 8 7.672 2.655 5 8 2.328zm6.398 4.871L16 8l-8 4-8-4 1.602-.801L8 10.398zm0 3L16 11l-8 4-8-4 1.602-.801L8 13.398z" />
  </svg>
);

StackIcon.defaultProps = {
  className: null,
};

StackIcon.propTypes = {
  className: PropTypes.string,
};

export default StackIcon;