import React from 'react';
import PropTypes from 'prop-types';

const SpinnerIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="84" cy="50" r="1.43464" fill="#55acee">
      <animate attributeName="r" values="8;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="0s" />
      <animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="0s" />
    </circle>
    <circle cx="77.9028" cy="50" r="8" fill="#157bf8">
      <animate attributeName="r" values="0;8;8;8;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="-0.85s" />
      <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="-0.85s" />
    </circle>
    <circle cx="43.9028" cy="50" r="8" fill="#55acee">
      <animate attributeName="r" values="0;8;8;8;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="-0.425s" />
      <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="-0.425s" />
    </circle>
    <circle cx="16" cy="50" r="6.56536" fill="#157bf8">
      <animate attributeName="r" values="0;8;8;8;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="0s" />
      <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="0s" />
    </circle>
    <circle cx="16" cy="50" r="0" fill="#55acee">
      <animate attributeName="r" values="0;0;8;8;8" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="0s" />
      <animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.7s" repeatCount="indefinite" begin="0s" />
    </circle>
  </svg>
);

SpinnerIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SpinnerIcon;
