webpackJsonp([0],Array(30).concat([
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__(484);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      styleName = _ref.styleName,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'styleName', 'className']);

  return _react2.default.createElement(
    'button',
    _extends({}, props, { className: (0, _classnames2.default)(_button2.default.button, _button2.default[styleName], className) }),
    children
  );
};

Button.defaultProps = {
  styleName: 'primary',
  className: null
};

Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  styleName: _propTypes2.default.string
};

exports.default = Button;

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationField = __webpack_require__(95);

var _validationField2 = _interopRequireDefault(_validationField);

var _inputTextField = __webpack_require__(1134);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputTextField = function InputTextField(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      props = _objectWithoutProperties(_ref, ['input', 'meta']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement('input', _extends({}, input, {
      className: _inputTextField2.default.input
    }, props))
  );
};

InputTextField.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired
};

exports.default = InputTextField;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var showModal = exports.showModal = function showModal(id, variables) {
  return {
    type: 'SHOW_MODAL',
    id: id,
    variables: variables
  };
};

var hideModal = exports.hideModal = function hideModal() {
  return {
    type: 'HIDE_MODAL'
  };
};

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationErrors = __webpack_require__(434);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationField = function ValidationField(_ref) {
  var children = _ref.children,
      error = _ref.error,
      touched = _ref.touched,
      className = _ref.className;

  var errors = error;

  if (!Array.isArray(error)) {
    errors = [error];
  }

  return _react2.default.createElement(
    'div',
    { className: className },
    children,
    touched ? _react2.default.createElement(_validationErrors2.default, { errors: errors }) : null
  );
};

ValidationField.defaultProps = {
  error: null,
  className: null
};

ValidationField.propTypes = {
  children: _propTypes2.default.node.isRequired,
  touched: _propTypes2.default.bool.isRequired,
  error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  className: _propTypes2.default.string
};

exports.default = ValidationField;

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _notOkError = __webpack_require__(234);

var _notOkError2 = _interopRequireDefault(_notOkError);

var _validationError = __webpack_require__(235);

var _validationError2 = _interopRequireDefault(_validationError);

var _fetchProgress = __webpack_require__(233);

var _fetchProgress2 = _interopRequireDefault(_fetchProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getResponse = function getResponse(serverResponse) {
  var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';

  if (response === 'json') {
    return serverResponse.json();
  } else if (response === 'blob') {
    return serverResponse.blob();
  } else if (response === 'response') {
    return serverResponse;
  }
  return Promise.reject('invalid response supplied');
};

var handleError = function handleError(error) {
  return Promise.reject(error);
};

window.fetch.postForm = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (params) {
    var formData = new FormData();

    Object.keys(params).forEach(function (key) {
      return formData.set(key, params[key]);
    });

    return fetch(url, {
      method: 'post',
      body: formData
    }).then(_validationError2.default).then(_notOkError2.default).then(function (serverResponse) {
      return getResponse(serverResponse, options.response);
    }).catch(handleError);
  };
};

window.fetch.get = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return fetch(url).then(_notOkError2.default).then(function (serverResponse) {
    return getResponse(serverResponse, options.response);
  }).catch(handleError);
};

window.fetch.post = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (params) {
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(_extends({}, params)),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(_notOkError2.default).then(function (serverResponse) {
      return getResponse(serverResponse, options.response);
    }).catch(handleError);
  };
};

// Remove this when fetch supports progress
window.fetch.fetchProgress = function (url) {
  var uploadEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (params) {
    var formData = new FormData();

    Object.keys(params).forEach(function (key) {
      return formData.set(key, params[key]);
    });

    (0, _fetchProgress2.default)(url, {
      method: 'post',
      body: formData
    }, {}, uploadEvents);
  };
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noWhiteSpace = __webpack_require__(440);

var _noWhiteSpace2 = _interopRequireDefault(_noWhiteSpace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation(values) {
  var errors = {};

  if (!values.username || !(0, _noWhiteSpace2.default)(values.username)) {
    errors.username = 'Username is required';
  } else if (values.username.length > 15) {
    errors.username = 'Must not be more than 15 characters';
  }

  if (!values.email || !(0, _noWhiteSpace2.default)(values.email)) {
    errors.email = 'Email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'Must be a valid email address';
  }

  if (!values.password || !(0, _noWhiteSpace2.default)(values.password)) {
    errors.password = 'Password is required';
  } else if (values.password.length > 300) {
    errors.password = 'Must not be more than 300 characters';
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
};

exports.default = validation;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _found = __webpack_require__(40);

var _button = __webpack_require__(484);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LinkButton = function LinkButton(_ref) {
  var children = _ref.children,
      styleName = _ref.styleName,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'styleName', 'className']);

  return _react2.default.createElement(
    _found.Link,
    _extends({}, props, { className: (0, _classnames2.default)(_button2.default.button, _button2.default[styleName], className) }),
    children
  );
};

LinkButton.defaultProps = {
  styleName: 'primary',
  className: null
};

LinkButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  styleName: _propTypes2.default.string
};

exports.default = LinkButton;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modalButton = __webpack_require__(941);

var _modalButton2 = _interopRequireDefault(_modalButton);

var _actions = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var handlers = {
  onClick: function onClick(_ref) {
    var _onClick = _ref.onClick,
        modalId = _ref.modalId,
        variables = _ref.variables,
        dispatch = _ref.dispatch;
    return function () {
      dispatch((0, _actions.showModal)(modalId, variables));

      _onClick.apply(undefined, arguments);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)({
  modalId: _propTypes2.default.string.isRequired,
  variables: _propTypes2.default.object,
  onClick: _propTypes2.default.func
}), (0, _recompose.defaultProps)({
  onClick: Function.prototype
}), (0, _reactRedux.connect)(), (0, _recompose.withHandlers)(handlers), (0, _recompose.mapProps)(function (props) {
  var dispatch = props.dispatch,
      modalId = props.modalId,
      variables = props.variables,
      newProps = _objectWithoutProperties(props, ['dispatch', 'modalId', 'variables']);

  return newProps;
}))(_modalButton2.default);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _formGroup = __webpack_require__(1138);

var _formGroup2 = _interopRequireDefault(_formGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGroup = function FormGroup(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(className, _formGroup2.default.formGroup) },
    children
  );
};

FormGroup.defaultProps = {
  className: null
};

FormGroup.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};

exports.default = FormGroup;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return value;
};

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"wwwroot-components-header-header__header--2J0Kc","logoContainer":"wwwroot-components-header-header__logoContainer--32VSy","logoIcon":"wwwroot-components-header-header__logoIcon--3JdU3","smallLogoIcon":"wwwroot-components-header-header__smallLogoIcon--36GGq","legalIcon":"wwwroot-components-header-header__legalIcon--3ceIS","userIcon":"wwwroot-components-header-header__userIcon--3gXyU","reviewIcon":"wwwroot-components-header-header__reviewIcon--3_ETY","uploadIcon":"wwwroot-components-header-header__uploadIcon--30eIl","genreIcon":"wwwroot-components-header-header__genreIcon--2ynKL","dropdownTitle":"wwwroot-components-header-header__dropdownTitle--FHkM9","search":"wwwroot-components-header-header__search--25MrQ","beta":"wwwroot-components-header-header__beta--1g6iE"};

/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showPasswordResetPopup = exports.showPasswordResetSentPopup = exports.showEmailConfirmationPopup = exports.showRegisteredEmailSentPopup = exports.showAddedContributionPoints = undefined;

var _actions = __webpack_require__(161);

var showAddedContributionPoints = exports.showAddedContributionPoints = function showAddedContributionPoints(newPoints) {
  return (0, _actions.showPopup)('+ ' + newPoints);
};

var showRegisteredEmailSentPopup = exports.showRegisteredEmailSentPopup = function showRegisteredEmailSentPopup() {
  return (0, _actions.showPopup)('We have sent you an email to confirm your account registration.');
};

var showEmailConfirmationPopup = exports.showEmailConfirmationPopup = function showEmailConfirmationPopup() {
  return (0, _actions.showPopup)('You have successfully confirmed your email.');
};

var showPasswordResetSentPopup = exports.showPasswordResetSentPopup = function showPasswordResetSentPopup() {
  return (0, _actions.showPopup)('We have sent you an email for you to reset your password.');
};

var showPasswordResetPopup = exports.showPasswordResetPopup = function showPasswordResetPopup() {
  return (0, _actions.showPopup)('You have successfully reset your password.');
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _spinnerButton = __webpack_require__(942);

var _spinnerButton2 = _interopRequireDefault(_spinnerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var form = _ref.form;
  var formName = _ref2.formName;
  return {
    isLoading: form[formName].submitting
  };
};

var propTypes = {
  formName: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

var propsMapper = function propsMapper(props) {
  var formName = props.formName,
      isLoading = props.isLoading,
      dispatch = props.dispatch,
      newProps = _objectWithoutProperties(props, ['formName', 'isLoading', 'dispatch']);

  return newProps;
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _reactRedux.connect)(mapStateToProps), (0, _recompose.mapProps)(propsMapper))(_spinnerButton2.default);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = __webpack_require__(960);

var _modal2 = _interopRequireDefault(_modal);

var _actions = __webpack_require__(62);

var _scrollLock = __webpack_require__(975);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var modal = _ref.modal;
  var id = _ref2.id;
  return {
    isCurrentModal: modal.currentModal === id
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  if (ownProps.authRequired && !ownProps.isAuthorized && stateProps.isCurrentModal) {
    dispatchProps.showModal('login');
  }

  if (stateProps.isCurrentModal) {
    (0, _scrollLock.disableBodyScroll)();
  } else {
    (0, _scrollLock.enableBodyScroll)();
  }

  return _extends({}, ownProps, stateProps, dispatchProps);
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)({
  id: _propTypes2.default.string.isRequired,
  isAuthorized: _propTypes2.default.bool
}), (0, _reactRedux.connect)(mapStateToProps, {
  hideModal: _actions.hideModal,
  showModal: _actions.showModal
}, mergeProps), (0, _recompose.branch)(function (props) {
  return !props.isCurrentModal;
}, _recompose.renderNothing))(_modal2.default);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGenericErrorPopup = exports.hidePopup = exports.showPopup = undefined;

var _shortid = __webpack_require__(638);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {string} text - The text to show in the popup
 * @param {number} [millisecondsToShow=6000] - The amount of time in milliseconds to show the popup
 */
var showPopup = exports.showPopup = function showPopup(text) {
  var millisecondsToShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6000;
  return {
    type: 'SHOW_POPUP',
    text: text,
    id: _shortid2.default.generate(),
    millisecondsToShow: millisecondsToShow
  };
};

/**
 *
 * @param {number} index - The index of the popup to hide
 */
var hidePopup = exports.hidePopup = function hidePopup(index) {
  return {
    type: 'HIDE_POPUP',
    index: index
  };
};

var showGenericErrorPopup = exports.showGenericErrorPopup = function showGenericErrorPopup(error) {
  // eslint-disable-next-line no-console
  console.error(error);

  return showPopup('An error has occurred. Please try refreshing the page.');
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (date) {
  var monthString = "0" + (date.getMonth() + 1);
  var dateString = "/" + date.getDate();
  var fullYearString = "/" + date.getFullYear();
  var formattedDate = monthString + dateString + fullYearString;

  return formattedDate;
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLiveStream = exports.removeLiveStreamForm = exports.uploadCoverImage = exports.removeCoverImage = undefined;

var _shortid = __webpack_require__(638);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeCoverImage = exports.removeCoverImage = function removeCoverImage(index) {
  return {
    type: 'REMOVE_PREVIEW_IMAGE',
    index: index
  };
};

var uploadCoverImage = exports.uploadCoverImage = function uploadCoverImage(id, file, change) {
  return function (dispatch) {
    return fetch.postForm('/upload/uploadCoverImage')({ file: file }).then(function (json) {
      change('imagePath', json.imagePath);

      return dispatch({
        type: 'UPDATE_COVER_IMAGE',
        id: id,
        previewUrl: URL.createObjectURL(file),
        imagePath: json.imagePath
      });
    });
  };
};

var setCoverImagePlaceholder = function setCoverImagePlaceholder(id) {
  return function (dispatch) {
    return fetch.get('/upload/getPlaceholderImage').then(function (json) {
      return dispatch({
        type: 'UPDATE_COVER_IMAGE',
        id: id,
        imagePath: json.imagePath
      });
    });
  };
};

var removeLiveStreamForm = exports.removeLiveStreamForm = function removeLiveStreamForm(index) {
  return {
    type: 'REMOVE_LIVE_STREAM_FORM',
    index: index
  };
};

var addLiveStream = exports.addLiveStream = function addLiveStream() {
  return function (dispatch) {
    var id = _shortid2.default.generate();

    dispatch(setCoverImagePlaceholder(id));

    return dispatch({
      type: 'ADD_LIVE_STREAM',
      liveStream: {
        id: id
      }
    });
  };
};

/***/ }),
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _coverImage = __webpack_require__(1093);

var _coverImage2 = _interopRequireDefault(_coverImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoverImage = function CoverImage(_ref) {
  var coverImageUrl = _ref.coverImageUrl,
      className = _ref.className;
  return _react2.default.createElement('img', { alt: '', src: coverImageUrl, className: (0, _classnames2.default)(_coverImage2.default.coverImage, className) });
};

CoverImage.defaultProps = {
  className: null
};

CoverImage.propTypes = {
  className: _propTypes2.default.string,
  coverImageUrl: _propTypes2.default.string.isRequired
};

exports.default = CoverImage;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizes = __webpack_require__(978);

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayType = function (_React$Component) {
  _inherits(DisplayType, _React$Component);

  function DisplayType() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DisplayType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DisplayType.__proto__ || Object.getPrototypeOf(DisplayType)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayType: 'desktop'
    }, _this.getDisplayType = function (windowWidth) {
      if (windowWidth < _sizes2.default.breakpointMobile.value) {
        return 'mobile';
      }

      if (windowWidth < _sizes2.default.breakpointTablet.value) {
        return 'tablet';
      }

      return 'desktop';
    }, _this.updateDisplayType = function () {
      var windowWidth = document.body.getBoundingClientRect().width;
      var displayType = _this.getDisplayType(windowWidth);

      if (displayType !== _this.state.displayType) {
        _this.setState({ displayType: displayType });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DisplayType, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDisplayType);
      this.updateDisplayType();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDisplayType);
    }
  }, {
    key: 'render',
    value: function render() {
      var displayType = {
        isMobile: this.state.displayType === 'mobile',
        isTablet: this.state.displayType === 'tablet',
        isDesktop: this.state.displayType === 'desktop'
      };

      return _react2.default.createElement(
        'div',
        null,
        this.props.children(displayType)
      );
    }
  }]);

  return DisplayType;
}(_react2.default.Component);

DisplayType.propTypes = {
  children: _propTypes2.default.func.isRequired
};

exports.default = DisplayType;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _dropdown = __webpack_require__(943);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateHandlers = {
  setDropdownVisibility: function setDropdownVisibility() {
    return function (visibile) {
      return {
        isDropdownVisible: visibile
      };
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withStateHandlers)({
  isDropdownVisible: false
}, stateHandlers))(_dropdown2.default);

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var events = arguments[2];
  var uploadEvents = arguments[3];
  return new Promise(function (res, rej) {
    var xhr = new XMLHttpRequest();

    xhr.open(opts.method || 'get', url, true);

    Object.keys(opts.headers || {}).forEach(function (key) {
      xhr.setRequestHeader(key, opts.headers[key]);
    });

    xhr.onload = function (e) {
      return res(e.target.responseText);
    };
    xhr.onerror = rej;

    Object.keys(events).forEach(function (key) {
      xhr.addEventListener(key, events[key]);
    });

    if (xhr.upload) {
      Object.keys(uploadEvents).forEach(function (key) {
        xhr.upload.addEventListener(key, uploadEvents[key]);
      });
    }

    xhr.send(opts.body);
  });
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (response) {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response;
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

exports.default = function (response) {
  if (response.status === 400) {
    return response.json().then(function (modelErrors) {
      throw new _reduxForm.SubmissionError(modelErrors);
    });
  }

  return response;
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationField = __webpack_require__(95);

var _validationField2 = _interopRequireDefault(_validationField);

var _inputRadioButton = __webpack_require__(433);

var _inputRadioButton2 = _interopRequireDefault(_inputRadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable jsx-a11y/label-has-for */

var InputRadioButtonGroup = function InputRadioButtonGroup(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      options = _ref.options,
      groupClassName = _ref.groupClassName,
      props = _objectWithoutProperties(_ref, ['input', 'meta', 'options', 'groupClassName']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement(
      'div',
      { className: groupClassName },
      options.map(function (option) {
        return _react2.default.createElement(_inputRadioButton2.default, _extends({ key: option.id, input: input }, props, option));
      })
    )
  );
};

InputRadioButtonGroup.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any
  }).isRequired).isRequired,
  groupClassName: _propTypes2.default.string.isRequired
};

exports.default = InputRadioButtonGroup;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFluidTextarea = __webpack_require__(1502);

var _reactFluidTextarea2 = _interopRequireDefault(_reactFluidTextarea);

var _inputTextareaField = __webpack_require__(1135);

var _inputTextareaField2 = _interopRequireDefault(_inputTextareaField);

var _validationField = __webpack_require__(95);

var _validationField2 = _interopRequireDefault(_validationField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Textarea = function Textarea(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      props = _objectWithoutProperties(_ref, ['input', 'meta']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement(_reactFluidTextarea2.default, _extends({}, input, props, {
      className: _inputTextareaField2.default.textArea,
      onChange: function onChange(e) {
        return input.onChange(e.currentTarget.value);
      }
    }))
  );
};

Textarea.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired
};

exports.default = Textarea;

/***/ }),
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(785);
};

exports.default = function (_ref) {
  var username = _ref.username,
      password = _ref.password,
      rememberMe = _ref.rememberMe;

  var variables = {
    input: {
      username: username,
      password: password,
      rememberMe: rememberMe
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables, null, null, function (store) {
    var login = store.getRootField('login');

    if (login !== null) {
      var user = login.getLinkedRecord('user');
      var root = store.getRoot();

      root.setLinkedRecord(user, 'user');
    }
  });
};

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reduxForm = __webpack_require__(13);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _socialLogins = __webpack_require__(795);

var _socialLogins2 = _interopRequireDefault(_socialLogins);

var _socialLoginsErrorMessage = __webpack_require__(797);

var _socialLoginsErrorMessage2 = _interopRequireDefault(_socialLoginsErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  loginProviders: function loginProviders() {
    return __webpack_require__(794);
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.branch)(function (_ref) {
  var loginProviders = _ref.loginProviders;
  return loginProviders === null;
}, (0, _recompose.renderComponent)(_socialLoginsErrorMessage2.default)), (0, _reduxForm.reduxForm)({
  form: 'socialLogins'
}))(_socialLogins2.default);

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _logout = __webpack_require__(799);

var _logout2 = _interopRequireDefault(_logout);

var _logoutAccountMutation = __webpack_require__(800);

var _logoutAccountMutation2 = _interopRequireDefault(_logoutAccountMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit() {
    return _logoutAccountMutation2.default;
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'logout'
}))(_logout2.default);

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _found = __webpack_require__(40);

var withRouteValidation = function withRouteValidation(route) {
  return function (render) {
    if (route.error) {
      if (route.error._error) {
        throw new _found.HttpError('400', route.error._error);
      } else {
        throw new _found.HttpError('500');
      }
    }
    return render(route);
  };
}; /* eslint-disable no-underscore-dangle */
exports.default = withRouteValidation;

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _name = __webpack_require__(1096);

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Name = function Name(_ref) {
  var name = _ref.name,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { title: name, className: (0, _classnames2.default)(_name2.default.name, className) },
    name
  );
};

Name.defaultProps = {
  className: null
};

Name.propTypes = {
  name: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string
};

exports.default = Name;

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _commentBody = __webpack_require__(1103);

var _commentBody2 = _interopRequireDefault(_commentBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentBody = function CommentBody(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _commentBody2.default.commentBody },
    children
  );
};

CommentBody.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = CommentBody;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _likeCommentContainer = __webpack_require__(936);

var _likeCommentContainer2 = _interopRequireDefault(_likeCommentContainer);

var _dislikeCommentContainer = __webpack_require__(932);

var _dislikeCommentContainer2 = _interopRequireDefault(_dislikeCommentContainer);

var _audioRating = __webpack_require__(427);

var _audioRating2 = _interopRequireDefault(_audioRating);

var _flag = __webpack_require__(418);

var _flag2 = _interopRequireDefault(_flag);

var _commentControls = __webpack_require__(1104);

var _commentControls2 = _interopRequireDefault(_commentControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentControls = function CommentControls(_ref) {
  var comment = _ref.comment,
      commentId = _ref.commentId,
      likes = _ref.likes,
      dislikes = _ref.dislikes;
  return _react2.default.createElement(
    'div',
    { className: _commentControls2.default.commentControls },
    _react2.default.createElement(_audioRating2.default, {
      likes: likes,
      dislikes: dislikes,
      like: _react2.default.createElement(_likeCommentContainer2.default, { comment: comment }),
      dislike: _react2.default.createElement(_dislikeCommentContainer2.default, { comment: comment })
    }),
    _react2.default.createElement(_flag2.default, { modalId: 'flagComment', id: commentId, className: _commentControls2.default.flag })
  );
};

CommentControls.propTypes = {
  dislikes: _propTypes2.default.number.isRequired,
  likes: _propTypes2.default.number.isRequired,
  commentId: _propTypes2.default.number.isRequired,
  comment: _propTypes2.default.object.isRequired
};

exports.default = CommentControls;

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _commentHeader = __webpack_require__(854);

var _commentHeader2 = _interopRequireDefault(_commentHeader);

var _getTimeAgo = __webpack_require__(974);

var _getTimeAgo2 = _interopRequireDefault(_getTimeAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var dateAdded = _ref.dateAdded;
  return {
    dateAdded: (0, _getTimeAgo2.default)(new Date(dateAdded))
  };
};

exports.default = (0, _recompose.compose)((0, _recompose.withProps)(createProps))(_commentHeader2.default);

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _replyBox = __webpack_require__(855);

var _replyBox2 = _interopRequireDefault(_replyBox);

var _replyMutation = __webpack_require__(861);

var _replyMutation2 = _interopRequireDefault(_replyMutation);

var _replyButton = __webpack_require__(856);

var _replyButton2 = _interopRequireDefault(_replyButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  audio: function audio() {
    return __webpack_require__(853);
  }
};

var propTypes = {
  audio: _propTypes2.default.object.isRequired,
  rootComment: _propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired
  }),
  comment: _propTypes2.default.shape({
    commentId: _propTypes2.default.number.isRequired
  }).isRequired
};

var handlers = {
  onSubmit: function onSubmit(_ref) {
    var audio = _ref.audio,
        rootComment = _ref.rootComment,
        comment = _ref.comment;
    return function (input) {
      (0, _replyMutation2.default)(input, audio, rootComment, comment);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.setPropTypes)(propTypes), (0, _recompose.withStateHandlers)({
  showReplyBox: false
}, {
  reply: function reply() {
    return function () {
      return {
        showReplyBox: true
      };
    };
  },
  cancel: function cancel() {
    return function () {
      return {
        showReplyBox: false
      };
    };
  }
}), (0, _recompose.branch)(function (_ref2) {
  var showReplyBox = _ref2.showReplyBox;
  return !showReplyBox;
}, (0, _recompose.renderComponent)(_replyButton2.default)), (0, _recompose.withHandlers)(handlers), (0, _recompose.withProps)(function (_ref3) {
  var comment = _ref3.comment;
  return { form: 'replyBox_' + comment.commentId };
}), (0, _reduxForm.reduxForm)())(_replyBox2.default);

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(1111);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContent = function PageContent(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _pageContent2.default.pageContent },
    children
  );
};

PageContent.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = PageContent;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHtmlEmail = __webpack_require__(143);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharedEmail = function SharedEmail(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    _reactHtmlEmail.Email,
    { title: title },
    _react2.default.createElement(
      _reactHtmlEmail.Item,
      { align: 'center' },
      _react2.default.createElement(_reactHtmlEmail.Image, { width: 288, height: 50, alt: 'SoundVast', src: window.location.origin + '/images/logo/SoundVast_288x50.png' }),
      _react2.default.createElement('br', null)
    ),
    _react2.default.createElement(
      _reactHtmlEmail.Item,
      null,
      children
    )
  );
};

SharedEmail.propTypes = {
  children: _propTypes2.default.node.isRequired,
  title: _propTypes2.default.string.isRequired
};

exports.default = SharedEmail;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(864);
};

exports.default = function (email, subject, message) {
  var variables = {
    input: {
      email: email,
      subject: subject,
      message: message
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables);
};

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showFlaggedPopup = undefined;

var _actions = __webpack_require__(161);

var showFlaggedPopup = exports.showFlaggedPopup = function showFlaggedPopup() {
  return (0, _actions.showPopup)('We have recieved your flag and it is now pending review.');
};

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _modalButtonContainer = __webpack_require__(117);

var _modalButtonContainer2 = _interopRequireDefault(_modalButtonContainer);

var _flag = __webpack_require__(1113);

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flag = function Flag(_ref) {
  var modalId = _ref.modalId,
      id = _ref.id,
      className = _ref.className;
  return _react2.default.createElement(
    _modalButtonContainer2.default,
    {
      styleName: 'secondary',
      className: (0, _classnames2.default)(_flag2.default.flag, className),
      title: 'Report this',
      modalId: modalId,
      variables: { id: id }
    },
    'flag'
  );
};

Flag.defaultProps = {
  className: null
};

Flag.propTypes = {
  modalId: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string
};

exports.default = Flag;

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _flagModal = __webpack_require__(879);

var _flagModal2 = _interopRequireDefault(_flagModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _reduxForm.reduxForm)({
  form: 'flag'
}))(_flagModal2.default);

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = __webpack_require__(4);

var _found = __webpack_require__(40);

var _headerGenreLink = __webpack_require__(891);

var _headerGenreLink2 = _interopRequireDefault(_headerGenreLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var match = _ref.match;
  return {
    genresLocationInformation: {
      pathname: '/genres',
      state: {
        queries: _extends({}, match.location.query)
      }
    }
  };
};

exports.default = (0, _recompose.compose)(_found.withRouter, (0, _recompose.withProps)(createProps))(_headerGenreLink2.default);

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _linkButton = __webpack_require__(116);

var _linkButton2 = _interopRequireDefault(_linkButton);

var _header = __webpack_require__(127);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderHomeLink = function HeaderHomeLink(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _linkButton2.default,
    {
      to: '/',
      styleName: 'secondary',
      className: (0, _classnames2.default)(_header2.default.navButton, _header2.default.logoContainer),
      title: 'Home'
    },
    children,
    _react2.default.createElement(
      'span',
      { className: _header2.default.beta },
      'beta'
    )
  );
};

HeaderHomeLink.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = HeaderHomeLink;

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _linkButton = __webpack_require__(116);

var _linkButton2 = _interopRequireDefault(_linkButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderPrivacyLink = function HeaderPrivacyLink() {
  return _react2.default.createElement(
    _linkButton2.default,
    {
      styleName: 'secondary',
      to: '/privacyPolicy'
    },
    'Privacy'
  );
};

exports.default = HeaderPrivacyLink;

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _linkButton = __webpack_require__(116);

var _linkButton2 = _interopRequireDefault(_linkButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderTermsLink = function HeaderTermsLink() {
  return _react2.default.createElement(
    _linkButton2.default,
    {
      styleName: 'secondary',
      to: '/termsAndConditions'
    },
    'Terms/Conditions'
  );
};

exports.default = HeaderTermsLink;

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _linkButton = __webpack_require__(116);

var _linkButton2 = _interopRequireDefault(_linkButton);

var _header = __webpack_require__(127);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderUploadLink = function HeaderUploadLink(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    _linkButton2.default,
    {
      to: '/upload',
      styleName: 'secondary',
      className: _header2.default.navButton,
      title: title
    },
    children
  );
};

HeaderUploadLink.defaultProps = {
  title: null
};

HeaderUploadLink.propTypes = {
  children: _propTypes2.default.node.isRequired,
  title: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function () {
  return !JSON.parse("false");
}, _recompose.renderNothing))(HeaderUploadLink);

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _found = __webpack_require__(40);

var _search = __webpack_require__(893);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit(_ref) {
    var router = _ref.router,
        match = _ref.match;
    return function (_ref2) {
      var search = _ref2.search;

      var searchRoutes = ['radios/'];
      var isOnAudioRoute = searchRoutes.some(function (searchRoute) {
        return match.location.pathname.includes(searchRoute);
      });

      router.push({
        pathname: isOnAudioRoute ? match.location.pathname : '/',
        query: _extends({}, match.location.query, {
          searchQuery: search
        })
      });
    };
  }
};

exports.default = (0, _recompose.compose)(_found.withRouter, (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'search'
}))(_search2.default);

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CheckmarkIcon = function CheckmarkIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M15.36 1c-5.227 3.956-10.239 9.247-10.239 9.247L1.509 7 0 8.537C1.485 9.932 4.924 13.618 6.088 15 9.363 9.528 12.767 5.448 16 1.716L15.36 1z' })
  );
};

CheckmarkIcon.defaultProps = {
  className: null
};

CheckmarkIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = CheckmarkIcon;

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _audioRating = __webpack_require__(1122);

var _audioRating2 = _interopRequireDefault(_audioRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rating = function Rating(_ref) {
  var like = _ref.like,
      dislike = _ref.dislike,
      likes = _ref.likes,
      dislikes = _ref.dislikes;
  return _react2.default.createElement(
    'div',
    { className: _audioRating2.default.rating },
    _react2.default.createElement(
      'div',
      { className: _audioRating2.default.likeContainer },
      like,
      _react2.default.createElement(
        'span',
        null,
        likes
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _audioRating2.default.dislikeContainer },
      dislike,
      _react2.default.createElement(
        'span',
        null,
        dislikes
      )
    )
  );
};

Rating.propTypes = {
  like: _propTypes2.default.element.isRequired,
  dislike: _propTypes2.default.element.isRequired,
  likes: _propTypes2.default.number.isRequired,
  dislikes: _propTypes2.default.number.isRequired
};

exports.default = Rating;

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _dislike = __webpack_require__(896);

var _dislike2 = _interopRequireDefault(_dislike);

var _dislike3 = __webpack_require__(1123);

var _dislike4 = _interopRequireDefault(_dislike3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dislike = function Dislike(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { className: (0, _classnames2.default)(_dislike4.default.dislike, className), title: 'I dislike this', onClick: onClick },
    _react2.default.createElement(_dislike2.default, { className: _dislike4.default.dislikeIcon })
  );
};

Dislike.defaultProps = {
  className: null
};

Dislike.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = Dislike;

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _like = __webpack_require__(898);

var _like2 = _interopRequireDefault(_like);

var _like3 = __webpack_require__(1124);

var _like4 = _interopRequireDefault(_like3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Like = function Like(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { className: (0, _classnames2.default)(_like4.default.like, className), title: 'I like this', onClick: onClick },
    _react2.default.createElement(_like2.default, { className: _like4.default.likeIcon })
  );
};

Like.defaultProps = {
  className: null
};

Like.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = Like;

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(927);
};

exports.default = function (audio, liked) {
  var variables = {
    input: {
      id: audio.audioId,
      liked: liked
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables, null, null, function (store) {
    var rateAudio = store.getRootField('rateAudio');
    var rating = rateAudio.getLinkedRecord('rating');
    var audioRecord = rating.getLinkedRecord('audio');

    if (audioRecord === null) {
      var audioProxy = store.get(audio.id);
      var likes = audioProxy.getValue('likes');
      var dislikes = audioProxy.getValue('dislikes');

      if (liked) {
        audioProxy.setValue(likes - 1, 'likes');
      } else {
        audioProxy.setValue(dislikes - 1, 'dislikes');
      }
    }
  });
};

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(928);
};

exports.default = function (comment, liked) {
  var variables = {
    input: {
      id: comment.commentId,
      liked: liked
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables, null, null, function (store) {
    var rateComment = store.getRootField('rateComment');
    var rating = rateComment.getLinkedRecord('rating');
    var commentRecord = rating.getLinkedRecord('comment');

    if (commentRecord === null) {
      var commentProxy = store.get(comment.id);
      var likes = commentProxy.getValue('likes');
      var dislikes = commentProxy.getValue('dislikes');

      if (liked) {
        commentProxy.setValue(likes - 1, 'likes');
      } else {
        commentProxy.setValue(dislikes - 1, 'dislikes');
      }
    }
  });
};

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationField = __webpack_require__(95);

var _validationField2 = _interopRequireDefault(_validationField);

var _checkmark = __webpack_require__(426);

var _checkmark2 = _interopRequireDefault(_checkmark);

var _inputCheckboxField = __webpack_require__(1132);

var _inputCheckboxField2 = _interopRequireDefault(_inputCheckboxField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable jsx-a11y/label-has-for */

var InputCheckboxField = function InputCheckboxField(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      id = _ref.id,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ['input', 'meta', 'id', 'label']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement(
      'div',
      { className: _inputCheckboxField2.default.inputCheckboxField },
      _react2.default.createElement('input', _extends({}, input, {
        className: _inputCheckboxField2.default.input,
        type: 'checkbox',
        id: id,
        checked: input.value
      }, props)),
      _react2.default.createElement(
        'label',
        { className: _inputCheckboxField2.default.customCheckbox, htmlFor: id },
        _react2.default.createElement(_checkmark2.default, null)
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        )
      )
    )
  );
};

InputCheckboxField.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired,
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired
};

exports.default = InputCheckboxField;

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inputRadioButton = __webpack_require__(1133);

var _inputRadioButton2 = _interopRequireDefault(_inputRadioButton);

var _checkmark = __webpack_require__(426);

var _checkmark2 = _interopRequireDefault(_checkmark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable jsx-a11y/label-has-for */

var InputRadioButton = function InputRadioButton(_ref) {
  var input = _ref.input,
      id = _ref.id,
      customValue = _ref.customValue,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ['input', 'id', 'customValue', 'label']);

  return _react2.default.createElement(
    'div',
    { className: _inputRadioButton2.default.radioButtonContainer },
    _react2.default.createElement('input', _extends({}, input, {
      className: _inputRadioButton2.default.input,
      type: 'radio',
      value: customValue,
      checked: input.value === customValue,
      id: id
    }, props)),
    _react2.default.createElement(
      'label',
      { className: _inputRadioButton2.default.customRadioButton, htmlFor: id },
      _react2.default.createElement(_checkmark2.default, null)
    ),
    _react2.default.createElement(
      'label',
      { className: _inputRadioButton2.default.label, htmlFor: id },
      label
    )
  );
};

InputRadioButton.defaultProps = {
  customValue: null
};

InputRadioButton.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired,
  label: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  customValue: _propTypes2.default.any
};

exports.default = InputRadioButton;

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(956);

var _validationError2 = _interopRequireDefault(_validationError);

var _validationErrors = __webpack_require__(1137);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Errors = function Errors(_ref) {
  var errors = _ref.errors;
  return errors.length ? _react2.default.createElement(
    'div',
    { className: _validationErrors2.default.errors },
    errors.map(function (error) {
      return _react2.default.createElement(_validationError2.default, { key: error, error: error });
    })
  ) : null;
};

Errors.propTypes = {
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired
};

exports.default = Errors;

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _flexWrapFix = __webpack_require__(958);

var _flexWrapFix2 = _interopRequireDefault(_flexWrapFix);

var _gridCell = __webpack_require__(436);

var _gridCell2 = _interopRequireDefault(_gridCell);

var _grid = __webpack_require__(1139);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      cellClassName = _ref.cellClassName;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_grid2.default.grid, className) },
    _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        _gridCell2.default,
        { className: cellClassName },
        child
      );
    }),
    _react2.default.createElement(_flexWrapFix2.default, { key: 0, numberOfGhostElements: 6 })
  );
};

Grid.defaultProps = {
  className: null,
  cellClassName: null
};

Grid.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  cellClassName: _propTypes2.default.string
};

exports.default = Grid;

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _gridCell = __webpack_require__(1140);

var _gridCell2 = _interopRequireDefault(_gridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridCell = function GridCell(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_gridCell2.default.gridCell, className) },
    children
  );
};

GridCell.defaultProps = {
  className: null
};

GridCell.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

exports.default = GridCell;

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};

exports.default = Loader;

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _popups = __webpack_require__(965);

var _popups2 = _interopRequireDefault(_popups);

var _actions = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var popup = _ref.popup;
  return {
    popups: popup.popups
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  hidePopup: _actions.hidePopup
})(_popups2.default);

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var audiosToLoad = exports.audiosToLoad = 30;
var commentsToLoad = exports.commentsToLoad = 30;

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return value.replace(/^\s+$/, '').length > 0;
};

/***/ }),
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"socialLogins":"wwwroot-components-account-login-socialLogins-socialLogins__socialLogins--3pjuh","socialLoginProviderButton":"wwwroot-components-account-login-socialLogins-socialLogins__socialLoginProviderButton--3emg-"};

/***/ }),
/* 484 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"wwwroot-components-shared-button-button__button--1rbCN","primary":"wwwroot-components-shared-button-button__primary--2yils","secondary":"wwwroot-components-shared-button-button__secondary--1FAQ0"};

/***/ }),
/* 485 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"wwwroot-components-shared-modal-modal__modal--1txCg","close":"wwwroot-components-shared-modal-modal__close--2O_vs","title":"wwwroot-components-shared-modal-modal__title--2foDT"};

/***/ }),
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(10);

var _foundRelay = __webpack_require__(1168);

__webpack_require__(333);

__webpack_require__(332);

__webpack_require__(334);

__webpack_require__(331);

__webpack_require__(114);

__webpack_require__(335);

var _router = __webpack_require__(812);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(814);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(810);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = new _foundRelay.Resolver(_environment2.default);

console.log(__webpack_require__.i({"NODE_ENV":"development","ENABLE_UPLOAD":"false"}));

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_router2.default, { matchContext: { store: _store2.default }, resolver: resolver })
  );
};

exports.default = App;

/***/ }),
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _registerContainer = __webpack_require__(803);

var _registerContainer2 = _interopRequireDefault(_registerContainer);

var _loginContainer = __webpack_require__(787);

var _loginContainer2 = _interopRequireDefault(_loginContainer);

var _forgotPasswordContainer = __webpack_require__(783);

var _forgotPasswordContainer2 = _interopRequireDefault(_forgotPasswordContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Account = function Account(_ref) {
  var loginProviders = _ref.loginProviders;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_registerContainer2.default, { loginProviders: loginProviders }),
    _react2.default.createElement(_loginContainer2.default, { loginProviders: loginProviders }),
    _react2.default.createElement(_forgotPasswordContainer2.default, null)
  );
};

Account.propTypes = {
  loginProviders: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = Account;

/***/ }),
/* 779 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 083acc7ad9ff60eee906a568235e494e
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type confirmEmailContainerQueryResponse = {|
  +confirmEmail: ?boolean;
|};
*/

/*
query confirmEmailContainerQuery(
  $userId: String!
  $token: String!
) {
  confirmEmail(userId: $userId, token: $token)
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "userId",
      "type": "String!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "token",
      "type": "String!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "confirmEmailContainerQuery",
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "token",
        "variableName": "token",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String!"
      }],
      "name": "confirmEmail",
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "confirmEmailContainerQuery",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "userId",
      "type": "String!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "token",
      "type": "String!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "confirmEmailContainerQuery",
    "operation": "query",
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "token",
        "variableName": "token",
        "type": "String!"
      }, {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String!"
      }],
      "name": "confirmEmail",
      "storageKey": null
    }]
  },
  "text": "query confirmEmailContainerQuery(\n  $userId: String!\n  $token: String!\n) {\n  confirmEmail(userId: $userId, token: $token)\n}\n"
};

module.exports = batch;

/***/ }),
/* 780 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(9);

var _found = __webpack_require__(40);

var _actions = __webpack_require__(158);

var _withRouteValidation = __webpack_require__(408);

var _withRouteValidation2 = _interopRequireDefault(_withRouteValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
var query = function query() {
  return __webpack_require__(779);
};

var _render = function _render(route) {
  if (route.props) {
    route.props.context.store.dispatch((0, _actions.showEmailConfirmationPopup)());

    throw new _found.RedirectException('/');
  }

  return null;
};

var routeConfig = exports.routeConfig = {
  query: query,
  prepareVariables: function prepareVariables(_ref) {
    var userId = _ref.userId,
        token = _ref.token;
    return { userId: userId, token: token };
  },
  render: function render(route) {
    return (0, _withRouteValidation2.default)(route)(_render);
  }
};

/***/ }),
/* 781 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 4e533555ceb3e0136d94cd41c3b5bace
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type generateResetPasswordTokenMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    email: string;
  };
|};
export type generateResetPasswordTokenMutationResponse = {|
  +generateResetPasswordToken: ?{|
    +user: ?{|
      +id: ?string;
    |};
    +passwordResetToken: ?string;
  |};
|};
*/

/*
mutation generateResetPasswordTokenMutation(
  $input: GenerateResetPasswordTokenInput!
) {
  generateResetPasswordToken(input: $input) {
    user {
      id
    }
    passwordResetToken
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "GenerateResetPasswordTokenInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "generateResetPasswordTokenMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "GenerateResetPasswordTokenInput!"
      }],
      "concreteType": "GenerateResetPasswordTokenPayload",
      "name": "generateResetPasswordToken",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "passwordResetToken",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "generateResetPasswordTokenMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "GenerateResetPasswordTokenInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "generateResetPasswordTokenMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "GenerateResetPasswordTokenInput!"
      }],
      "concreteType": "GenerateResetPasswordTokenPayload",
      "name": "generateResetPasswordToken",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "passwordResetToken",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation generateResetPasswordTokenMutation(\n  $input: GenerateResetPasswordTokenInput!\n) {\n  generateResetPasswordToken(input: $input) {\n    user {\n      id\n    }\n    passwordResetToken\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 782 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _modalContainer = __webpack_require__(160);

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _formGroup = __webpack_require__(118);

var _formGroup2 = _interopRequireDefault(_formGroup);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForgotPassword = function ForgotPassword(_ref) {
  var handleSubmit = _ref.handleSubmit;
  return _react2.default.createElement(
    _modalContainer2.default,
    { title: 'Reset your password.', id: 'forgotPassword' },
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, action: '' },
      _react2.default.createElement(
        _formGroup2.default,
        null,
        _react2.default.createElement(_reduxForm.Field, { name: 'email', component: _inputTextField2.default, type: 'email', placeholder: 'Email' })
      ),
      _react2.default.createElement(
        _button2.default,
        null,
        'Reset'
      )
    )
  );
};

ForgotPassword.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired
};

exports.default = ForgotPassword;

/***/ }),
/* 783 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _reactRedux = __webpack_require__(10);

var _forgotPassword = __webpack_require__(782);

var _forgotPassword2 = _interopRequireDefault(_forgotPassword);

var _generateResetPasswordTokenMutation = __webpack_require__(784);

var _generateResetPasswordTokenMutation2 = _interopRequireDefault(_generateResetPasswordTokenMutation);

var _validation = __webpack_require__(115);

var _validation2 = _interopRequireDefault(_validation);

var _actions = __webpack_require__(158);

var _actions2 = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit(_ref) {
    var dispatch = _ref.dispatch;
    return function (input) {
      return (0, _generateResetPasswordTokenMutation2.default)(input, dispatch).then(function () {
        dispatch((0, _actions.showPasswordResetSentPopup)());
        dispatch((0, _actions2.hideModal)());
      }).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'forgotPassword',
  validate: _validation2.default
}));

var ForgotPasswordContainer = enhance(_forgotPassword2.default);

exports.default = ForgotPasswordContainer;

/***/ }),
/* 784 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(9);

var _reactHtmlEmail = __webpack_require__(143);

var _recomposeRelayModern = __webpack_require__(12);

var _resetPasswordEmail = __webpack_require__(866);

var _resetPasswordEmail2 = _interopRequireDefault(_resetPasswordEmail);

var _sendEmailMutation = __webpack_require__(416);

var _sendEmailMutation2 = _interopRequireDefault(_sendEmailMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
  return __webpack_require__(781);
};

exports.default = function (_ref) {
  var email = _ref.email;

  var variables = {
    input: {
      email: email
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables).then(function (_ref2) {
    var generateResetPasswordToken = _ref2.generateResetPasswordToken;

    var emailMessage = (0, _reactHtmlEmail.renderEmail)(_react2.default.createElement(_resetPasswordEmail2.default, {
      resetPasswordLink: window.location.origin + '/account/ResetPassword?token=' + generateResetPasswordToken.passwordResetToken + '\n          &userId=' + generateResetPasswordToken.user.id
    }));
    var subject = 'Reset your password';

    return (0, _sendEmailMutation2.default)(email, subject, emailMessage).catch(function () {
      return Promise.reject({
        _error: ['We could\'t send you an email for you to reset your password.']
      });
    });
  });
};

/***/ }),
/* 785 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash be514f043ad8add9f3427f1358ed272a
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type loginMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    username: string;
    password: string;
    rememberMe?: ?boolean;
  };
|};
export type loginMutationResponse = {|
  +login: ?{|
    +user: ?{|
      +id: ?string;
      +userName: string;
    |};
  |};
|};
*/

/*
mutation loginMutation(
  $input: LoginInput!
) {
  login(input: $input) {
    user {
      id
      userName
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "LoginInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LoginInput!"
      }],
      "concreteType": "LoginPayload",
      "name": "login",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "userName",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "loginMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "LoginInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "loginMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LoginInput!"
      }],
      "concreteType": "LoginPayload",
      "name": "login",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "userName",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation loginMutation(\n  $input: LoginInput!\n) {\n  login(input: $input) {\n    user {\n      id\n      userName\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 786 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(13);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _login = __webpack_require__(1089);

var _login2 = _interopRequireDefault(_login);

var _modalButtonContainer = __webpack_require__(117);

var _modalButtonContainer2 = _interopRequireDefault(_modalButtonContainer);

var _formGroup = __webpack_require__(118);

var _formGroup2 = _interopRequireDefault(_formGroup);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

var _inputCheckboxField = __webpack_require__(432);

var _inputCheckboxField2 = _interopRequireDefault(_inputCheckboxField);

var _modalContainer = __webpack_require__(160);

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _socialLoginsContainer = __webpack_require__(406);

var _socialLoginsContainer2 = _interopRequireDefault(_socialLoginsContainer);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login(_ref) {
  var handleSubmit = _ref.handleSubmit,
      loginProviders = _ref.loginProviders;
  return _react2.default.createElement(
    _modalContainer2.default,
    { title: 'Login.', id: 'login' },
    _react2.default.createElement(_socialLoginsContainer2.default, { loginProviders: loginProviders }),
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, action: '' },
      _react2.default.createElement(
        _formGroup2.default,
        null,
        _react2.default.createElement(_reduxForm.Field, { name: 'username', component: _inputTextField2.default, placeholder: 'Username' }),
        _react2.default.createElement(_reduxForm.Field, { name: 'password', component: _inputTextField2.default, type: 'password', placeholder: 'Password' })
      ),
      _react2.default.createElement(_reduxForm.Field, {
        name: 'rememberMe',
        id: 'rememberMe',
        component: _inputCheckboxField2.default,
        type: 'checkbox',
        label: 'Remember login?'
      }),
      _react2.default.createElement(
        'div',
        { className: _login2.default.forgotPasswordLink },
        _react2.default.createElement(
          _modalButtonContainer2.default,
          { modalId: 'forgotPassword' },
          'Forgotten your password?'
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        'Or ',
        _react2.default.createElement(
          _modalButtonContainer2.default,
          { modalId: 'register' },
          'register'
        ),
        ' if you don\'t have an account.'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _button2.default,
        null,
        'Login'
      )
    )
  );
};

Login.propTypes = {
  loginProviders: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  handleSubmit: _propTypes2.default.func.isRequired
};

exports.default = Login;

/***/ }),
/* 787 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _reactRedux = __webpack_require__(10);

var _login = __webpack_require__(786);

var _login2 = _interopRequireDefault(_login);

var _validation = __webpack_require__(115);

var _validation2 = _interopRequireDefault(_validation);

var _loginMutation = __webpack_require__(405);

var _loginMutation2 = _interopRequireDefault(_loginMutation);

var _actions = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit(_ref) {
    var dispatch = _ref.dispatch;
    return function (input) {
      return (0, _loginMutation2.default)(input, dispatch).then(function () {
        return dispatch((0, _actions.hideModal)());
      }).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'login',
  validate: _validation2.default,
  initialValues: {
    rememberMe: true
  }
}))(_login2.default);

/***/ }),
/* 788 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 7058a402cc1005b70e48865c98bb5d60
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type socialLoginCallbackContainerQueryResponse = {|
  +externalLoginCallback: ?{|
    +loginProvider: ?string;
    +userName: ?string;
    +user: ?{|
      +userName: string;
    |};
  |};
|};
*/

/*
query socialLoginCallbackContainerQuery {
  externalLoginCallback {
    loginProvider
    userName
    user {
      userName
      id
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "socialLoginCallbackContainerQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ExternalLoginCallbackPayload",
      "name": "externalLoginCallback",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "loginProvider",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "userName",
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "userName",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "socialLoginCallbackContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "socialLoginCallbackContainerQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ExternalLoginCallbackPayload",
      "name": "externalLoginCallback",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "loginProvider",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "userName",
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "userName",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "query socialLoginCallbackContainerQuery {\n  externalLoginCallback {\n    loginProvider\n    userName\n    user {\n      userName\n      id\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 789 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash ca3dc535f7f212f5ddb8f702a3359fed
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type socialLoginConfirmationMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    userName: string;
  };
|};
export type socialLoginConfirmationMutationResponse = {|
  +externalLoginConfirmation: ?{|
    +clientMutationId: ?string;
  |};
|};
*/

/*
mutation socialLoginConfirmationMutation(
  $input: ExternalLoginConfirmationInput!
) {
  externalLoginConfirmation(input: $input) {
    clientMutationId
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "ExternalLoginConfirmationInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "socialLoginConfirmationMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ExternalLoginConfirmationInput!"
      }],
      "concreteType": "ExternalLoginConfirmationPayload",
      "name": "externalLoginConfirmation",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "socialLoginConfirmationMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "ExternalLoginConfirmationInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "socialLoginConfirmationMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ExternalLoginConfirmationInput!"
      }],
      "concreteType": "ExternalLoginConfirmationPayload",
      "name": "externalLoginConfirmation",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation socialLoginConfirmationMutation(\n  $input: ExternalLoginConfirmationInput!\n) {\n  externalLoginConfirmation(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(9);

var _found = __webpack_require__(40);

var _withRouteValidation = __webpack_require__(408);

var _withRouteValidation2 = _interopRequireDefault(_withRouteValidation);

var _socialLoginConfirmationContainer = __webpack_require__(792);

var _socialLoginConfirmationContainer2 = _interopRequireDefault(_socialLoginConfirmationContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  return __webpack_require__(788);
}; /* eslint-disable import/prefer-default-export */


var _render = function _render(route) {
  if (route.props) {
    // User already has an account that is logged in
    if (route.props.externalLoginCallback.user) {
      throw new _found.RedirectException({
        pathname: route.props.params.returnUrl,
        state: { loggedInUserName: route.props.externalLoginCallback.user.userName }
      });
    } else {
      // associate the users account
      return _react2.default.createElement(_socialLoginConfirmationContainer2.default, {
        userName: route.props.externalLoginCallback.userName,
        loginProvider: route.props.externalLoginCallback.loginProvider,
        returnUrl: route.props.params.returnUrl
      });
    }
  }

  return null;
};

var routeConfig = exports.routeConfig = {
  query: query,
  prepareVariables: function prepareVariables(_ref) {
    var returnUrl = _ref.returnUrl;
    return { returnUrl: returnUrl };
  },
  render: function render(route) {
    if (route.match.params.remoteError) {
      // eslint-disable-next-line no-param-reassign
      route.error = {
        _error: ['An error has occured with the social login.']
      };
    }

    return (0, _withRouteValidation2.default)(route)(_render);
  }
};

/***/ }),
/* 791 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/forbid-prop-types */

var SocialLoginConfirmation = function SocialLoginConfirmation(_ref) {
  var handleSubmit = _ref.handleSubmit,
      loginProvider = _ref.loginProvider;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Associate your ',
      loginProvider,
      ' account.'
    ),
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, action: '', method: 'post' },
      _react2.default.createElement(
        'h4',
        null,
        'Association Form'
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'p',
        { className: 'text-info' },
        'You\'ve successfully authenticated with ',
        loginProvider,
        '. Please enter a user name for this site below and click the Register button to finish logging in.'
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement(_reduxForm.Field, { name: 'userName', component: _inputTextField2.default, type: 'userName', placeholder: 'User name' })
      ),
      _react2.default.createElement(
        'button',
        null,
        'Register'
      )
    )
  );
};

SocialLoginConfirmation.propTypes = {
  loginProvider: _propTypes2.default.string.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired
};

exports.default = SocialLoginConfirmation;

/***/ }),
/* 792 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _socialLoginConfirmation = __webpack_require__(791);

var _socialLoginConfirmation2 = _interopRequireDefault(_socialLoginConfirmation);

var _validation = __webpack_require__(115);

var _validation2 = _interopRequireDefault(_validation);

var _socialLoginConfirmationMutation = __webpack_require__(793);

var _socialLoginConfirmationMutation2 = _interopRequireDefault(_socialLoginConfirmationMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var userName = _ref.userName,
      returnUrl = _ref.returnUrl;
  return {
    initialValues: {
      userName: userName,
      returnUrl: returnUrl
    }
  };
};

var handlers = {
  onSubmit: function onSubmit() {
    return function (input) {
      return (0, _socialLoginConfirmationMutation2.default)(input).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withProps)(createProps), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'socialLoginConfirmation',
  validate: _validation2.default
}))(_socialLoginConfirmation2.default);

/***/ }),
/* 793 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(789);
};

exports.default = function (_ref) {
  var userName = _ref.userName,
      returnUrl = _ref.returnUrl;

  var variables = {
    input: {
      userName: userName
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables).then(function () {
    location.href = returnUrl;
  });
};

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type socialLoginsContainer_loginProviders = $ReadOnlyArray<{|
  +name: string;
  +displayName: string;
|}>;
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "socialLoginsContainer_loginProviders",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "name",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "displayName",
    "storageKey": null
  }],
  "type": "LoginProvider"
};

module.exports = fragment;

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _socialLogins = __webpack_require__(483);

var _socialLogins2 = _interopRequireDefault(_socialLogins);

var _modal = __webpack_require__(485);

var _socialLoginsButton = __webpack_require__(796);

var _socialLoginsButton2 = _interopRequireDefault(_socialLoginsButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialLogins = function SocialLogins(_ref) {
  var loginProviders = _ref.loginProviders;
  return _react2.default.createElement(
    'form',
    { action: 'account/externalLogin', method: 'post' },
    _react2.default.createElement('input', { type: 'hidden', name: 'returnUrl', value: window.location.pathname }),
    _react2.default.createElement(
      'div',
      { className: _socialLogins2.default.socialLogins },
      loginProviders.map(function (loginProvider) {
        return _react2.default.createElement(_socialLoginsButton2.default, _extends({
          key: loginProvider.name
        }, loginProvider));
      })
    ),
    _react2.default.createElement('hr', { className: _modal.hr })
  );
};

SocialLogins.defaultProps = {
  loginProviders: []
};

SocialLogins.propTypes = {
  loginProviders: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    displayName: _propTypes2.default.string.isRequired
  }).isRequired).isRequired
};

exports.default = SocialLogins;

/***/ }),
/* 796 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _socialLogins = __webpack_require__(483);

var _socialLogins2 = _interopRequireDefault(_socialLogins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialLoginsButton = function SocialLoginsButton(_ref) {
  var name = _ref.name,
      displayName = _ref.displayName;
  return _react2.default.createElement(
    'button',
    {
      className: _socialLogins2.default.socialLoginProviderButton,
      value: name,
      name: 'provider',
      title: 'Log in using your ' + displayName + ' account'
    },
    _react2.default.createElement('img', { src: '/images/loginProviders/' + name + '_40.png', alt: displayName })
  );
};

SocialLoginsButton.propTypes = {
  name: _propTypes2.default.string.isRequired,
  displayName: _propTypes2.default.string.isRequired
};

exports.default = SocialLoginsButton;

/***/ }),
/* 797 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialLoginsErrorMessage = function SocialLoginsErrorMessage() {
  return _react2.default.createElement(
    'div',
    null,
    'There are no external authentication services configured. Try refreshing the page. If the problem persists, please contact us.'
  );
};

exports.default = SocialLoginsErrorMessage;

/***/ }),
/* 798 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 732a381b72f1f84dafc4e05d63aeffca
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type logoutAccountMutationVariables = {| |};
export type logoutAccountMutationResponse = {|
  +logout: ?{|
    +clientMutationId: ?string;
  |};
|};
*/

/*
mutation logoutAccountMutation {
  logout {
    clientMutationId
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "logoutAccountMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "LogoutPayload",
      "name": "logout",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "logoutAccountMutation",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "logoutAccountMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "LogoutPayload",
      "name": "logout",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation logoutAccountMutation {\n  logout {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 799 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logout = function Logout(_ref) {
  var handleSubmit = _ref.handleSubmit;
  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit, action: '' },
    _react2.default.createElement(
      _button2.default,
      { styleName: 'secondary' },
      'Logout'
    )
  );
};

Logout.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired
};

exports.default = Logout;

/***/ }),
/* 800 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(798);
};

exports.default = function () {
  return (0, _recomposeRelayModern.createMutation)(mutation, null, null, null, function (store) {
    var root = store.getRoot();
    var user = root.getLinkedRecord('user');

    user.setValue(null, 'userName');
  });
};

/***/ }),
/* 801 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 3f1f6167e14dba7a226baa31b9823246
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type registerMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    username: string;
    email: string;
    password: string;
  };
|};
export type registerMutationResponse = {|
  +register: ?{|
    +user: ?{|
      +id: ?string;
    |};
    +emailConfirmationToken: ?string;
  |};
|};
*/

/*
mutation registerMutation(
  $input: RegisterInput!
) {
  register(input: $input) {
    user {
      id
    }
    emailConfirmationToken
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "RegisterInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "registerMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RegisterInput!"
      }],
      "concreteType": "RegisterPayload",
      "name": "register",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "emailConfirmationToken",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "registerMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "RegisterInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "registerMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RegisterInput!"
      }],
      "concreteType": "RegisterPayload",
      "name": "register",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ApplicationUser",
        "name": "user",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "emailConfirmationToken",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation registerMutation(\n  $input: RegisterInput!\n) {\n  register(input: $input) {\n    user {\n      id\n    }\n    emailConfirmationToken\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 802 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(13);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _register = __webpack_require__(1090);

var _register2 = _interopRequireDefault(_register);

var _formGroup = __webpack_require__(118);

var _formGroup2 = _interopRequireDefault(_formGroup);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

var _modalButtonContainer = __webpack_require__(117);

var _modalButtonContainer2 = _interopRequireDefault(_modalButtonContainer);

var _modalContainer = __webpack_require__(160);

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _socialLoginsContainer = __webpack_require__(406);

var _socialLoginsContainer2 = _interopRequireDefault(_socialLoginsContainer);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Register = function Register(_ref) {
  var handleSubmit = _ref.handleSubmit,
      loginProviders = _ref.loginProviders;
  return _react2.default.createElement(
    _modalContainer2.default,
    { title: 'Register.', id: 'register' },
    _react2.default.createElement(_socialLoginsContainer2.default, { loginProviders: loginProviders }),
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, action: '' },
      _react2.default.createElement(
        _formGroup2.default,
        null,
        _react2.default.createElement(_reduxForm.Field, { name: 'username', component: _inputTextField2.default, placeholder: 'Username' }),
        _react2.default.createElement(_reduxForm.Field, { name: 'email', component: _inputTextField2.default, type: 'email', placeholder: 'Email' }),
        _react2.default.createElement(_reduxForm.Field, { name: 'password', component: _inputTextField2.default, type: 'password', placeholder: 'Password' }),
        _react2.default.createElement(_reduxForm.Field, { name: 'confirmPassword', component: _inputTextField2.default, type: 'password', placeholder: 'Confirm password' })
      ),
      _react2.default.createElement(
        'div',
        { className: _register2.default.loginLink },
        'Or ',
        _react2.default.createElement(
          _modalButtonContainer2.default,
          { modalId: 'login' },
          'login'
        ),
        ' if you already have an account.'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _button2.default,
        null,
        'Register'
      )
    )
  );
};

Register.propTypes = {
  loginProviders: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  handleSubmit: _propTypes2.default.func.isRequired
};

exports.default = Register;

/***/ }),
/* 803 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _register = __webpack_require__(802);

var _register2 = _interopRequireDefault(_register);

var _validation = __webpack_require__(115);

var _validation2 = _interopRequireDefault(_validation);

var _registerMutation = __webpack_require__(804);

var _registerMutation2 = _interopRequireDefault(_registerMutation);

var _actions = __webpack_require__(158);

var _actions2 = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit(_ref) {
    var dispatch = _ref.dispatch;
    return function (input) {
      return (0, _registerMutation2.default)(input, dispatch).then(function () {
        dispatch((0, _actions.showRegisteredEmailSentPopup)());
        dispatch((0, _actions2.hideModal)());
      }).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'register',
  validate: _validation2.default
}))(_register2.default);

/***/ }),
/* 804 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(9);

var _reactHtmlEmail = __webpack_require__(143);

var _recomposeRelayModern = __webpack_require__(12);

var _confirmEmail = __webpack_require__(865);

var _confirmEmail2 = _interopRequireDefault(_confirmEmail);

var _sendEmailMutation = __webpack_require__(416);

var _sendEmailMutation2 = _interopRequireDefault(_sendEmailMutation);

var _loginMutation = __webpack_require__(405);

var _loginMutation2 = _interopRequireDefault(_loginMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
  return __webpack_require__(801);
};

exports.default = function (_ref) {
  var username = _ref.username,
      password = _ref.password,
      email = _ref.email;

  var variables = {
    input: {
      username: username,
      password: password,
      email: email
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables).then(function (_ref2) {
    var register = _ref2.register;

    var emailMessage = (0, _reactHtmlEmail.renderEmail)(_react2.default.createElement(_confirmEmail2.default, { confirmEmailLink: window.location.origin + '/account/confirmEmail/' + register.user.id + '/' + register.emailConfirmationToken }));
    var subject = 'Confirm your email';

    var loginPromise = (0, _loginMutation2.default)({ username: username, password: password, rememberMe: true });
    var sendEmailPromise = (0, _sendEmailMutation2.default)(email, subject, emailMessage).catch(function () {
      return Promise.reject({
        _error: ['We could\'t send you an email to confirm your account registration.']
      });
    });

    return Promise.all([loginPromise, sendEmailPromise]);
  });
};

/***/ }),
/* 805 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash fe97b18101f5080bae63881104a05f53
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type resetPasswordMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    password: string;
    userId: string;
    token: string;
  };
|};
export type resetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +clientMutationId: ?string;
  |};
|};
*/

/*
mutation resetPasswordMutation(
  $input: ResetPasswordInput!
) {
  resetPassword(input: $input) {
    clientMutationId
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "ResetPasswordInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "resetPasswordMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ResetPasswordInput!"
      }],
      "concreteType": "ResetPasswordPayload",
      "name": "resetPassword",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "resetPasswordMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "ResetPasswordInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "resetPasswordMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ResetPasswordInput!"
      }],
      "concreteType": "ResetPasswordPayload",
      "name": "resetPassword",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation resetPasswordMutation(\n  $input: ResetPasswordInput!\n) {\n  resetPassword(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 806 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(13);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formGroup = __webpack_require__(118);

var _formGroup2 = _interopRequireDefault(_formGroup);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResetPassword = function ResetPassword(_ref) {
  var handleSubmit = _ref.handleSubmit;
  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit, action: '' },
    _react2.default.createElement(
      _formGroup2.default,
      null,
      _react2.default.createElement(_reduxForm.Field, { name: 'password', component: _inputTextField2.default, type: 'password', placeholder: 'Password' }),
      _react2.default.createElement(_reduxForm.Field, { name: 'confirmPassword', component: _inputTextField2.default, type: 'password', placeholder: 'Confirm password' })
    ),
    _react2.default.createElement(
      'button',
      null,
      'Reset Password'
    )
  );
};

ResetPassword.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired
};

exports.default = ResetPassword;

/***/ }),
/* 807 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _reactRedux = __webpack_require__(10);

var _resetPassword = __webpack_require__(806);

var _resetPassword2 = _interopRequireDefault(_resetPassword);

var _resetPasswordMutation = __webpack_require__(808);

var _resetPasswordMutation2 = _interopRequireDefault(_resetPasswordMutation);

var _validation = __webpack_require__(115);

var _validation2 = _interopRequireDefault(_validation);

var _actions = __webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onSubmit: function onSubmit(_ref) {
    var dispatch = _ref.dispatch;
    return function (input) {
      return (0, _resetPasswordMutation2.default)(input, dispatch).then(function () {
        dispatch((0, _actions.showPasswordResetPopup)());
      }).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

var createProps = function createProps(_ref2) {
  var userId = _ref2.userId,
      token = _ref2.token;
  return {
    initialValues: {
      userId: userId,
      token: token
    }
  };
};

var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _recompose.withHandlers)(handlers), (0, _recompose.withProps)(createProps), (0, _reduxForm.reduxForm)({
  form: 'resetPassword',
  validate: _validation2.default
}));

var ResetPasswordContainer = enhance(_resetPassword2.default);

var render = function render(_ref3) {
  var match = _ref3.match;
  return _react2.default.createElement(ResetPasswordContainer, { userId: match.location.query.userId, token: match.location.query.token });
};

render.propTypes = {
  match: _propTypes2.default.shape({
    location: _propTypes2.default.shape({
      query: _propTypes2.default.shape({
        userId: _propTypes2.default.string.isRequired,
        token: _propTypes2.default.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

var routeConfig = exports.routeConfig = {
  Component: ResetPasswordContainer,
  render: render
};

exports.default = ResetPasswordContainer;

/***/ }),
/* 808 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(805);
};

exports.default = function (_ref) {
  var password = _ref.password,
      userId = _ref.userId,
      token = _ref.token;

  var variables = {
    input: {
      password: password,
      userId: userId,
      token: token
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables);
};

/***/ }),
/* 809 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(333);

__webpack_require__(332);

__webpack_require__(334);

__webpack_require__(331);

__webpack_require__(114);

__webpack_require__(335);

var _app = __webpack_require__(643);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),
/* 810 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(90);

var _recomposeRelayModern = __webpack_require__(12);

var network = _relayRuntime.Network.create(function (operation, variables) {
  return fetch('/graphql', {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables: JSON.stringify(variables)
    })
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    // https://github.com/facebook/relay/issues/1816
    if (json.errors) {
      return Promise.reject(json.errors);
    }

    return Promise.resolve(json);
  });
});

var source = new _relayRuntime.RecordSource();
var store = new _relayRuntime.Store(source);
var environment = new _relayRuntime.Environment({
  network: network,
  store: store
});

(0, _recomposeRelayModern.setEnviroment)(environment);

exports.default = environment;

/***/ }),
/* 811 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(502);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(495);

var _Route2 = _interopRequireDefault(_Route);

var _errorPageContainer = __webpack_require__(870);

var _uploadContainer = __webpack_require__(985);

var _socialLoginCallbackContainer = __webpack_require__(790);

var _confirmEmailContainer = __webpack_require__(780);

var _resetPasswordContainer = __webpack_require__(807);

var _radiosContainer = __webpack_require__(926);

var _primaryLayoutContainer = __webpack_require__(911);

var _genresContainer = __webpack_require__(887);

var _termsAndConditionsContainer = __webpack_require__(918);

var _privacyPolicyContainer = __webpack_require__(916);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _makeRouteConfig2.default)(_react2.default.createElement(
  _Route2.default,
  _extends({ path: '/' }, _primaryLayoutContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _radiosContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _extends({ path: 'radios' }, _radiosContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'upload' }, _uploadContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'genres' }, _genresContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'error/:status' }, _errorPageContainer.routeConfig)),
  _react2.default.createElement(
    _Route2.default,
    { path: 'account' },
    _react2.default.createElement(_Route2.default, _extends({ path: 'externalLoginCallback/:returnUrl' }, _socialLoginCallbackContainer.routeConfig)),
    _react2.default.createElement(_Route2.default, _extends({ path: 'resetPassword' }, _resetPasswordContainer.routeConfig)),
    _react2.default.createElement(_Route2.default, _extends({ path: 'confirmEmail/:userId/:token' }, _confirmEmailContainer.routeConfig))
  ),
  _react2.default.createElement(_Route2.default, _extends({ path: 'termsAndConditions' }, _termsAndConditionsContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'privacyPolicy' }, _privacyPolicyContainer.routeConfig))
));

/***/ }),
/* 812 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(272);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(275);

var _createRender2 = _interopRequireDefault(_createRender);

var _validationErrors = __webpack_require__(434);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderError = function RenderError(_ref) {
  var error = _ref.error,
      router = _ref.router;

  if (error.data) {
    return _react2.default.createElement(_validationErrors2.default, { errors: error.data });
  }

  router.replace('/error/' + error.status);

  return null;
};

RenderError.propTypes = {
  error: _propTypes2.default.shape({
    status: _propTypes2.default.number.isRequired
  }).isRequired,
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _createConnectedRouter2.default)({
  render: (0, _createRender2.default)({
    renderError: RenderError
  })
});

/***/ }),
/* 813 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayer = __webpack_require__(60);

var _reduceReducers = __webpack_require__(1533);

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _updatePlayCountMutation = __webpack_require__(836);

var _updatePlayCountMutation2 = _interopRequireDefault(_updatePlayCountMutation);

var _normalizeBoolean = __webpack_require__(119);

var _normalizeBoolean2 = _interopRequireDefault(_normalizeBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduceReducers2.default)(_reactJplayer.reducer, function (state, action) {
  switch (action.type) {
    case _reactJplayer.constants.actionNames.PLAY:
      {
        var hasPlayed = (0, _normalizeBoolean2.default)(localStorage.getItem(state[action.id].media.id));

        if (!hasPlayed) {
          (0, _updatePlayCountMutation2.default)(state[action.id].media.id);
        }

        localStorage.setItem(state[action.id].media.id, true);

        return state;
      }
    default:
      return state;
  }
});

/***/ }),
/* 814 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(70);

var _reduxThunk = __webpack_require__(1603);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactJplaylist = __webpack_require__(155);

var _reduxForm = __webpack_require__(13);

var _foundReducer = __webpack_require__(277);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(128);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(266);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(486);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(487);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(274);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(270);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(811);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(961);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(966);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(983);

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(829);

var _reducer8 = _interopRequireDefault(_reducer7);

var _jPlayersReducer = __webpack_require__(813);

var _jPlayersReducer2 = _interopRequireDefault(_jPlayersReducer);

var _normalizeBoolean = __webpack_require__(119);

var _normalizeBoolean2 = _interopRequireDefault(_normalizeBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _createHistoryEnhancer2.default)({
  protocol: new _BrowserProtocol2.default(),
  middlewares: [_queryMiddleware2.default]
});

var matcherEnhancer = (0, _createMatchEnhancer2.default)(new _Matcher2.default(_routeConfig2.default));

var middleWare = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), historyEnhancer, matcherEnhancer);

var reducers = (0, _redux.combineReducers)({
  found: _foundReducer2.default,
  jPlayers: _jPlayersReducer2.default,
  jPlaylists: _reactJplaylist.reducer,
  modal: _reducer2.default,
  form: _reduxForm.reducer,
  popup: _reducer4.default,
  upload: _reducer6.default,
  audio: _reducer8.default
});

var showingSideBar = (0, _normalizeBoolean2.default)(localStorage.getItem('showingSideBar'));

var store = (0, _redux.createStore)(reducers, {
  audio: {
    showingSideBar: showingSideBar === null ? true : showingSideBar
  }
}, middleWare);

store.dispatch(_Actions2.default.init());

exports.default = store;

/***/ }),
/* 815 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type sideBarContainer_audios = $ReadOnlyArray<{|
  +audioId: number;
  +name: string;
|}>;
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "sideBarContainer_audios",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "audioId",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "name",
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "commentBoxContainer_audio",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "commentsContainer_audio",
    "args": null
  }],
  "type": "Audio"
};

module.exports = fragment;

/***/ }),
/* 816 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 7befd47f2ec5aa5c913ff16680500839
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updatePlayCountMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    audioId: number;
  };
|};
export type updatePlayCountMutationResponse = {|
  +updatePlayCount: ?{|
    +audio: {|
      +playCount: number;
    |};
  |};
|};
*/

/*
mutation updatePlayCountMutation(
  $input: UpdatePlayCountInput!
) {
  updatePlayCount(input: $input) {
    audio {
      __typename
      playCount
      id
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "UpdatePlayCountInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "updatePlayCountMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdatePlayCountInput!"
      }],
      "concreteType": "UpdatePlayCountPayload",
      "name": "updatePlayCount",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": null,
        "name": "audio",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "playCount",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "updatePlayCountMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "UpdatePlayCountInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "updatePlayCountMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdatePlayCountInput!"
      }],
      "concreteType": "UpdatePlayCountPayload",
      "name": "updatePlayCount",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": null,
        "name": "audio",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "__typename",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "playCount",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation updatePlayCountMutation(\n  $input: UpdatePlayCountInput!\n) {\n  updatePlayCount(input: $input) {\n    audio {\n      __typename\n      playCount\n      id\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 817 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var showSideBar = exports.showSideBar = function showSideBar() {
  return {
    type: 'SHOW_SIDEBAR'
  };
};

var hideSideBar = exports.hideSideBar = function hideSideBar() {
  return {
    type: 'HIDE_SIDEBAR'
  };
};

/***/ }),
/* 818 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _audiosHeader = __webpack_require__(1091);

var _audiosHeader2 = _interopRequireDefault(_audiosHeader);

var _filterTextContainer = __webpack_require__(823);

var _filterTextContainer2 = _interopRequireDefault(_filterTextContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudiosHeader = function AudiosHeader(_ref) {
  var audioTypeText = _ref.audioTypeText;
  return _react2.default.createElement(
    'div',
    { className: _audiosHeader2.default.audiosHeader },
    _react2.default.createElement(_filterTextContainer2.default, { audioTypeText: audioTypeText })
  );
};

AudiosHeader.propTypes = {
  audioTypeText: _propTypes2.default.string.isRequired
};

exports.default = AudiosHeader;

/***/ }),
/* 819 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _audiosSubHeader = __webpack_require__(1092);

var _audiosSubHeader2 = _interopRequireDefault(_audiosSubHeader);

var _filtersContainer = __webpack_require__(825);

var _filtersContainer2 = _interopRequireDefault(_filtersContainer);

var _toggleSideBarContainer = __webpack_require__(835);

var _toggleSideBarContainer2 = _interopRequireDefault(_toggleSideBarContainer);

var _displayType = __webpack_require__(231);

var _displayType2 = _interopRequireDefault(_displayType);

var _dropdownContainer = __webpack_require__(232);

var _dropdownContainer2 = _interopRequireDefault(_dropdownContainer);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _sort = __webpack_require__(904);

var _sort2 = _interopRequireDefault(_sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */
var AudiosSubHeader = function AudiosSubHeader() {
  return _react2.default.createElement(
    _displayType2.default,
    null,
    function (displayType) {
      return _react2.default.createElement(
        'div',
        { className: _audiosSubHeader2.default.audiosSubHeader },
        _react2.default.createElement(
          'div',
          { className: _audiosSubHeader2.default.middleColumn },
          !displayType.isMobile && _react2.default.createElement(
            'ul',
            { className: _audiosSubHeader2.default.filterToggles },
            _react2.default.Children.toArray(_react2.default.createElement(_filtersContainer2.default, null)).map(function (filter, i) {
              return _react2.default.createElement(
                'li',
                { key: i },
                filter
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _audiosSubHeader2.default.rightColumn },
          _react2.default.createElement(
            'div',
            { className: _audiosSubHeader2.default.subHeaderIcons },
            displayType.isMobile && _react2.default.createElement(
              _dropdownContainer2.default,
              {
                titleCallback: function titleCallback(onClick) {
                  return _react2.default.createElement(
                    _button2.default,
                    { styleName: 'secondary', onClick: onClick },
                    _react2.default.createElement(_sort2.default, null)
                  );
                }
              },
              _react2.default.createElement(_filtersContainer2.default, { styleName: 'secondary' })
            ),
            _react2.default.createElement(_toggleSideBarContainer2.default, { className: _audiosSubHeader2.default.toggleSideBar })
          )
        )
      );
    }
  );
};

exports.default = AudiosSubHeader;

/***/ }),
/* 820 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSlider = __webpack_require__(1486);

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _dateFilter = __webpack_require__(1094);

var _dateFilter2 = _interopRequireDefault(_dateFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: change max to first added
var DateFilter = function DateFilter(_ref) {
  var inputOnChange = _ref.inputOnChange,
      inputOnBlur = _ref.inputOnBlur,
      daysAgo = _ref.daysAgo,
      sliderOnChange = _ref.sliderOnChange,
      sliderOnAfterChange = _ref.sliderOnAfterChange;
  return _react2.default.createElement(
    'span',
    { className: _dateFilter2.default.dateFilter },
    _react2.default.createElement('input', {
      name: 'filterDays',
      type: 'number',
      onChange: inputOnChange,
      onBlur: inputOnBlur,
      value: daysAgo
    }),
    _react2.default.createElement(_rcSlider2.default, {
      className: _dateFilter2.default.slider,
      defaultValue: Number(daysAgo),
      min: 0,
      max: 100,
      step: 1,
      onChange: sliderOnChange,
      onAfterChange: sliderOnAfterChange
    })
  );
};

DateFilter.defaultProps = {
  daysAgo: null
};

DateFilter.propTypes = {
  inputOnChange: _propTypes2.default.func.isRequired,
  inputOnBlur: _propTypes2.default.func.isRequired,
  daysAgo: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  sliderOnChange: _propTypes2.default.func.isRequired,
  sliderOnAfterChange: _propTypes2.default.func.isRequired
};

exports.default = DateFilter;

/***/ }),
/* 821 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _found = __webpack_require__(40);

var _dateFilter = __webpack_require__(820);

var _dateFilter2 = _interopRequireDefault(_dateFilter);

var _daysBetween = __webpack_require__(971);

var _daysBetween2 = _interopRequireDefault(_daysBetween);

var _getFormattedDate = __webpack_require__(162);

var _getFormattedDate2 = _interopRequireDefault(_getFormattedDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  dateFilterName: _propTypes2.default.string.isRequired
};

var daysAgoInputToDateUrl = function daysAgoInputToDateUrl(daysAgo) {
  var date = new Date();

  date.setUTCDate(date.getUTCDate() + daysAgo);

  return (0, _getFormattedDate2.default)(date);
};

var handlers = {
  pushDateToUrlQuery: function pushDateToUrlQuery(_ref) {
    var match = _ref.match,
        router = _ref.router,
        dateFilterName = _ref.dateFilterName;
    return function (date) {
      router.push({
        pathname: match.location.pathname,
        query: _extends({}, match.location.query, _defineProperty({}, dateFilterName, date))
      });
    };
  }
};

var secondHandlers = {
  inputOnBlur: function inputOnBlur(_ref2) {
    var pushDateToUrlQuery = _ref2.pushDateToUrlQuery;
    return function (e) {
      var value = e.target.value;

      // TODO: change magic numbers to .env file
      if (value < 0) {
        value = 0;
      } else if (value > 100) {
        value = 100;
      }

      var date = daysAgoInputToDateUrl(-value);

      pushDateToUrlQuery(date);
    };
  }
};

var stateHandlers = {
  sliderOnChange: function sliderOnChange() {
    return function (value) {
      return {
        tempDaysValue: value
      };
    };
  },
  sliderOnAfterChange: function sliderOnAfterChange(_, _ref3) {
    var pushDateToUrlQuery = _ref3.pushDateToUrlQuery;
    return function (value) {
      var date = daysAgoInputToDateUrl(-value);

      pushDateToUrlQuery(date);

      return {
        tempDaysValue: null
      };
    };
  },
  inputOnChange: function inputOnChange() {
    return function (e) {
      return {
        tempDaysValue: e.target.value
      };
    };
  }
};

var createProps = function createProps(_ref4) {
  var match = _ref4.match,
      tempDaysValue = _ref4.tempDaysValue,
      dateFilterName = _ref4.dateFilterName;

  var date = new Date(match.location.query[dateFilterName]);
  var daysBetweenValue = (0, _daysBetween2.default)(new Date(), date);

  if (daysBetweenValue < 0) {
    daysBetweenValue *= -1;
  }

  var daysAgo = tempDaysValue !== null ? tempDaysValue : Number(daysBetweenValue);

  return {
    daysAgo: daysAgo
  };
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), _found.withRouter, (0, _recompose.withHandlers)(handlers), (0, _recompose.withHandlers)(secondHandlers), (0, _recompose.withStateHandlers)({
  tempDaysValue: null
}, stateHandlers), (0, _recompose.withProps)(createProps))(_dateFilter2.default);

/***/ }),
/* 822 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filterText = __webpack_require__(1095);

var _filterText2 = _interopRequireDefault(_filterText);

var _dateFilterContainer = __webpack_require__(821);

var _dateFilterContainer2 = _interopRequireDefault(_dateFilterContainer);

var _removeFilterContainer = __webpack_require__(831);

var _removeFilterContainer2 = _interopRequireDefault(_removeFilterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add clear all filters
var FilterText = function FilterText(_ref) {
  var queryFilterDictionary = _ref.queryFilterDictionary,
      genre = _ref.genre,
      searchQuery = _ref.searchQuery,
      audioTypeText = _ref.audioTypeText,
      hasDateFrom = _ref.hasDateFrom;
  return queryFilterDictionary.key || genre || searchQuery ? _react2.default.createElement(
    'div',
    { className: _filterText2.default.filterText },
    _react2.default.createElement(
      'span',
      null,
      'Sorting',
      queryFilterDictionary.key && _react2.default.createElement(
        'span',
        null,
        '\xA0by the\xA0',
        _react2.default.createElement(
          'span',
          { className: _filterText2.default.queryFilterLabel },
          queryFilterDictionary.label,
          _react2.default.createElement(_removeFilterContainer2.default, { name: queryFilterDictionary.key })
        )
      ),
      '\xA0',
      audioTypeText,
      genre && _react2.default.createElement(
        'span',
        null,
        '\xA0in the\xA0',
        _react2.default.createElement(
          'span',
          { className: _filterText2.default.genreLabel },
          genre,
          _react2.default.createElement(_removeFilterContainer2.default, { name: 'genre' })
        ),
        '\xA0genre'
      )
    ),
    searchQuery && _react2.default.createElement(
      'span',
      null,
      '\xA0with a search query of\xA0',
      _react2.default.createElement(
        'span',
        { className: _filterText2.default.searchQueryLabel },
        searchQuery,
        _react2.default.createElement(_removeFilterContainer2.default, { name: 'searchQuery' })
      )
    ),
    hasDateFrom && _react2.default.createElement(
      'span',
      null,
      '\xA0that were added\xA0',
      _react2.default.createElement(
        'span',
        { className: _filterText2.default.dateFromLabel },
        _react2.default.createElement(_dateFilterContainer2.default, { dateFilterName: 'dateFrom' }),
        _react2.default.createElement(_removeFilterContainer2.default, { name: 'dateFrom' })
      ),
      '\xA0days ago\xA0'
    )
  ) : null;
};

FilterText.defaultProps = {
  genre: null,
  searchQuery: null,
  queryFilterDictionary: {},
  hasDateFrom: false
};

FilterText.propTypes = {
  hasDateFrom: _propTypes2.default.bool,
  queryFilterDictionary: _propTypes2.default.shape({
    key: _propTypes2.default.string,
    label: _propTypes2.default.string
  }),
  genre: _propTypes2.default.string,
  searchQuery: _propTypes2.default.string,
  audioTypeText: _propTypes2.default.string.isRequired
};

exports.default = FilterText;

/***/ }),
/* 823 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _found = __webpack_require__(40);

var _filterText = __webpack_require__(822);

var _filterText2 = _interopRequireDefault(_filterText);

var _normalizeBoolean = __webpack_require__(119);

var _normalizeBoolean2 = _interopRequireDefault(_normalizeBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getQueryFilterLabel = function getQueryFilterLabel(match) {
  var queryFilterLabels = [{ key: 'newest', label: (0, _normalizeBoolean2.default)(match.location.query.newest) && 'newest' }, { key: 'topRated', label: (0, _normalizeBoolean2.default)(match.location.query.topRated) && 'top rated' }, { key: 'mostCommented', label: (0, _normalizeBoolean2.default)(match.location.query.mostCommented) && 'most commented' }, { key: 'mostPlayed', label: (0, _normalizeBoolean2.default)(match.location.query.mostPlayed) && 'most played' }];

  var queryFilterLabel = queryFilterLabels.find(function (x) {
    return x.label;
  });

  return queryFilterLabel;
};

var createProps = function createProps(_ref) {
  var match = _ref.match;

  var queryFilterDictionary = getQueryFilterLabel(match);

  return {
    queryFilterDictionary: queryFilterDictionary,
    genre: match.location.query.genre,
    searchQuery: match.location.query.searchQuery,
    hasDateFrom: !!match.location.query.dateFrom
  };
};

exports.default = (0, _recompose.compose)(_found.withRouter, (0, _recompose.withProps)(createProps))(_filterText2.default);

/***/ }),
/* 824 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _getFormattedDate = __webpack_require__(162);

var _getFormattedDate2 = _interopRequireDefault(_getFormattedDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(_ref) {
  var filter = _ref.filter,
      dateFrom = _ref.dateFrom,
      styleName = _ref.styleName;
  return [_react2.default.createElement(
    _button2.default,
    { key: 0, styleName: styleName, onClick: function onClick() {
        return filter('newest');
      } },
    'Newest'
  ), _react2.default.createElement(
    _button2.default,
    { key: 1, styleName: styleName, onClick: function onClick() {
        return filter('topRated', { dateFrom: dateFrom });
      } },
    'Top Rated'
  ), _react2.default.createElement(
    _button2.default,
    { key: 2, styleName: styleName, onClick: function onClick() {
        return filter('mostCommented', { dateFrom: dateFrom });
      } },
    'Most Commented'
  ), _react2.default.createElement(
    _button2.default,
    { key: 3, styleName: styleName, onClick: function onClick() {
        return filter('mostPlayed', { dateFrom: dateFrom });
      } },
    'Most Played'
  )];
};

// TODO: Put -30 in .env file
var defaultDateFrom = function defaultDateFrom() {
  var date = new Date();

  date.setUTCDate(date.getDate() + -30);

  return (0, _getFormattedDate2.default)(date);
};

Filters.defaultProps = {
  dateFrom: defaultDateFrom(),
  styleName: 'primary'
};

Filters.propTypes = {
  styleName: _propTypes2.default.string,
  dateFrom: _propTypes2.default.string,
  filter: _propTypes2.default.func.isRequired
};

exports.default = Filters;

/***/ }),
/* 825 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = __webpack_require__(4);

var _found = __webpack_require__(40);

var _filters = __webpack_require__(824);

var _filters2 = _interopRequireDefault(_filters);

var _normalizeBoolean = __webpack_require__(119);

var _normalizeBoolean2 = _interopRequireDefault(_normalizeBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var handlers = {
  filter: function filter(_ref) {
    var router = _ref.router,
        match = _ref.match;
    return function (filter) {
      var _extends2;

      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _match$location$query = match.location.query,
          newest = _match$location$query.newest,
          mostCommented = _match$location$query.mostCommented,
          mostPlayed = _match$location$query.mostPlayed,
          topRated = _match$location$query.topRated,
          queries = _objectWithoutProperties(_match$location$query, ['newest', 'mostCommented', 'mostPlayed', 'topRated']);

      router.push({
        pathname: match.location.pathname,
        query: _extends({}, queries, (_extends2 = {}, _defineProperty(_extends2, filter, true), _defineProperty(_extends2, 'dateFrom', values.dateFrom), _extends2))
      });
    };
  }
};

var createProps = function createProps(_ref2) {
  var match = _ref2.match;
  return {
    topRated: (0, _normalizeBoolean2.default)(match.location.query.topRated),
    mostCommented: (0, _normalizeBoolean2.default)(match.location.query.mostCommented),
    mostPlayed: (0, _normalizeBoolean2.default)(match.location.query.mostPlayed),
    dateFrom: match.location.query.dateFrom
  };
};

exports.default = (0, _recompose.compose)(_found.withRouter, (0, _recompose.withHandlers)(handlers), (0, _recompose.withProps)(createProps))(_filters2.default);

/***/ }),
/* 826 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _airbnbPropTypes = __webpack_require__(666);

var _airbnbPropTypes2 = _interopRequireDefault(_airbnbPropTypes);

var _pause = __webpack_require__(901);

var _pause2 = _interopRequireDefault(_pause);

var _play = __webpack_require__(902);

var _play2 = _interopRequireDefault(_play);

var _play3 = __webpack_require__(1097);

var _play4 = _interopRequireDefault(_play3);

var _coverImage = __webpack_require__(230);

var _coverImage2 = _interopRequireDefault(_coverImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Play = function (_React$Component) {
  _inherits(Play, _React$Component);

  function Play() {
    _classCallCheck(this, Play);

    var _this = _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Play, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.paused) {
        this.setState({ hasPlayed: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)(_defineProperty({}, _play4.default.currentlyPlayed, this.props.isCurrent && this.state.hasPlayed));

      return _react2.default.createElement(
        'div',
        { role: 'button', tabIndex: 0, onClick: this.props.onClick, className: (0, _classnames2.default)(className, _play4.default.play) },
        this.props.children,
        this.props.paused || !this.props.isCurrent ? _react2.default.createElement(_play2.default, { className: _play4.default.playIcon, 'data-role': 'hover' }) : _react2.default.createElement(_pause2.default, { className: _play4.default.pauseIcon, 'data-role': 'hover' })
      );
    }
  }]);

  return Play;
}(_react2.default.Component);

Play.propTypes = {
  children: _airbnbPropTypes2.default.elementType(_coverImage2.default).isRequired,
  onClick: _propTypes2.default.func.isRequired,
  isCurrent: _propTypes2.default.bool.isRequired,
  paused: _propTypes2.default.bool.isRequired
};

exports.default = Play;

/***/ }),
/* 827 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _reactJplaylist = __webpack_require__(155);

var _reactJplayer = __webpack_require__(60);

var _play = __webpack_require__(826);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers.FooterPlaylist.paused,
    isCurrent: jPlayers.FooterPlaylist.media.id === id
  };
};

var handlers = {
  onClick: function onClick(_ref3) {
    var dispatch = _ref3.dispatch,
        isCurrent = _ref3.isCurrent,
        paused = _ref3.paused,
        footerPlaylist = _ref3.footerPlaylist,
        id = _ref3.id;
    return function () {
      if (paused || !isCurrent) {
        var index = footerPlaylist.findIndex(function (x) {
          return x.id === id;
        });

        dispatch(_reactJplaylist.actions.setPlaylist('FooterPlaylist', footerPlaylist));
        dispatch(_reactJplaylist.actions.play('FooterPlaylist', index));
      } else {
        dispatch(_reactJplayer.actions.pause('FooterPlaylist'));
      }
    };
  }
};

var propTypes = {
  id: _propTypes2.default.number.isRequired,
  footerPlaylist: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired,
    artist: _propTypes2.default.string,
    sources: _propTypes2.default.object.isRequired,
    poster: _propTypes2.default.string.isRequired
  })).isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _reactRedux.connect)(mapStateToProps), (0, _recompose.withHandlers)(handlers))(_play2.default);

/***/ }),
/* 828 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pluralize = __webpack_require__(593);

var _pluralize2 = _interopRequireDefault(_pluralize);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _playCount = __webpack_require__(1098);

var _playCount2 = _interopRequireDefault(_playCount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayCount = function PlayCount(_ref) {
  var className = _ref.className,
      playCount = _ref.playCount;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_playCount2.default.playCount, className) },
    playCount,
    ' ',
    (0, _pluralize2.default)('play', playCount)
  );
};

PlayCount.defaultProps = {
  className: null
};

PlayCount.propTypes = {
  className: _propTypes2.default.string,
  playCount: _propTypes2.default.number.isRequired
};

exports.default = PlayCount;

/***/ }),
/* 829 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'SHOW_SIDEBAR':
      localStorage.setItem('showingSideBar', true);

      return _extends({}, state, {
        showingSideBar: true
      });
    case 'HIDE_SIDEBAR':
      localStorage.setItem('showingSideBar', false);

      return _extends({}, state, {
        showingSideBar: false
      });
    default:
      return state;
  }
};

/***/ }),
/* 830 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveFilter = function RemoveFilter(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(
    'button',
    { onClick: onClick },
    'x'
  );
};

RemoveFilter.propTypes = {
  onClick: _propTypes2.default.func.isRequired
};

exports.default = RemoveFilter;

/***/ }),
/* 831 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _recompose = __webpack_require__(4);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _found = __webpack_require__(40);

var _removeFilter = __webpack_require__(830);

var _removeFilter2 = _interopRequireDefault(_removeFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  name: _propTypes2.default.string.isRequired
};

exports.default = (0, _recompose.compose)(_found.withRouter, (0, _recompose.setPropTypes)(propTypes), (0, _recompose.withHandlers)({
  onClick: function onClick(_ref) {
    var router = _ref.router,
        match = _ref.match,
        name = _ref.name;
    return function () {
      var queries = _extends({}, match.location.query);

      delete queries[name];

      router.push({
        pathname: match.location.pathname,
        query: _extends({}, queries)
      });
    };
  }
}))(_removeFilter2.default);

/***/ }),
/* 832 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _commentBoxContainer = __webpack_require__(848);

var _commentBoxContainer2 = _interopRequireDefault(_commentBoxContainer);

var _commentsContainer = __webpack_require__(852);

var _commentsContainer2 = _interopRequireDefault(_commentsContainer);

var _sideBar = __webpack_require__(1099);

var _sideBar2 = _interopRequireDefault(_sideBar);

var _name = __webpack_require__(409);

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideBar = function SideBar(_ref) {
  var audios = _ref.audios,
      currentAudioId = _ref.currentAudioId,
      children = _ref.children,
      isFixed = _ref.isFixed;

  var newAudioId = currentAudioId || audios[0].audioId;
  var currentAudioIndex = audios.findIndex(function (_ref2) {
    var audioId = _ref2.audioId;
    return audioId === newAudioId;
  });
  var audio = audios[currentAudioIndex];

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_sideBar2.default.sideBar, isFixed && _sideBar2.default.fixedSideBar) },
    children(currentAudioIndex),
    _react2.default.createElement(_name2.default, { name: audio.name, className: _sideBar2.default.name }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: _sideBar2.default.commentBox },
        _react2.default.createElement(_commentBoxContainer2.default, { audio: audio, form: 'commentBox', key: 'commentBox' })
      ),
      _react2.default.createElement(_commentsContainer2.default, { audio: audio })
    )
  );
};

SideBar.defaultProps = {
  currentAudioId: null,
  children: Function.prototype
};

SideBar.propTypes = {
  audios: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    audioId: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  currentAudioId: _propTypes2.default.number,
  children: _propTypes2.default.func,
  isFixed: _propTypes2.default.bool.isRequired
};

exports.default = SideBar;

/***/ }),
/* 833 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _reactRedux = __webpack_require__(10);

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _sideBar = __webpack_require__(832);

var _sideBar2 = _interopRequireDefault(_sideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  audios: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var jPlayers = _ref.jPlayers,
      audio = _ref.audio;
  return {
    currentAudioId: jPlayers.FooterPlaylist.media.id,
    showingSideBar: audio.showingSideBar
  };
};

var fragments = {
  audios: function audios() {
    return __webpack_require__(815);
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _reactRedux.connect)(mapStateToProps), (0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.branch)(function (props) {
  return !props.showingSideBar || !props.audios.length;
}, _recompose.renderNothing))(_sideBar2.default);

/***/ }),
/* 834 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _comments = __webpack_require__(894);

var _comments2 = _interopRequireDefault(_comments);

var _toggleSideBar = __webpack_require__(1100);

var _toggleSideBar2 = _interopRequireDefault(_toggleSideBar);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleSideBar = function ToggleSideBar(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className,
      showingSideBar = _ref.showingSideBar;
  return _react2.default.createElement(
    _button2.default,
    {
      styleName: 'secondary',
      className: (0, _classnames2.default)(_toggleSideBar2.default.toggleSideBar, className),
      title: showingSideBar ? 'Hide comments' : 'Show comments',
      onClick: onClick
    },
    _react2.default.createElement(_comments2.default, { className: _toggleSideBar2.default.toggleSideBarIcon })
  );
};

ToggleSideBar.defaultProps = {
  className: null
};

ToggleSideBar.propTypes = {
  showingSideBar: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string
};

exports.default = ToggleSideBar;

/***/ }),
/* 835 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _toggleSideBar = __webpack_require__(834);

var _toggleSideBar2 = _interopRequireDefault(_toggleSideBar);

var _actions = __webpack_require__(817);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var audio = _ref.audio;
  return {
    showingSideBar: audio.showingSideBar
  };
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _recompose.withHandlers)({
  onClick: function onClick(_ref2) {
    var dispatch = _ref2.dispatch,
        showingSideBar = _ref2.showingSideBar;
    return function () {
      if (showingSideBar) {
        dispatch((0, _actions.hideSideBar)());
      } else {
        dispatch((0, _actions.showSideBar)());
      }
    };
  }
}))(_toggleSideBar2.default);

/***/ }),
/* 836 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(816);
};

exports.default = function (audioId) {
  var variables = {
    input: {
      audioId: audioId
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables);
};

/***/ }),
/* 837 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type commentBoxContainer_audio = {|
  +id: ?string;
  +audioId: number;
  +name: string;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "commentBoxContainer_audio",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "audioId",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "name",
    "storageKey": null
  }],
  "type": "Audio"
};

module.exports = fragment;

/***/ }),
/* 838 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type commentContainer_comment = {|
  +id: string;
  +commentId: number;
  +body: string;
  +dateAdded: ?any;
  +likes: number;
  +dislikes: number;
  +user: {|
    +userName: string;
  |};
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "commentContainer_comment",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "commentId",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "body",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "dateAdded",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "likes",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "dislikes",
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "args": null,
    "concreteType": "ApplicationUser",
    "name": "user",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "userName",
      "storageKey": null
    }],
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "repliesContainer_comment",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "likeCommentContainer_comment",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "dislikeCommentContainer_comment",
    "args": null
  }],
  "type": "Comment"
};

module.exports = fragment;

/***/ }),
/* 839 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 1262a02c7384428f8c48545762009b86
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type commentMutationVariables = {|
  cursor?: ?string;
  input: {
    clientMutationId?: ?string;
    body: string;
    audioId: number;
    originalCommentId?: ?number;
  };
|};
export type commentMutationResponse = {|
  +comment: ?{|
    +comment: {| |};
  |};
|};
*/

/*
mutation commentMutation(
  $cursor: String
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      ...commentContainer_comment
      ...repliesContainer_comment
      id
    }
  }
}

fragment commentContainer_comment on Comment {
  id
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  ...repliesContainer_comment
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment repliesContainer_comment on Comment {
  id
  replies(first: 0, after: $cursor) {
    totalCount
    edges {
      cursor
      node {
        __typename
        commentId
        ...replyContainer_reply
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment replyContainer_reply on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "input",
      "type": "SaveCommentInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "commentMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SaveCommentInput!"
      }],
      "concreteType": "SaveCommentPayload",
      "name": "comment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "name": "comment",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "commentContainer_comment",
          "args": null
        }, {
          "kind": "FragmentSpread",
          "name": "repliesContainer_comment",
          "args": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "commentMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "input",
      "type": "SaveCommentInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "commentMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SaveCommentInput!"
      }],
      "concreteType": "SaveCommentPayload",
      "name": "comment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "name": "comment",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }, {
          "kind": "InlineFragment",
          "type": "Comment",
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "commentId",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "body",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dateAdded",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ApplicationUser",
            "name": "user",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "userName",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "id",
              "storageKey": null
            }],
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": [{
              "kind": "Variable",
              "name": "after",
              "variableName": "cursor",
              "type": "String"
            }, {
              "kind": "Literal",
              "name": "first",
              "value": 0,
              "type": "Int"
            }],
            "concreteType": "CommentPayloadConnection",
            "name": "replies",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "totalCount",
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "CommentPayloadEdge",
              "name": "edges",
              "plural": true,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }, {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "name": "node",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "__typename",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "commentId",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "body",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "dateAdded",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "likes",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "dislikes",
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "ApplicationUser",
                  "name": "user",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "userName",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }],
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "Comment",
                  "name": "originalComment",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "body",
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ApplicationUser",
                    "name": "user",
                    "plural": false,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "userName",
                      "storageKey": null
                    }, {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "id",
                      "storageKey": null
                    }],
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }],
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "id",
                  "storageKey": null
                }],
                "storageKey": null
              }],
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "name": "pageInfo",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              }],
              "storageKey": null
            }],
            "storageKey": null
          }, {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [{
              "kind": "Variable",
              "name": "after",
              "variableName": "cursor",
              "type": "String"
            }, {
              "kind": "Literal",
              "name": "first",
              "value": 0,
              "type": "Int"
            }],
            "handle": "connection",
            "name": "replies",
            "key": "repliesContainer_replies",
            "filters": null
          }]
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation commentMutation(\n  $cursor: String\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      ...commentContainer_comment\n      ...repliesContainer_comment\n      id\n    }\n  }\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        __typename\n        commentId\n        ...replyContainer_reply\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n"
};

module.exports = batch;

/***/ }),
/* 840 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 0725119cecce48047576b18f5c520f3b
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type commentsContainerForwardQueryResponse = {|
  +node: ?{| |};
|};
*/

/*
query commentsContainerForwardQuery(
  $id: ID!
  $count: Int!
  $cursor: String
) {
  node(id: $id) {
    __typename
    ...commentsContainer_audio
    id
  }
}

fragment commentsContainer_audio on Audio {
  id
  ...commentBoxContainer_audio
  ...replyBoxContainer_audio
  comments(first: $count, after: $cursor) {
    edges {
      node {
        __typename
        commentId
        ...commentContainer_comment
        id
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment commentBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment replyBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment commentContainer_comment on Comment {
  id
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  ...repliesContainer_comment
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment repliesContainer_comment on Comment {
  id
  replies(first: 0, after: $cursor) {
    totalCount
    edges {
      cursor
      node {
        __typename
        commentId
        ...replyContainer_reply
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
}

fragment replyContainer_reply on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "commentsContainerForwardQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }],
      "concreteType": null,
      "name": "node",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "commentsContainer_audio",
        "args": null
      }],
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "commentsContainerForwardQuery",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "commentsContainerForwardQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }],
      "concreteType": null,
      "name": "node",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "__typename",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "id",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "audioId",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "name",
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "args": [{
          "kind": "Variable",
          "name": "after",
          "variableName": "cursor",
          "type": "String"
        }, {
          "kind": "Variable",
          "name": "first",
          "variableName": "count",
          "type": "Int"
        }],
        "concreteType": "CommentPayloadConnection",
        "name": "comments",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "CommentPayloadEdge",
          "name": "edges",
          "plural": true,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "name": "node",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "__typename",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "commentId",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "id",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "body",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "dateAdded",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "likes",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "dislikes",
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "ApplicationUser",
              "name": "user",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "userName",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }],
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": [{
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              }, {
                "kind": "Literal",
                "name": "first",
                "value": 0,
                "type": "Int"
              }],
              "concreteType": "CommentPayloadConnection",
              "name": "replies",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "totalCount",
                "storageKey": null
              }, {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "CommentPayloadEdge",
                "name": "edges",
                "plural": true,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "cursor",
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "Comment",
                  "name": "node",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "commentId",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "body",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "dateAdded",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "likes",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "dislikes",
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ApplicationUser",
                    "name": "user",
                    "plural": false,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "userName",
                      "storageKey": null
                    }, {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "id",
                      "storageKey": null
                    }],
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "name": "originalComment",
                    "plural": false,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "body",
                      "storageKey": null
                    }, {
                      "kind": "LinkedField",
                      "alias": null,
                      "args": null,
                      "concreteType": "ApplicationUser",
                      "name": "user",
                      "plural": false,
                      "selections": [{
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "userName",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }],
                      "storageKey": null
                    }, {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "id",
                      "storageKey": null
                    }],
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }],
                  "storageKey": null
                }],
                "storageKey": null
              }, {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "endCursor",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "hasNextPage",
                  "storageKey": null
                }],
                "storageKey": null
              }],
              "storageKey": null
            }, {
              "kind": "LinkedHandle",
              "alias": null,
              "args": [{
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              }, {
                "kind": "Literal",
                "name": "first",
                "value": 0,
                "type": "Int"
              }],
              "handle": "connection",
              "name": "replies",
              "key": "repliesContainer_replies",
              "filters": null
            }],
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "cursor",
            "storageKey": null
          }],
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "name": "pageInfo",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "hasNextPage",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "endCursor",
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "LinkedHandle",
        "alias": null,
        "args": [{
          "kind": "Variable",
          "name": "after",
          "variableName": "cursor",
          "type": "String"
        }, {
          "kind": "Variable",
          "name": "first",
          "variableName": "count",
          "type": "Int"
        }],
        "handle": "connection",
        "name": "comments",
        "key": "commentsContainer_comments",
        "filters": null
      }],
      "storageKey": null
    }]
  },
  "text": "query commentsContainerForwardQuery(\n  $id: ID!\n  $count: Int!\n  $cursor: String\n) {\n  node(id: $id) {\n    __typename\n    ...commentsContainer_audio\n    id\n  }\n}\n\nfragment commentsContainer_audio on Audio {\n  id\n  ...commentBoxContainer_audio\n  ...replyBoxContainer_audio\n  comments(first: $count, after: $cursor) {\n    edges {\n      node {\n        __typename\n        commentId\n        ...commentContainer_comment\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment commentBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment replyBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        __typename\n        commentId\n        ...replyContainer_reply\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n"
};

module.exports = batch;

/***/ }),
/* 841 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type commentsContainer_audio = {|
  +id: ?string;
  +comments: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +commentId: number;
      |};
    |}>;
    +pageInfo: {|
      +hasNextPage: boolean;
    |};
  |};
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [{
    "kind": "RootArgument",
    "name": "count",
    "type": "Int"
  }, {
    "kind": "RootArgument",
    "name": "cursor",
    "type": "String"
  }],
  "kind": "Fragment",
  "metadata": {
    "connection": [{
      "count": "count",
      "cursor": "cursor",
      "direction": "forward",
      "path": ["comments"]
    }]
  },
  "name": "commentsContainer_audio",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "commentBoxContainer_audio",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "replyBoxContainer_audio",
    "args": null
  }, {
    "kind": "LinkedField",
    "alias": "comments",
    "args": null,
    "concreteType": "CommentPayloadConnection",
    "name": "__commentsContainer_comments_connection",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "CommentPayloadEdge",
      "name": "edges",
      "plural": true,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "name": "node",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "commentId",
          "storageKey": null
        }, {
          "kind": "FragmentSpread",
          "name": "commentContainer_comment",
          "args": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "__typename",
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "cursor",
        "storageKey": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "name": "pageInfo",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "hasNextPage",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "endCursor",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }],
  "type": "Audio"
};

module.exports = fragment;

/***/ }),
/* 842 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash e6e67f52e999a61878bd49ddbfd1356b
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type repliesContainerForwardQueryResponse = {|
  +node: ?{| |};
|};
*/

/*
query repliesContainerForwardQuery(
  $id: ID!
  $count: Int!
  $cursor: String
) {
  node(id: $id) {
    __typename
    ...repliesContainer_comment_yu5n1
    id
  }
}

fragment repliesContainer_comment_yu5n1 on Comment {
  id
  replies(first: $count, after: $cursor) {
    totalCount
    edges {
      cursor
      node {
        __typename
        commentId
        ...replyContainer_reply
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment replyContainer_reply on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "repliesContainerForwardQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }],
      "concreteType": null,
      "name": "node",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "repliesContainer_comment",
        "args": [{
          "kind": "Variable",
          "name": "count",
          "variableName": "count",
          "type": null
        }]
      }],
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "repliesContainerForwardQuery",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "repliesContainerForwardQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }],
      "concreteType": null,
      "name": "node",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "__typename",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "id",
        "storageKey": null
      }, {
        "kind": "InlineFragment",
        "type": "Comment",
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }],
          "concreteType": "CommentPayloadConnection",
          "name": "replies",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalCount",
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "CommentPayloadEdge",
            "name": "edges",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "cursor",
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Comment",
              "name": "node",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "commentId",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "body",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "dateAdded",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "likes",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "dislikes",
                "storageKey": null
              }, {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ApplicationUser",
                "name": "user",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "userName",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "id",
                  "storageKey": null
                }],
                "storageKey": null
              }, {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "name": "originalComment",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "body",
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "ApplicationUser",
                  "name": "user",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "userName",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }],
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "id",
                  "storageKey": null
                }],
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }],
              "storageKey": null
            }],
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "endCursor",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "hasNextPage",
              "storageKey": null
            }],
            "storageKey": null
          }],
          "storageKey": null
        }, {
          "kind": "LinkedHandle",
          "alias": null,
          "args": [{
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          }, {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }],
          "handle": "connection",
          "name": "replies",
          "key": "repliesContainer_replies",
          "filters": null
        }]
      }],
      "storageKey": null
    }]
  },
  "text": "query repliesContainerForwardQuery(\n  $id: ID!\n  $count: Int!\n  $cursor: String\n) {\n  node(id: $id) {\n    __typename\n    ...repliesContainer_comment_yu5n1\n    id\n  }\n}\n\nfragment repliesContainer_comment_yu5n1 on Comment {\n  id\n  replies(first: $count, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        __typename\n        commentId\n        ...replyContainer_reply\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n"
};

module.exports = batch;

/***/ }),
/* 843 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type repliesContainer_comment = {|
  +id: string;
  +replies: ?{|
    +totalCount: ?number;
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string;
      +node: ?{|
        +commentId: number;
      |};
    |}>;
    +pageInfo: {|
      +endCursor: ?string;
      +hasNextPage: boolean;
    |};
  |};
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [{
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": 0
  }, {
    "kind": "RootArgument",
    "name": "cursor",
    "type": "String"
  }],
  "kind": "Fragment",
  "metadata": {
    "connection": [{
      "count": "count",
      "cursor": "cursor",
      "direction": "forward",
      "path": ["replies"]
    }]
  },
  "name": "repliesContainer_comment",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": "replies",
    "args": null,
    "concreteType": "CommentPayloadConnection",
    "name": "__repliesContainer_replies_connection",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "totalCount",
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "CommentPayloadEdge",
      "name": "edges",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "cursor",
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "name": "node",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "commentId",
          "storageKey": null
        }, {
          "kind": "FragmentSpread",
          "name": "replyContainer_reply",
          "args": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "__typename",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "name": "pageInfo",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "endCursor",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "hasNextPage",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }],
  "type": "Comment"
};

module.exports = fragment;

/***/ }),
/* 844 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type replyContainer_reply = {|
  +commentId: number;
  +body: string;
  +dateAdded: ?any;
  +likes: number;
  +dislikes: number;
  +user: {|
    +userName: string;
  |};
  +originalComment: ?{|
    +body: string;
    +user: {|
      +userName: string;
    |};
  |};
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "replyContainer_reply",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "commentId",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "body",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "dateAdded",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "likes",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "dislikes",
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "args": null,
    "concreteType": "ApplicationUser",
    "name": "user",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "userName",
      "storageKey": null
    }],
    "storageKey": null
  }, {
    "kind": "LinkedField",
    "alias": null,
    "args": null,
    "concreteType": "Comment",
    "name": "originalComment",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "body",
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ApplicationUser",
      "name": "user",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "userName",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "likeCommentContainer_comment",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "dislikeCommentContainer_comment",
    "args": null
  }],
  "type": "Comment"
};

module.exports = fragment;

/***/ }),
/* 845 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 085a14bea5960502ccefa528faadec9e
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type replyMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    body: string;
    audioId: number;
    originalCommentId?: ?number;
  };
|};
export type replyMutationResponse = {|
  +comment: ?{|
    +comment: {|
      +replies: ?{|
        +totalCount: ?number;
      |};
    |};
  |};
|};
*/

/*
mutation replyMutation(
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      ...replyContainer_reply
      replies {
        totalCount
      }
      id
    }
  }
}

fragment replyContainer_reply on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "SaveCommentInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "replyMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SaveCommentInput!"
      }],
      "concreteType": "SaveCommentPayload",
      "name": "comment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "name": "comment",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "replyContainer_reply",
          "args": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "CommentPayloadConnection",
          "name": "replies",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalCount",
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "replyMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "SaveCommentInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "replyMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SaveCommentInput!"
      }],
      "concreteType": "SaveCommentPayload",
      "name": "comment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Comment",
        "name": "comment",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "CommentPayloadConnection",
          "name": "replies",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "totalCount",
            "storageKey": null
          }],
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }, {
          "kind": "InlineFragment",
          "type": "Comment",
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "commentId",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "body",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dateAdded",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ApplicationUser",
            "name": "user",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "userName",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "id",
              "storageKey": null
            }],
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "name": "originalComment",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "body",
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "ApplicationUser",
              "name": "user",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "userName",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }],
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "id",
              "storageKey": null
            }],
            "storageKey": null
          }]
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation replyMutation(\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      ...replyContainer_reply\n      replies {\n        totalCount\n      }\n      id\n    }\n  }\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n"
};

module.exports = batch;

/***/ }),
/* 846 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _comment = __webpack_require__(1101);

var _comment2 = _interopRequireDefault(_comment);

var _replyBoxContainer = __webpack_require__(413);

var _replyBoxContainer2 = _interopRequireDefault(_replyBoxContainer);

var _repliesContainer = __webpack_require__(858);

var _repliesContainer2 = _interopRequireDefault(_repliesContainer);

var _commentHeaderContainer = __webpack_require__(412);

var _commentHeaderContainer2 = _interopRequireDefault(_commentHeaderContainer);

var _commentBody = __webpack_require__(410);

var _commentBody2 = _interopRequireDefault(_commentBody);

var _commentControls = __webpack_require__(411);

var _commentControls2 = _interopRequireDefault(_commentControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comment = function Comment(_ref) {
  var comment = _ref.comment,
      audio = _ref.audio,
      user = _ref.user,
      dateAdded = _ref.dateAdded,
      body = _ref.body,
      commentId = _ref.commentId,
      likes = _ref.likes,
      dislikes = _ref.dislikes;
  return _react2.default.createElement(
    'div',
    { className: _comment2.default.commentTree },
    _react2.default.createElement(
      'div',
      { 'data-component': 'comment' },
      _react2.default.createElement(_commentHeaderContainer2.default, { userName: user.userName, dateAdded: dateAdded }),
      _react2.default.createElement(
        _commentBody2.default,
        null,
        body
      ),
      _react2.default.createElement(_commentControls2.default, { comment: comment, commentId: commentId, likes: likes, dislikes: dislikes }),
      _react2.default.createElement(_replyBoxContainer2.default, {
        rootComment: comment,
        comment: comment,
        audio: audio
      })
    ),
    _react2.default.createElement(_repliesContainer2.default, { comment: comment, audio: audio })
  );
};

Comment.propTypes = {
  comment: _propTypes2.default.object.isRequired,
  audio: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.shape({
    userName: _propTypes2.default.string.isRequired
  }).isRequired,
  dateAdded: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.node.isRequired,
  dislikes: _propTypes2.default.number.isRequired,
  likes: _propTypes2.default.number.isRequired,
  commentId: _propTypes2.default.number.isRequired
};

exports.default = Comment;

/***/ }),
/* 847 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _spinnerSubmitContainer = __webpack_require__(159);

var _spinnerSubmitContainer2 = _interopRequireDefault(_spinnerSubmitContainer);

var _commentBox = __webpack_require__(1102);

var _commentBox2 = _interopRequireDefault(_commentBox);

var _inputTextareaField = __webpack_require__(237);

var _inputTextareaField2 = _interopRequireDefault(_inputTextareaField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentBox = function CommentBox(_ref) {
  var handleSubmit = _ref.handleSubmit,
      form = _ref.form,
      cancel = _ref.cancel;
  return _react2.default.createElement(
    'form',
    { className: _commentBox2.default.commentBox, onSubmit: handleSubmit, action: '' },
    _react2.default.createElement(_reduxForm.Field, { name: 'body', component: _inputTextareaField2.default, placeholder: 'Add your comment...' }),
    _react2.default.createElement(
      _spinnerSubmitContainer2.default,
      { formName: form, styleName: 'secondary' },
      'Comment'
    ),
    _react2.default.createElement(
      _button2.default,
      { onClick: cancel, styleName: 'secondary' },
      'Cancel'
    )
  );
};

CommentBox.defaultProps = {
  cancel: null
};

CommentBox.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  form: _propTypes2.default.string.isRequired,
  cancel: _propTypes2.default.func
};

exports.default = CommentBox;

/***/ }),
/* 848 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _commentBox = __webpack_require__(847);

var _commentBox2 = _interopRequireDefault(_commentBox);

var _commentMutation = __webpack_require__(850);

var _commentMutation2 = _interopRequireDefault(_commentMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  audio: function audio() {
    return __webpack_require__(837);
  }
};

var handlers = {
  onSubmit: function onSubmit(_ref) {
    var audio = _ref.audio;
    return function (input) {
      (0, _commentMutation2.default)(input, audio);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.defaultProps)({
  cancel: Function.prototype
}), (0, _recompose.setPropTypes)({
  cancel: _propTypes2.default.func
}), (0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)(), (0, _recompose.withHandlers)({
  cancel: function cancel(_ref2) {
    var reset = _ref2.reset,
        _cancel = _ref2.cancel;
    return function () {
      reset();
      _cancel.apply(undefined, arguments);
    };
  }
}))(_commentBox2.default);

/***/ }),
/* 849 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _comment = __webpack_require__(846);

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  comment: function comment() {
    return __webpack_require__(838);
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.flattenProp)('comment'))(_comment2.default);

/***/ }),
/* 850 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _relayRuntime = __webpack_require__(90);

var _getFormattedDate = __webpack_require__(162);

var _getFormattedDate2 = _interopRequireDefault(_getFormattedDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
  return __webpack_require__(839);
};

var sharedUpdater = function sharedUpdater(store, audio, comment) {
  var audioProxy = store.get(audio.id);
  var connection = _relayRuntime.ConnectionHandler.getConnection(audioProxy, 'commentsContainer_comments');

  var edge = _relayRuntime.ConnectionHandler.createEdge(store, connection, comment, 'CommentPayloadEdge');

  _relayRuntime.ConnectionHandler.insertEdgeAfter(connection, edge);
};

var tempID = 0;

exports.default = function (_ref, audio) {
  var body = _ref.body;

  var variables = {
    input: {
      body: body,
      audioId: audio.audioId
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables, null, function (store) {
    // if (!body) return;

    // const root = store.getRoot();
    // const user = root.getLinkedRecord('user');
    // const comment = store.create(`newComment_${tempID += 1}`, 'comment');
    // const dateAdded = getFormattedDate(new Date());

    // comment.setValue(tempID * -1, 'commentId');
    // comment.setValue(body, 'body');
    // comment.setLinkedRecord(user, 'user');
    // comment.setValue(dateAdded, 'dateAdded');
    // comment.setValue(0, 'likes');
    // comment.setValue(0, 'dislikes');
    // comment.setValue(0, 'repliesCount');

    // sharedUpdater(store, audio, comment);
  }, function (store) {
    var commentRoot = store.getRootField('comment');
    var comment = commentRoot.getLinkedRecord('comment');

    sharedUpdater(store, audio, comment);
  });
};

/***/ }),
/* 851 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactInfiniteScroller = __webpack_require__(605);

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _commentContainer = __webpack_require__(849);

var _commentContainer2 = _interopRequireDefault(_commentContainer);

var _loader = __webpack_require__(437);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comments = function Comments(_ref) {
  var audio = _ref.audio,
      loadMore = _ref.loadMore;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactInfiniteScroller2.default,
      {
        loadMore: loadMore,
        hasMore: audio.comments.pageInfo.hasNextPage,
        loader: _react2.default.createElement(_loader2.default, { key: 0 }),
        initialLoad: false
      },
      audio.comments.edges.map(function (_ref2) {
        var node = _ref2.node;
        return _react2.default.createElement(_commentContainer2.default, {
          key: node.commentId,
          comment: node,
          audio: audio
        });
      })
    )
  );
};

Comments.propTypes = {
  audio: _propTypes2.default.shape({
    comments: _propTypes2.default.shape({
      pageInfo: _propTypes2.default.shape({
        hasNextPage: _propTypes2.default.bool.isRequired
      }).isRequired,
      edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        node: _propTypes2.default.shape({
          commentId: _propTypes2.default.number.isRequired
        })
      }))
    })
  }).isRequired,
  loadMore: _propTypes2.default.func.isRequired
};

exports.default = Comments;

/***/ }),
/* 852 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _comments = __webpack_require__(851);

var _comments2 = _interopRequireDefault(_comments);

var _itemsToLoad = __webpack_require__(439);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  audio: function audio() {
    return __webpack_require__(841);
  }
};

var connectionConfig = {
  direction: 'forward',
  query: function query() {
    return __webpack_require__(840);
  },
  getVariables: function getVariables(props, _ref) {
    var count = _ref.count,
        cursor = _ref.cursor;
    return {
      count: count,
      cursor: cursor,
      id: props.audio.id
    };
  }
};

var handlers = {
  loadMore: function loadMore(_ref2) {
    var relay = _ref2.relay;
    return function () {
      return relay.loadMore(_itemsToLoad.commentsToLoad);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.paginationContainer)(fragments, connectionConfig), (0, _recompose.withHandlers)(handlers))(_comments2.default);

/***/ }),
/* 853 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type replyBoxContainer_audio = {|
  +id: ?string;
  +audioId: number;
  +name: string;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "replyBoxContainer_audio",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "audioId",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "name",
    "storageKey": null
  }],
  "type": "Audio"
};

module.exports = fragment;

/***/ }),
/* 854 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _commentHeader = __webpack_require__(1105);

var _commentHeader2 = _interopRequireDefault(_commentHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentHeader = function CommentHeader(_ref) {
  var userName = _ref.userName,
      dateAdded = _ref.dateAdded;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      { className: _commentHeader2.default.userName },
      userName
    ),
    _react2.default.createElement(
      'span',
      { className: _commentHeader2.default.dateAdded },
      dateAdded
    )
  );
};

CommentHeader.propTypes = {
  userName: _propTypes2.default.string.isRequired,
  dateAdded: _propTypes2.default.string.isRequired
};

exports.default = CommentHeader;

/***/ }),
/* 855 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _spinnerSubmitContainer = __webpack_require__(159);

var _spinnerSubmitContainer2 = _interopRequireDefault(_spinnerSubmitContainer);

var _replyBox = __webpack_require__(1106);

var _replyBox2 = _interopRequireDefault(_replyBox);

var _inputTextareaField = __webpack_require__(237);

var _inputTextareaField2 = _interopRequireDefault(_inputTextareaField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReplyBox = function ReplyBox(_ref) {
  var handleSubmit = _ref.handleSubmit,
      form = _ref.form,
      cancel = _ref.cancel;
  return _react2.default.createElement(
    'form',
    { className: _replyBox2.default.replyBox, onSubmit: handleSubmit, action: '' },
    _react2.default.createElement(_reduxForm.Field, { name: 'body', component: _inputTextareaField2.default, placeholder: 'Add your reply...' }),
    _react2.default.createElement(
      _spinnerSubmitContainer2.default,
      { formName: form, styleName: 'secondary' },
      'Reply'
    ),
    _react2.default.createElement(
      _button2.default,
      { onClick: cancel, styleName: 'secondary' },
      'Cancel'
    )
  );
};

ReplyBox.defaultProps = {
  cancel: null
};

ReplyBox.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  form: _propTypes2.default.string.isRequired,
  cancel: _propTypes2.default.func
};

exports.default = ReplyBox;

/***/ }),
/* 856 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _replyButton = __webpack_require__(1107);

var _replyButton2 = _interopRequireDefault(_replyButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReplyButton = function ReplyButton(_ref) {
  var reply = _ref.reply;
  return _react2.default.createElement(
    _button2.default,
    {
      className: _replyButton2.default.replyButton,
      onClick: reply,
      styleName: 'secondary'
    },
    'Reply'
  );
};

ReplyButton.propTypes = {
  reply: _propTypes2.default.func.isRequired
};

exports.default = ReplyButton;

/***/ }),
/* 857 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pluralize = __webpack_require__(593);

var _pluralize2 = _interopRequireDefault(_pluralize);

var _replyContainer = __webpack_require__(860);

var _replyContainer2 = _interopRequireDefault(_replyContainer);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _replies = __webpack_require__(1108);

var _replies2 = _interopRequireDefault(_replies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Replies = function Replies(_ref) {
  var comment = _ref.comment,
      replies = _ref.replies,
      audio = _ref.audio,
      showingReplies = _ref.showingReplies,
      toggleReplies = _ref.toggleReplies;
  return _react2.default.createElement(
    'div',
    null,
    !!replies.totalCount && _react2.default.createElement(
      _button2.default,
      { onClick: toggleReplies, className: _replies2.default.toggleReplies },
      !showingReplies ? _react2.default.createElement(
        'div',
        null,
        'Show ',
        replies.totalCount,
        ' ',
        (0, _pluralize2.default)('reply', replies.totalCount)
      ) : _react2.default.createElement(
        'div',
        null,
        'Hide ',
        (0, _pluralize2.default)('reply', replies.totalCount)
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _replies2.default.replies },
      replies.edges.map(function (_ref2) {
        var node = _ref2.node;
        return _react2.default.createElement(_replyContainer2.default, {
          key: node.commentId,
          reply: node,
          rootComment: comment,
          audio: audio
        });
      })
    )
  );
};

Replies.propTypes = {
  comment: _propTypes2.default.object.isRequired,
  replies: _propTypes2.default.shape({
    totalCount: _propTypes2.default.number.isRequired,
    edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      node: _propTypes2.default.shape({
        commentId: _propTypes2.default.number.isRequired
      })
    }))
  }).isRequired,
  audio: _propTypes2.default.object.isRequired,
  showingReplies: _propTypes2.default.bool.isRequired,
  toggleReplies: _propTypes2.default.func.isRequired
};

exports.default = Replies;

/***/ }),
/* 858 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _replies = __webpack_require__(857);

var _replies2 = _interopRequireDefault(_replies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  comment: function comment() {
    return __webpack_require__(843);
  }
};

var connectionConfig = {
  direction: 'forward',
  query: function query() {
    return __webpack_require__(842);
  },
  getVariables: function getVariables(props, _ref) {
    var count = _ref.count,
        cursor = _ref.cursor;
    return {
      count: count,
      cursor: cursor,
      id: props.comment.id
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.paginationContainer)(fragments, connectionConfig), (0, _recompose.flattenProp)('comment'), (0, _recompose.withStateHandlers)({
  showingReplies: false
}, {
  toggleReplies: function toggleReplies(_ref2, _ref3) {
    var showingReplies = _ref2.showingReplies;
    var relay = _ref3.relay,
        replies = _ref3.replies;
    return function () {
      relay.refetchConnection(!showingReplies ? replies.totalCount : 0);

      return {
        showingReplies: !showingReplies
      };
    };
  }
}))(_replies2.default);

/***/ }),
/* 859 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _found = __webpack_require__(40);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _reply = __webpack_require__(1109);

var _reply2 = _interopRequireDefault(_reply);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _replyBoxContainer = __webpack_require__(413);

var _replyBoxContainer2 = _interopRequireDefault(_replyBoxContainer);

var _commentHeaderContainer = __webpack_require__(412);

var _commentHeaderContainer2 = _interopRequireDefault(_commentHeaderContainer);

var _commentBody = __webpack_require__(410);

var _commentBody2 = _interopRequireDefault(_commentBody);

var _commentControls = __webpack_require__(411);

var _commentControls2 = _interopRequireDefault(_commentControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reply = function Reply(_ref) {
  var reply = _ref.reply,
      audio = _ref.audio,
      rootComment = _ref.rootComment,
      user = _ref.user,
      dateAdded = _ref.dateAdded,
      commentId = _ref.commentId,
      likes = _ref.likes,
      dislikes = _ref.dislikes,
      body = _ref.body,
      originalComment = _ref.originalComment,
      originalCommentExpanded = _ref.originalCommentExpanded,
      toggleOriginalCommentOverflow = _ref.toggleOriginalCommentOverflow;
  return _react2.default.createElement(
    'div',
    { className: _reply2.default.reply },
    _react2.default.createElement(_commentHeaderContainer2.default, { userName: user.userName, dateAdded: dateAdded }),
    _react2.default.createElement(
      _commentBody2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: _reply2.default.userNameContainer },
        _react2.default.createElement(
          _found.Link,
          { to: '/profile/' + originalComment.user.userName },
          '@',
          originalComment.user.userName
        ),
        _react2.default.createElement(
          _button2.default,
          {
            onClick: toggleOriginalCommentOverflow,
            className: _reply2.default.expandOriginalCommentButton
          },
          originalCommentExpanded ? _react2.default.createElement(
            'div',
            null,
            'Collapse'
          ) : _react2.default.createElement(
            'div',
            null,
            'Expand'
          )
        )
      ),
      _react2.default.createElement(
        'blockquote',
        {
          className: (0, _classnames2.default)(_reply2.default.originalComment, originalCommentExpanded && _reply2.default.originalCommentExpanded)
        },
        originalComment.body
      ),
      body
    ),
    _react2.default.createElement(_commentControls2.default, { comment: reply, commentId: commentId, likes: likes, dislikes: dislikes }),
    _react2.default.createElement(_replyBoxContainer2.default, {
      rootComment: rootComment,
      comment: reply,
      audio: audio
    })
  );
};

Reply.propTypes = {
  user: _propTypes2.default.shape({
    userName: _propTypes2.default.string.isRequired
  }).isRequired,
  dateAdded: _propTypes2.default.string.isRequired,
  dislikes: _propTypes2.default.number.isRequired,
  likes: _propTypes2.default.number.isRequired,
  commentId: _propTypes2.default.number.isRequired,
  rootComment: _propTypes2.default.object.isRequired,
  audio: _propTypes2.default.object.isRequired,
  reply: _propTypes2.default.object.isRequired,
  body: _propTypes2.default.string.isRequired,
  originalComment: _propTypes2.default.shape({
    body: _propTypes2.default.string.isRequired,
    user: _propTypes2.default.shape({
      userName: _propTypes2.default.string.isRequired
    }).isRequired
  }).isRequired,
  originalCommentExpanded: _propTypes2.default.bool.isRequired,
  toggleOriginalCommentOverflow: _propTypes2.default.func.isRequired
};

exports.default = Reply;

/***/ }),
/* 860 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _reply = __webpack_require__(859);

var _reply2 = _interopRequireDefault(_reply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  reply: function reply() {
    return __webpack_require__(844);
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.flattenProp)('reply'), (0, _recompose.withStateHandlers)({
  originalCommentExpanded: false
}, {
  toggleOriginalCommentOverflow: function toggleOriginalCommentOverflow(_ref) {
    var originalCommentExpanded = _ref.originalCommentExpanded;
    return function () {
      return {
        originalCommentExpanded: !originalCommentExpanded
      };
    };
  }
}))(_reply2.default);

/***/ }),
/* 861 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _relayRuntime = __webpack_require__(90);

var _getFormattedDate = __webpack_require__(162);

var _getFormattedDate2 = _interopRequireDefault(_getFormattedDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = function mutation() {
  return __webpack_require__(845);
};

var sharedUpdater = function sharedUpdater(store, rootComment, reply) {
  var commentProxy = store.get(rootComment.id);
  var connection = _relayRuntime.ConnectionHandler.getConnection(commentProxy, 'repliesContainer_replies');

  var replies = reply.getLinkedRecord('replies');
  var repliesCount = replies.getValue('totalCount');

  connection.setValue(repliesCount, 'totalCount');

  var edge = _relayRuntime.ConnectionHandler.createEdge(store, connection, reply, 'CommentPayloadEdge');

  _relayRuntime.ConnectionHandler.insertEdgeAfter(connection, edge);
};

var tempID = 0;

exports.default = function (_ref, audio, rootComment, originalComment) {
  var body = _ref.body;

  var variables = {
    input: {
      body: body,
      audioId: audio.audioId,
      originalCommentId: originalComment.commentId
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables, null, function (store) {
    // if (!body) return;

    // const root = store.getRoot();
    // const user = root.getLinkedRecord('user');
    // const originalComment = store.create(`originalComment_${tempID += 1}`, 'originalComment');
    // const comment = store.create(`newComment_${tempID += 1}`, 'comment');
    // const dateAdded = getFormattedDate(new Date());

    // originalComment.setValue(originalCommentId, 'commentId');

    // comment.setValue(tempID * -1, 'commentId');
    // comment.setValue(body, 'body');
    // comment.setLinkedRecord(user, 'user');
    // comment.setLinkedRecord(originalComment, 'originalComment');
    // comment.setValue(dateAdded, 'dateAdded');
    // comment.setValue(0, 'likes');
    // comment.setValue(0, 'dislikes');
    // comment.setValue(0, 'repliesCount');

    // sharedUpdater(store, audio, comment);
  }, function (store) {
    var replyRoot = store.getRootField('comment');
    var reply = replyRoot.getLinkedRecord('comment');

    sharedUpdater(store, rootComment, reply);
  });
};

/***/ }),
/* 862 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _audiosContent = __webpack_require__(1110);

var _audiosContent2 = _interopRequireDefault(_audiosContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudiosContent = function AudiosContent(_ref) {
  var children = _ref.children,
      showingSideBar = _ref.showingSideBar;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_audiosContent2.default.audioContent, showingSideBar && 'showing-side-bar') },
    children
  );
};

AudiosContent.propTypes = {
  children: _propTypes2.default.node.isRequired,
  showingSideBar: _propTypes2.default.bool.isRequired
};

exports.default = AudiosContent;

/***/ }),
/* 863 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _audiosContent = __webpack_require__(862);

var _audiosContent2 = _interopRequireDefault(_audiosContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var audio = _ref.audio;
  return {
    showingSideBar: audio.showingSideBar
  };
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps))(_audiosContent2.default);

/***/ }),
/* 864 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 6aeea5a2b005fac8adc3221739b20a92
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type sendEmailMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    email: string;
    message: string;
    subject: string;
  };
|};
export type sendEmailMutationResponse = {|
  +sendEmail: ?{|
    +clientMutationId: ?string;
  |};
|};
*/

/*
mutation sendEmailMutation(
  $input: SendEmailInput!
) {
  sendEmail(input: $input) {
    clientMutationId
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "SendEmailInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "sendEmailMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SendEmailInput!"
      }],
      "concreteType": "SendEmailPayload",
      "name": "sendEmail",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "sendEmailMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "SendEmailInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "sendEmailMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SendEmailInput!"
      }],
      "concreteType": "SendEmailPayload",
      "name": "sendEmail",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "clientMutationId",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation sendEmailMutation(\n  $input: SendEmailInput!\n) {\n  sendEmail(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 865 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHtmlEmail = __webpack_require__(143);

var _email = __webpack_require__(415);

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmEmail = function ConfirmEmail(_ref) {
  var confirmEmailLink = _ref.confirmEmailLink;
  return _react2.default.createElement(
    _email2.default,
    { title: 'Confirm Email' },
    _react2.default.createElement(
      'p',
      null,
      'Thanks for signing up to SoundVast!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Please confirm your email address to complete your SoundVast registration.'
    ),
    _react2.default.createElement(
      _reactHtmlEmail.A,
      { href: confirmEmailLink },
      'Confirm your email'
    )
  );
};

ConfirmEmail.propTypes = {
  confirmEmailLink: _propTypes2.default.string.isRequired
};

exports.default = ConfirmEmail;

/***/ }),
/* 866 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHtmlEmail = __webpack_require__(143);

var _email = __webpack_require__(415);

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var resetPasswordLink = _ref.resetPasswordLink;
  return _react2.default.createElement(
    _email2.default,
    { title: 'Reset your password' },
    _react2.default.createElement(
      'p',
      null,
      'We received a request to change your password on SoundVast.'
    ),
    _react2.default.createElement(
      _reactHtmlEmail.A,
      { href: resetPasswordLink },
      'Click here to change your password'
    ),
    _react2.default.createElement(
      'p',
      null,
      'If you didn\'t request a password change, you can ignore this message and continue to use your current password. Someone probably typed in your email address by accident.'
    )
  );
};

Message.propTypes = {
  resetPasswordLink: _propTypes2.default.string.isRequired
};

exports.default = Message;

/***/ }),
/* 867 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 1eaa95b2153f5604c63d56b2b7b68e15
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type errorPageContainerQueryResponse = {|
  +quote: ?{| |};
|};
*/

/*
query errorPageContainerQuery {
  quote {
    ...errorPageContainer_quote
    id
  }
}

fragment errorPageContainer_quote on Quote {
  quotation
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "errorPageContainerQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Quote",
      "name": "quote",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "errorPageContainer_quote",
        "args": null
      }],
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "errorPageContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "errorPageContainerQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Quote",
      "name": "quote",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "quotation",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "id",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "query errorPageContainerQuery {\n  quote {\n    ...errorPageContainer_quote\n    id\n  }\n}\n\nfragment errorPageContainer_quote on Quote {\n  quotation\n}\n"
};

module.exports = batch;

/***/ }),
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type errorPageContainer_quote = {|
  +quotation: string;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "errorPageContainer_quote",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "quotation",
    "storageKey": null
  }],
  "type": "Quote"
};

module.exports = fragment;

/***/ }),
/* 869 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(1112);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage(_ref) {
  var status = _ref.status,
      error = _ref.error,
      quotation = _ref.quotation;
  return _react2.default.createElement(
    'div',
    { className: _errorPage2.default.errorPage },
    _react2.default.createElement(
      'h1',
      null,
      'Error ',
      status
    ),
    _react2.default.createElement(
      'div',
      { className: _errorPage2.default.error },
      error
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      quotation
    )
  );
};

ErrorPage.propTypes = {
  status: _propTypes2.default.number.isRequired,
  error: _propTypes2.default.string.isRequired,
  quotation: _propTypes2.default.string.isRequired
};

exports.default = ErrorPage;

/***/ }),
/* 870 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(4);

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _errorPage = __webpack_require__(869);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var status = _ref.status;

  switch (status) {
    case 404:
      return { error: 'The page could not be found.' };
    default:
      return { error: 'An unknown error has occured ¯\\_(ツ)_/¯. We have been notified of the error and have sent Kanye West to investigate it.' };
  }
};

var query = function query() {
  return __webpack_require__(867);
};

var fragments = {
  quote: function quote() {
    return __webpack_require__(868);
  }
};

var enhance = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.flattenProp)('quote'), (0, _recompose.withProps)(createProps));

var ErrorPageContainer = enhance(_errorPage2.default);

var routeConfig = exports.routeConfig = {
  render: function render(_ref2) {
    var props = _ref2.props;
    return props && _react2.default.createElement(ErrorPageContainer, { status: parseInt(props.params.status, 10), quote: props.quote });
  },
  query: query
};

exports.default = ErrorPageContainer;

/***/ }),
/* 871 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 5832b777c3b82ceceac079cb9db91c12
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type flagAudioMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    audioId: number;
    reason: string;
    additionalDetails?: ?string;
  };
|};
export type flagAudioMutationResponse = {|
  +flagAudio: ?{|
    +flag: ?{|
      +id: string;
    |};
  |};
|};
*/

/*
mutation flagAudioMutation(
  $input: FlagAudioInput!
) {
  flagAudio(input: $input) {
    flag {
      id
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "FlagAudioInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "flagAudioMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FlagAudioInput!"
      }],
      "concreteType": "FlagObjectPayload",
      "name": "flagAudio",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Flag",
        "name": "flag",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "flagAudioMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "FlagAudioInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "flagAudioMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FlagAudioInput!"
      }],
      "concreteType": "FlagObjectPayload",
      "name": "flagAudio",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Flag",
        "name": "flag",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation flagAudioMutation(\n  $input: FlagAudioInput!\n) {\n  flagAudio(input: $input) {\n    flag {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 872 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 68d74965c1b2a302cd953859361f9a24
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type flagCommentMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    commentId: number;
    reason: string;
    additionalDetails?: ?string;
  };
|};
export type flagCommentMutationResponse = {|
  +flagComment: ?{|
    +flag: ?{|
      +id: string;
    |};
  |};
|};
*/

/*
mutation flagCommentMutation(
  $input: FlagCommentInput!
) {
  flagComment(input: $input) {
    flag {
      id
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "FlagCommentInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "flagCommentMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FlagCommentInput!"
      }],
      "concreteType": "FlagObjectPayload",
      "name": "flagComment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Flag",
        "name": "flag",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "flagCommentMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "FlagCommentInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "flagCommentMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "FlagCommentInput!"
      }],
      "concreteType": "FlagObjectPayload",
      "name": "flagComment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Flag",
        "name": "flag",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation flagCommentMutation(\n  $input: FlagCommentInput!\n) {\n  flagComment(input: $input) {\n    flag {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 873 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _flagModalContainer = __webpack_require__(419);

var _flagModalContainer2 = _interopRequireDefault(_flagModalContainer);

var _inputTextareaField = __webpack_require__(237);

var _inputTextareaField2 = _interopRequireDefault(_inputTextareaField);

var _inputRadioButtonGroup = __webpack_require__(236);

var _inputRadioButtonGroup2 = _interopRequireDefault(_inputRadioButtonGroup);

var _flagAudioModal = __webpack_require__(1114);

var _flagAudioModal2 = _interopRequireDefault(_flagAudioModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlagAudioModal = function FlagAudioModal(_ref) {
  var onSubmit = _ref.onSubmit,
      isAuthorized = _ref.isAuthorized;
  return _react2.default.createElement(
    _flagModalContainer2.default,
    {
      modalId: 'flagAudio',
      onSubmit: onSubmit,
      isAuthorized: isAuthorized
    },
    _react2.default.createElement(_reduxForm.Field, {
      component: _inputRadioButtonGroup2.default,
      name: 'flag',
      groupClassName: _flagAudioModal2.default.radioButtonGroup,
      options: [{ label: 'Duplicate - An exact duplicate of another audio', id: 'duplicate', customValue: 'duplicate' }, { label: 'Copyright - Breaks copyright laws', id: 'copyright', customValue: 'copyright' }, { label: 'Inappropriate - Content that does not belong on this site', id: 'inappropriate', customValue: 'inappropriate' }]
    }),
    _react2.default.createElement(_reduxForm.Field, {
      name: 'additionalDetails',
      placeholder: 'Any additional details for why this audio is being flagged',
      component: _inputTextareaField2.default,
      className: _flagAudioModal2.default.textarea
    })
  );
};

FlagAudioModal.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired,
  isAuthorized: _propTypes2.default.bool.isRequired
};

exports.default = FlagAudioModal;

/***/ }),
/* 874 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _flagAudioModal = __webpack_require__(873);

var _flagAudioModal2 = _interopRequireDefault(_flagAudioModal);

var _actions = __webpack_require__(62);

var _flagAudioMutation = __webpack_require__(875);

var _flagAudioMutation2 = _interopRequireDefault(_flagAudioMutation);

var _actions2 = __webpack_require__(417);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var modal = _ref.modal;
  return {
    audioId: modal.id
  };
};

var handlers = {
  onSubmit: function onSubmit(_ref2) {
    var dispatch = _ref2.dispatch,
        audioId = _ref2.audioId;
    return function (input) {
      return (0, _flagAudioMutation2.default)(input, audioId).then(function () {
        dispatch((0, _actions2.showFlaggedPopup)());
        dispatch((0, _actions.hideModal)());
      }).catch(function (error) {
        if (!input.reason) {
          throw new _reduxForm.SubmissionError({
            _error: ['A reason for flagging is required']
          });
        }
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _recompose.setPropTypes)({
  audioId: _propTypes2.default.number
}), (0, _recompose.withHandlers)(handlers))(_flagAudioModal2.default);

/***/ }),
/* 875 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(871);
};

exports.default = function (_ref, audioId) {
  var reason = _ref.reason,
      additionalDetails = _ref.additionalDetails;

  var variables = {
    input: {
      audioId: audioId,
      reason: reason,
      additionalDetails: additionalDetails
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables);
};

/***/ }),
/* 876 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _flagModalContainer = __webpack_require__(419);

var _flagModalContainer2 = _interopRequireDefault(_flagModalContainer);

var _inputRadioButtonGroup = __webpack_require__(236);

var _inputRadioButtonGroup2 = _interopRequireDefault(_inputRadioButtonGroup);

var _flagCommentModal = __webpack_require__(1115);

var _flagCommentModal2 = _interopRequireDefault(_flagCommentModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlagCommentModal = function FlagCommentModal(_ref) {
  var onSubmit = _ref.onSubmit,
      isAuthorized = _ref.isAuthorized;
  return _react2.default.createElement(
    _flagModalContainer2.default,
    {
      modalId: 'flagComment',
      onSubmit: onSubmit,
      isAuthorized: isAuthorized
    },
    _react2.default.createElement(_reduxForm.Field, {
      component: _inputRadioButtonGroup2.default,
      name: 'flag',
      groupClassName: _flagCommentModal2.default.radioButtonGroup,
      options: [{ label: 'Spam - Advertising, spamming or bots', id: 'spam', customValue: 'spam' }]
    })
  );
};

FlagCommentModal.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired,
  isAuthorized: _propTypes2.default.bool.isRequired
};

exports.default = FlagCommentModal;

/***/ }),
/* 877 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _flagCommentModal = __webpack_require__(876);

var _flagCommentModal2 = _interopRequireDefault(_flagCommentModal);

var _actions = __webpack_require__(62);

var _flagCommentMutation = __webpack_require__(878);

var _flagCommentMutation2 = _interopRequireDefault(_flagCommentMutation);

var _actions2 = __webpack_require__(417);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var modal = _ref.modal;
  return {
    commentId: modal.id
  };
};

var handlers = {
  onSubmit: function onSubmit(_ref2) {
    var dispatch = _ref2.dispatch,
        commentId = _ref2.commentId;
    return function (input) {
      return (0, _flagCommentMutation2.default)(input, commentId).then(function () {
        dispatch((0, _actions2.showFlaggedPopup)());
        dispatch((0, _actions.hideModal)());
      }).catch(function (error) {
        if (!input.reason) {
          throw new _reduxForm.SubmissionError({
            _error: ['A reason for flagging is required']
          });
        }
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _recompose.setPropTypes)({
  commentId: _propTypes2.default.number
}), (0, _recompose.withHandlers)(handlers))(_flagCommentModal2.default);

/***/ }),
/* 878 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(872);
};

exports.default = function (_ref, commentId) {
  var reason = _ref.reason,
      additionalDetails = _ref.additionalDetails;

  var variables = {
    input: {
      commentId: commentId,
      reason: reason,
      additionalDetails: additionalDetails
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables);
};

/***/ }),
/* 879 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modalContainer = __webpack_require__(160);

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _spinnerSubmitContainer = __webpack_require__(159);

var _spinnerSubmitContainer2 = _interopRequireDefault(_spinnerSubmitContainer);

var _flagModal = __webpack_require__(1116);

var _flagModal2 = _interopRequireDefault(_flagModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlagModal = function FlagModal(_ref) {
  var modalId = _ref.modalId,
      handleSubmit = _ref.handleSubmit,
      form = _ref.form,
      isAuthorized = _ref.isAuthorized,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    _modalContainer2.default,
    { authRequired: true, title: 'Flag.', id: modalId, isAuthorized: isAuthorized, className: className },
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, action: '' },
      _react2.default.createElement(
        'div',
        { className: _flagModal2.default.fields },
        children
      ),
      _react2.default.createElement(
        _spinnerSubmitContainer2.default,
        { formName: form },
        'Flag'
      )
    )
  );
};

FlagModal.defaultProps = {
  className: null
};

FlagModal.propTypes = {
  modalId: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  form: _propTypes2.default.string.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  isAuthorized: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string
};

exports.default = FlagModal;

/***/ }),
/* 880 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJplayer = __webpack_require__(60);

var _reactJplayer2 = _interopRequireDefault(_reactJplayer);

var _reactJplaylist = __webpack_require__(155);

var _reactJplaylist2 = _interopRequireDefault(_reactJplaylist);

var _reactJplayerUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var jPlayerOptions = {
  id: 'FooterPlaylist',
  verticalVolume: true
};

var jPlaylistOptions = {
  hidePlaylist: true
};

(0, _reactJplaylist.initializeOptions)(jPlayerOptions, jPlaylistOptions);

var FooterPlaylist = function FooterPlaylist(_ref) {
  var isPlaylistEmpty = _ref.isPlaylistEmpty;

  var jPlayerClassName = (0, _classnames2.default)('jp-sleek', _defineProperty({}, _reactJplayerUtils.classes.HIDDEN, isPlaylistEmpty));

  return _react2.default.createElement(
    _reactJplaylist2.default,
    { id: jPlayerOptions.id },
    _react2.default.createElement(
      _reactJplayer2.default,
      { className: jPlayerClassName },
      _react2.default.createElement(_reactJplayer.Audio, null),
      _react2.default.createElement(
        _reactJplayer.Gui,
        null,
        _react2.default.createElement(
          'div',
          { className: 'jp-controls jp-icon-controls' },
          _react2.default.createElement(
            _reactJplaylist.Previous,
            null,
            _react2.default.createElement('i', { className: 'fa fa-step-backward' })
          ),
          _react2.default.createElement(
            _reactJplayer.Play,
            null,
            _react2.default.createElement('i', { className: 'fa' })
          ),
          _react2.default.createElement(
            _reactJplaylist.Next,
            null,
            _react2.default.createElement('i', { className: 'fa fa-step-forward' })
          ),
          _react2.default.createElement(
            _reactJplaylist.Repeat,
            null,
            _react2.default.createElement('i', { className: 'fa' }),
            _react2.default.createElement('i', { className: 'fa fa-repeat' })
          ),
          _react2.default.createElement(
            _reactJplaylist.Shuffle,
            null,
            _react2.default.createElement('i', { className: 'fa fa-random' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-volume-container' },
            _react2.default.createElement(
              _reactJplayer.Mute,
              null,
              _react2.default.createElement('i', { className: 'fa' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'jp-volume-slider' },
              _react2.default.createElement(
                'div',
                { className: 'jp-volume-bar-container' },
                _react2.default.createElement(_reactJplayer.VolumeBar, null)
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-playlist-container' },
            _react2.default.createElement(
              _reactJplaylist.Playlist,
              null,
              _react2.default.createElement(_reactJplaylist.Remove, null),
              _react2.default.createElement(
                _reactJplaylist.MediaLink,
                null,
                _react2.default.createElement(_reactJplaylist.Title, null)
              )
            ),
            _react2.default.createElement(
              _reactJplaylist.TogglePlaylist,
              null,
              _react2.default.createElement('i', { className: 'fa fa-ellipsis-h' })
            )
          ),
          _react2.default.createElement(
            _reactJplayer.FullScreen,
            null,
            _react2.default.createElement('i', { className: 'fa fa-expand' })
          ),
          _react2.default.createElement(
            _reactJplayer.Download,
            null,
            _react2.default.createElement('i', { className: 'fa fa-download' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'jp-title-container' },
            _react2.default.createElement(_reactJplayer.Poster, null),
            _react2.default.createElement(_reactJplayer.Title, null)
          )
        ),
        _react2.default.createElement(_reactJplayer.BrowserUnsupported, null)
      )
    )
  );
};

FooterPlaylist.propTypes = {
  isPlaylistEmpty: _propTypes2.default.bool.isRequired
};

exports.default = FooterPlaylist;

/***/ }),
/* 881 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _footerPlaylist = __webpack_require__(880);

var _footerPlaylist2 = _interopRequireDefault(_footerPlaylist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var jPlaylists = _ref.jPlaylists;
  return {
    isPlaylistEmpty: jPlaylists.FooterPlaylist.playlist.length === 0
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_footerPlaylist2.default);

/***/ }),
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash d9029d55c6296c5c784ea12cb2ed1bda
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type genresContainerQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{| |}>;
|};
*/

/*
query genresContainerQuery {
  genres {
    ...genresContainer_genres
    id
  }
}

fragment genresContainer_genres on Genre {
  id
  name
  coverImageUrl
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "genresContainerQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Genre",
      "name": "genres",
      "plural": true,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "genresContainer_genres",
        "args": null
      }],
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "genresContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "genresContainerQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Genre",
      "name": "genres",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "id",
        "storageKey": null
      }, {
        "kind": "InlineFragment",
        "type": "Genre",
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "coverImageUrl",
          "storageKey": null
        }]
      }],
      "storageKey": null
    }]
  },
  "text": "query genresContainerQuery {\n  genres {\n    ...genresContainer_genres\n    id\n  }\n}\n\nfragment genresContainer_genres on Genre {\n  id\n  name\n  coverImageUrl\n}\n"
};

module.exports = batch;

/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type genresContainer_genres = $ReadOnlyArray<{|
  +id: ?string;
  +name: string;
  +coverImageUrl: string;
|}>;
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "genresContainer_genres",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "name",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "coverImageUrl",
    "storageKey": null
  }],
  "type": "Genre"
};

module.exports = fragment;

/***/ }),
/* 884 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _genres = __webpack_require__(1117);

var _genres2 = _interopRequireDefault(_genres);

var _imageButton = __webpack_require__(940);

var _imageButton2 = _interopRequireDefault(_imageButton);

var _coverImage = __webpack_require__(230);

var _coverImage2 = _interopRequireDefault(_coverImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Genre = function Genre(_ref) {
  var onClick = _ref.onClick,
      name = _ref.name,
      coverImageUrl = _ref.coverImageUrl;
  return _react2.default.createElement(
    _imageButton2.default,
    { className: _genres2.default.genre, styleName: 'secondary', onClick: onClick },
    _react2.default.createElement(_coverImage2.default, { coverImageUrl: coverImageUrl }),
    _react2.default.createElement(
      'div',
      null,
      name
    )
  );
};

Genre.propTypes = {
  name: _propTypes2.default.string.isRequired,
  coverImageUrl: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

exports.default = Genre;

/***/ }),
/* 885 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _found = __webpack_require__(40);

var _genre = __webpack_require__(884);

var _genre2 = _interopRequireDefault(_genre);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  url: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired
};

var handlers = {
  onClick: function onClick(_ref) {
    var match = _ref.match,
        router = _ref.router,
        url = _ref.url,
        name = _ref.name;
    return function () {
      var locationInformation = {
        pathname: url,
        query: {
          genre: name
        }
      };

      if (match.location.state) {
        locationInformation.query = _extends({}, match.location.state.queries, locationInformation.query);
      }

      router.push(locationInformation);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), _found.withRouter, (0, _recompose.withHandlers)(handlers))(_genre2.default);

/***/ }),
/* 886 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grid = __webpack_require__(435);

var _grid2 = _interopRequireDefault(_grid);

var _genreContainer = __webpack_require__(885);

var _genreContainer2 = _interopRequireDefault(_genreContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Genres = function Genres(_ref) {
  var genres = _ref.genres,
      typeUrl = _ref.typeUrl;
  return _react2.default.createElement(
    _grid2.default,
    null,
    genres.map(function (genre) {
      return _react2.default.createElement(_genreContainer2.default, {
        key: genre.id,
        name: genre.name,
        coverImageUrl: genre.coverImageUrl,
        url: '/' + typeUrl
      });
    })
  );
};

Genres.propTypes = {
  genres: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    coverImageUrl: _propTypes2.default.string.isRequired
  })).isRequired,
  typeUrl: _propTypes2.default.string.isRequired
};

exports.default = Genres;

/***/ }),
/* 887 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRelay = __webpack_require__(9);

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _genres = __webpack_require__(886);

var _genres2 = _interopRequireDefault(_genres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  return __webpack_require__(882);
};

var fragments = {
  genres: function genres() {
    return __webpack_require__(883);
  }
};

var enhance = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments));

var GenresContainer = enhance(_genres2.default);

var routeConfig = exports.routeConfig = {
  Component: GenresContainer,
  query: query,
  render: function render(_ref) {
    var props = _ref.props;
    return props && _react2.default.createElement(GenresContainer, { genres: props.genres, typeUrl: 'radios' });
  }
};

exports.default = GenresContainer;

/***/ }),
/* 888 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type headerContainer_user = {|
  +userName: string;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "headerContainer_user",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "userName",
    "storageKey": null
  }],
  "type": "ApplicationUser"
};

module.exports = fragment;

/***/ }),
/* 889 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _logo = __webpack_require__(899);

var _logo2 = _interopRequireDefault(_logo);

var _legal = __webpack_require__(897);

var _legal2 = _interopRequireDefault(_legal);

var _header = __webpack_require__(127);

var _header2 = _interopRequireDefault(_header);

var _dropdownContainer = __webpack_require__(232);

var _dropdownContainer2 = _interopRequireDefault(_dropdownContainer);

var _popupsContainer = __webpack_require__(438);

var _popupsContainer2 = _interopRequireDefault(_popupsContainer);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _modalButtonContainer = __webpack_require__(117);

var _modalButtonContainer2 = _interopRequireDefault(_modalButtonContainer);

var _searchContainer = __webpack_require__(425);

var _searchContainer2 = _interopRequireDefault(_searchContainer);

var _headerGenreLinkContainer = __webpack_require__(420);

var _headerGenreLinkContainer2 = _interopRequireDefault(_headerGenreLinkContainer);

var _headerUploadLink = __webpack_require__(424);

var _headerUploadLink2 = _interopRequireDefault(_headerUploadLink);

var _headerTermsLink = __webpack_require__(423);

var _headerTermsLink2 = _interopRequireDefault(_headerTermsLink);

var _headerPrivacyLink = __webpack_require__(422);

var _headerPrivacyLink2 = _interopRequireDefault(_headerPrivacyLink);

var _headerHomeLink = __webpack_require__(421);

var _headerHomeLink2 = _interopRequireDefault(_headerHomeLink);

var _logoutContainer = __webpack_require__(407);

var _logoutContainer2 = _interopRequireDefault(_logoutContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var userName = _ref.userName;
  return _react2.default.createElement(
    'header',
    { className: _header2.default.header },
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        _headerHomeLink2.default,
        null,
        _react2.default.createElement(_logo2.default, { className: _header2.default.logoIcon })
      ),
      _react2.default.createElement(
        _headerGenreLinkContainer2.default,
        null,
        'Genres'
      ),
      _react2.default.createElement(
        _headerUploadLink2.default,
        null,
        'Upload'
      ),
      _react2.default.createElement(_searchContainer2.default, {
        className: _header2.default.search
      }),
      userName ? _react2.default.createElement(
        _dropdownContainer2.default,
        {
          titleCallback: function titleCallback(onClick) {
            return _react2.default.createElement(
              _button2.default,
              { className: _header2.default.dropdownTitle, styleName: 'secondary', onClick: onClick },
              userName
            );
          },
          className: _header2.default.navButton
        },
        _react2.default.createElement(_logoutContainer2.default, null)
      ) : [_react2.default.createElement(
        _modalButtonContainer2.default,
        { key: 0, styleName: 'secondary', className: _header2.default.navButton, modalId: 'login' },
        'Login'
      ), _react2.default.createElement(
        _modalButtonContainer2.default,
        { key: 1, styleName: 'secondary', className: _header2.default.navButton, modalId: 'register' },
        'Register'
      )],
      _react2.default.createElement(_popupsContainer2.default, null),
      _react2.default.createElement(
        _dropdownContainer2.default,
        {
          titleCallback: function titleCallback(onClick) {
            return _react2.default.createElement(
              _button2.default,
              { title: 'Legal', className: _header2.default.dropdownTitle, styleName: 'secondary', onClick: onClick },
              _react2.default.createElement(_legal2.default, { className: _header2.default.legalIcon })
            );
          },
          className: _header2.default.navButton
        },
        _react2.default.createElement(_headerTermsLink2.default, null),
        _react2.default.createElement(_headerPrivacyLink2.default, null)
      )
    )
  );
};

Header.defaultProps = {
  userName: null
};

Header.propTypes = {
  userName: _propTypes2.default.string
};

exports.default = Header;

/***/ }),
/* 890 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _header = __webpack_require__(889);

var _header2 = _interopRequireDefault(_header);

var _withDisplayType = __webpack_require__(977);

var _withDisplayType2 = _interopRequireDefault(_withDisplayType);

var _mobileHeader = __webpack_require__(892);

var _mobileHeader2 = _interopRequireDefault(_mobileHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  user: function user() {
    return __webpack_require__(888);
  }
};

var enhance = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), _withDisplayType2.default, (0, _recompose.flattenProp)('user'), (0, _recompose.branch)(function (_ref) {
  var displayType = _ref.displayType;
  return displayType.isMobile;
}, (0, _recompose.renderComponent)(_mobileHeader2.default)));

var HeaderContainer = enhance(_header2.default);

exports.default = HeaderContainer;

/***/ }),
/* 891 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _linkButton = __webpack_require__(116);

var _linkButton2 = _interopRequireDefault(_linkButton);

var _header = __webpack_require__(127);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderGenreLink = function HeaderGenreLink(_ref) {
  var genresLocationInformation = _ref.genresLocationInformation,
      title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    _linkButton2.default,
    {
      to: genresLocationInformation,
      styleName: 'secondary',
      className: _header2.default.navButton,
      title: title
    },
    children
  );
};

HeaderGenreLink.defaultProps = {
  title: null
};

HeaderGenreLink.propTypes = {
  children: _propTypes2.default.node.isRequired,
  genresLocationInformation: _propTypes2.default.shape({
    pathname: _propTypes2.default.string.isRequired
  }).isRequired,
  title: _propTypes2.default.string
};

exports.default = HeaderGenreLink;

/***/ }),
/* 892 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _logoSmall = __webpack_require__(900);

var _logoSmall2 = _interopRequireDefault(_logoSmall);

var _user = __webpack_require__(908);

var _user2 = _interopRequireDefault(_user);

var _upload = __webpack_require__(907);

var _upload2 = _interopRequireDefault(_upload);

var _stack = __webpack_require__(906);

var _stack2 = _interopRequireDefault(_stack);

var _header = __webpack_require__(127);

var _header2 = _interopRequireDefault(_header);

var _popupsContainer = __webpack_require__(438);

var _popupsContainer2 = _interopRequireDefault(_popupsContainer);

var _searchContainer = __webpack_require__(425);

var _searchContainer2 = _interopRequireDefault(_searchContainer);

var _headerGenreLinkContainer = __webpack_require__(420);

var _headerGenreLinkContainer2 = _interopRequireDefault(_headerGenreLinkContainer);

var _headerUploadLink = __webpack_require__(424);

var _headerUploadLink2 = _interopRequireDefault(_headerUploadLink);

var _headerHomeLink = __webpack_require__(421);

var _headerHomeLink2 = _interopRequireDefault(_headerHomeLink);

var _dropdownContainer = __webpack_require__(232);

var _dropdownContainer2 = _interopRequireDefault(_dropdownContainer);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _logoutContainer = __webpack_require__(407);

var _logoutContainer2 = _interopRequireDefault(_logoutContainer);

var _headerTermsLink = __webpack_require__(423);

var _headerTermsLink2 = _interopRequireDefault(_headerTermsLink);

var _headerPrivacyLink = __webpack_require__(422);

var _headerPrivacyLink2 = _interopRequireDefault(_headerPrivacyLink);

var _modalButtonContainer = __webpack_require__(117);

var _modalButtonContainer2 = _interopRequireDefault(_modalButtonContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MobileHeader = function MobileHeader(_ref) {
  var userName = _ref.userName;
  return _react2.default.createElement(
    'header',
    { className: _header2.default.header },
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        _headerHomeLink2.default,
        null,
        _react2.default.createElement(_logoSmall2.default, { className: _header2.default.smallLogoIcon })
      ),
      _react2.default.createElement(
        _headerGenreLinkContainer2.default,
        { title: 'Genres' },
        _react2.default.createElement(_stack2.default, { className: _header2.default.genreIcon })
      ),
      _react2.default.createElement(
        _headerUploadLink2.default,
        { title: 'Upload' },
        _react2.default.createElement(_upload2.default, { className: _header2.default.uploadIcon })
      ),
      _react2.default.createElement(_searchContainer2.default, {
        className: _header2.default.search
      }),
      _react2.default.createElement(
        _dropdownContainer2.default,
        {
          titleCallback: function titleCallback(onClick) {
            return _react2.default.createElement(
              _button2.default,
              { title: userName, className: _header2.default.dropdownTitle, styleName: 'secondary', onClick: onClick },
              _react2.default.createElement(_user2.default, { className: _header2.default.userIcon })
            );
          },
          className: _header2.default.navButton
        },
        userName ? _react2.default.createElement(_logoutContainer2.default, null) : [_react2.default.createElement(
          _modalButtonContainer2.default,
          { key: 0, modalId: 'login' },
          'Login'
        ), _react2.default.createElement(
          _modalButtonContainer2.default,
          { key: 1, modalId: 'register' },
          'Register'
        )],
        _react2.default.createElement(_headerTermsLink2.default, null),
        _react2.default.createElement(_headerPrivacyLink2.default, null)
      ),
      _react2.default.createElement(_popupsContainer2.default, null)
    )
  );
};

MobileHeader.defaultProps = {
  userName: null
};

MobileHeader.propTypes = {
  userName: _propTypes2.default.string
};

exports.default = MobileHeader;

/***/ }),
/* 893 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _search = __webpack_require__(903);

var _search2 = _interopRequireDefault(_search);

var _search3 = __webpack_require__(1118);

var _search4 = _interopRequireDefault(_search3);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function Search(_ref) {
  var handleSubmit = _ref.handleSubmit,
      className = _ref.className;
  return _react2.default.createElement(
    'form',
    {
      onSubmit: handleSubmit,
      action: '',
      className: (0, _classnames2.default)(_search4.default.search, className)
    },
    _react2.default.createElement(_reduxForm.Field, {
      placeholder: 'Search',
      name: 'search',
      id: 'search',
      component: 'input',
      className: _search4.default.searchField
    }),
    _react2.default.createElement(
      _button2.default,
      { title: 'Search', styleName: 'secondary', className: _search4.default.searchButton },
      _react2.default.createElement(_search2.default, { className: _search4.default.searchIcon })
    )
  );
};

Search.defaultProps = {
  className: null
};

Search.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string
};

exports.default = Search;

/***/ }),
/* 894 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CommentsIcon = function CommentsIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '36', height: '32', viewBox: '0 0 36 32' }),
    _react2.default.createElement('path', { d: 'M34 28.161c0 1.422.813 2.653 2 3.256v.498c-.332.045-.671.07-1.016.07-2.125 0-4.042-.892-5.398-2.321-.819.218-1.688.336-2.587.336-4.971 0-9-3.582-9-8s4.029-8 9-8 9 3.582 9 8c0 1.73-.618 3.331-1.667 4.64-.213.463-.333.979-.333 1.522zM16 0c8.702 0 15.781 5.644 15.995 12.672-1.537-.685-3.237-1.047-4.995-1.047-2.986 0-5.807 1.045-7.942 2.943-2.214 1.968-3.433 4.607-3.433 7.432 0 1.396.298 2.747.867 3.993-.163.004-.327.007-.492.007-.849 0-1.682-.054-2.495-.158C10.068 29.279 5.966 29.895 2 29.986v-.841C4.142 28.096 6 26.184 6 24c0-.305-.024-.604-.068-.897C2.313 20.72 0 17.079 0 13 0 5.82 7.163 0 16 0z' })
  );
};

CommentsIcon.defaultProps = {
  className: null
};

CommentsIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = CommentsIcon;

/***/ }),
/* 895 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CrossIcon = function CrossIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M13.957 3.457l-1.414-1.414L8 6.586 3.457 2.043 2.043 3.457 6.586 8l-4.543 4.543 1.414 1.414L8 9.414l4.543 4.543 1.414-1.414L9.414 8z' })
  );
};

CrossIcon.defaultProps = {
  className: null
};

CrossIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = CrossIcon;

/***/ }),
/* 896 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DislikeIcon = function DislikeIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M1.5 7C.359 7 1 4 2 4c-.5 0 0-2.5 1-2.5C3 .5 4 0 5 0c4.224 0 2.739 1.057 7 1.5v8c-3.764 1.129-7.5 3.96-7.5 6.5-.828 0-3-1 0-6h-3c-1.5 0-1-3 0-3zM13 9.5v-8h-1V1h2c.55 0 1 .675 1 1.5v6c0 .825-.45 1.5-1 1.5h-2v-.5h1z' })
  );
};

DislikeIcon.defaultProps = {
  className: null
};

DislikeIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = DislikeIcon;

/***/ }),
/* 897 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LegalIcon = function LegalIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M6 7.5V7H0v.5C0 8.328.672 9 1.5 9h3C5.328 9 6 8.328 6 7.5zm4 0c0 .828.672 1.5 1.5 1.5h3c.828 0 1.5-.672 1.5-1.5V7h-6v.5z' }),
    _react2.default.createElement('path', { d: 'M9 2h3.15l-2.087 3.757c-.134.241-.047.546.194.68s.546.047.68-.194L13 2.53l2.063 3.713c.091.164.262.257.438.257.082 0 .165-.02.242-.063.241-.134.328-.439.194-.68l-2.5-4.5C13.349 1.098 13.182 1 13 1H9c0-.552-.448-1-1-1S7 .448 7 1H3c-.182 0-.349.098-.437.257l-2.5 4.5c-.134.241-.047.546.194.68s.546.047.68-.194L3 2.53l2.063 3.713c.091.164.262.257.438.257.082 0 .165-.02.242-.063.241-.134.328-.439.194-.68L3.85 2H7v12l-3 1v1h8v-1l-3-1V2z' })
  );
};

LegalIcon.defaultProps = {
  className: null
};

LegalIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = LegalIcon;

/***/ }),
/* 898 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LikeIcon = function LikeIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M14.5 9c1.141 0 .5 3-.5 3 .5 0 0 2.5-1 2.5 0 1-1 1.5-2 1.5-4.224 0-2.739-1.057-7-1.5v-8c3.764-1.129 7.5-3.96 7.5-6.5.828 0 3 1 0 6h3c1.5 0 1 3 0 3zM3 6.5v8h1v.5H2c-.55 0-1-.675-1-1.5v-6C1 6.675 1.45 6 2 6h2v.5H3z' })
  );
};

LikeIcon.defaultProps = {
  className: null
};

LikeIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = LikeIcon;

/***/ }),
/* 899 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LogoIcon = function LogoIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { height: '159.64px', width: '932.62665px', viewBox: '0 0 932.62665 159.64', id: 'svg2' }),
    _react2.default.createElement('metadata', { id: 'metadata8' }),
    _react2.default.createElement('defs', { id: 'defs6' }),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(1.3333333,0,0,-1.3333333,0,159.64)', id: 'g10' },
      _react2.default.createElement(
        'g',
        { transform: 'scale(0.1)', id: 'g12' },
        _react2.default.createElement('path', { id: 'path14', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 0,315.715 104.023,124.598 c 72.016,-59.438 147.454,-97.157 238.899,-97.157 72.016,0 115.457,28.571 115.457,75.438 v 2.285 c 0,44.582 -27.441,67.441 -161.176,101.738 C 136.027,563.77 32.0039,608.344 32.0039,767.238 v 2.282 c 0,145.175 116.5941,241.19 280.0621,241.19 116.59,0 216.039,-36.577 297.192,-101.73 L 517.816,776.379 c -70.875,49.156 -140.597,78.879 -208.043,78.879 -67.441,0 -102.878,-30.863 -102.878,-69.735 v -2.281 c 0,-52.582 34.296,-69.734 172.613,-105.164 C 541.824,635.785 633.27,577.48 633.27,438.031 v -2.293 C 633.27,276.855 512.102,187.691 339.496,187.691 218.332,187.691 96.0156,229.988 0,315.715' }),
        _react2.default.createElement('path', { id: 'path16', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 1902.07,542.051 v 457.23 h 176.04 V 546.617 c 0,-130.304 65.15,-197.746 172.61,-197.746 107.44,0 172.61,65.152 172.61,192.031 v 458.379 h 176.02 V 547.766 c 0,-242.34 -136.03,-361.215 -350.93,-361.215 -214.9,0 -346.35,120.027 -346.35,355.5' }),
        _react2.default.createElement('path', { id: 'path18', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 2693.1,999.281 h 162.33 L 3230.36,506.613 V 999.281 H 3404.1 V 199.125 h -149.74 l -387.5,508.668 V 199.125 H 2693.1 v 800.156' }),
        _react2.default.createElement('path', { id: 'path20', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 3686.48,840.398 v -482.39 h 136.03 c 144.01,0 241.19,97.168 241.19,238.906 v 2.293 c 0,141.742 -97.18,241.191 -241.19,241.191 z m -176.04,158.883 h 312.07 c 251.48,0 425.21,-172.605 425.21,-397.793 v -2.281 c 0,-225.195 -173.73,-400.082 -425.21,-400.082 h -312.07 v 800.156' }),
        _react2.default.createElement('path', { id: 'path22', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 4267.18,999.281 h 100.6 L 4652.4,310 4938.17,999.281 h 97.17 L 4691.27,193.41 h -80.02 l -344.07,805.871' }),
        _react2.default.createElement('path', { id: 'path24', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'M 5497.06,492.895 5315.31,899.836 5132.43,492.895 Z M 5274.16,1005 h 84.59 l 364.64,-805.875 h -97.15 L 5532.5,410.59 h -435.52 l -94.87,-211.465 h -92.59 L 5274.16,1005' }),
        _react2.default.createElement('path', { id: 'path26', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 5741.84,315.715 56,66.301 c 83.45,-75.438 163.47,-113.168 274.34,-113.168 107.46,0 178.32,57.156 178.32,136.027 v 2.293 c 0,74.297 -40,116.59 -208.03,152.027 -184.04,40.012 -268.63,99.45 -268.63,230.903 v 2.293 c 0,125.738 110.87,218.319 262.91,218.319 116.59,0 200.04,-33.144 281.2,-98.308 l -52.58,-69.722 c -74.3,60.586 -148.6,86.879 -230.9,86.879 -104.03,0 -170.34,-57.157 -170.34,-129.172 v -2.282 c 0,-75.453 41.16,-117.746 217.19,-155.464 178.32,-38.871 260.63,-104.02 260.63,-226.328 v -2.29 c 0,-137.168 -114.31,-226.332 -273.2,-226.332 -126.88,0 -230.9,42.297 -326.91,128.024' }),
        _react2.default.createElement('path', { id: 'path28', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 6634.6,915.836 h -268.63 v 83.445 h 628.71 V 915.836 H 6726.05 V 199.125 h -91.45 v 716.711' }),
        _react2.default.createElement('path', { id: 'path30', style: { fill: '#436ebf', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'm 851.367,598.633 c 0,220.476 179.373,399.844 399.843,399.844 v 198.783 c -330.608,0 -598.624,-268.014 -598.624,-598.627 0,-179.207 78.848,-339.906 203.625,-449.613 L 993.43,293.316 C 906.629,366.723 851.367,476.32 851.367,598.633' }),
        _react2.default.createElement('path', { id: 'path32', style: { fill: '#2b53ac', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'M 1251.21,1197.26 V 998.477 c 220.48,0 399.85,-179.368 399.85,-399.844 0,-220.481 -179.37,-399.848 -399.85,-399.848 -98.16,0 -188.12,35.621 -257.78,94.531 L 856.211,149.02 C 961.633,56.3281 1099.81,0 1251.21,0 c 330.62,0 598.63,268.02 598.63,598.633 0,330.613 -268.01,598.627 -598.63,598.627' }),
        _react2.default.createElement('path', { id: 'path34', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }, d: 'M 1096.77,841.418 1517.28,598.633 1096.77,355.844 v 485.574' })
      )
    )
  );
};

LogoIcon.defaultProps = {
  className: null
};

LogoIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = LogoIcon;

/***/ }),
/* 900 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LogoSmall = function LogoSmall(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 520 520', height: '520', width: '520', xmlSpace: 'preserve', id: 'svg2', version: '1.1' }),
    _react2.default.createElement('metadata', { id: 'metadata8' }),
    _react2.default.createElement('defs', { id: 'defs6' }),
    _react2.default.createElement(
      'g',
      { transform: 'matrix(1.3333333,0,0,-1.3333333,0,520)', id: 'g10' },
      _react2.default.createElement(
        'g',
        { transform: 'scale(0.1)', id: 'g12' },
        _react2.default.createElement('path', { id: 'path16', style: { fill: '#436ebf', fillOpacity: 1, fillRule: 'nonzero', sroke: 'none' }, d: 'm 958.227,1950 c 0,546.87 444.903,991.77 991.773,991.77 v 493.05 c -820.05,0 -1484.824,-664.77 -1484.824,-1484.82 0,-444.5 195.574,-843.09 505.066,-1115.211 L 1310.59,1192.7 c -215.3,182.07 -352.363,453.92 -352.363,757.3' }),
        _react2.default.createElement('path', { id: 'path18', style: { fill: '#2b53ac', fillOpacity: 1, fillRule: 'nonzero', sroke: 'none' }, d: 'm 1950,3434.82 v -493.05 c 546.87,0 991.77,-444.9 991.77,-991.77 0,-546.87 -444.9,-991.77 -991.77,-991.77 -243.49,0 -466.62,88.35 -639.41,234.47 L 970.242,834.789 C 1231.73,604.879 1574.45,465.172 1950,465.172 c 820.05,0 1484.83,664.778 1484.83,1484.828 0,820.05 -664.78,1484.82 -1484.83,1484.82' }),
        _react2.default.createElement('path', { id: 'path20', style: { fill: '#133345', fillOpacity: 1, fillRule: 'nonzero', sroke: 'none' }, d: 'M 1566.91,2552.2 2609.95,1950 1566.91,1347.8 v 1204.4' })
      )
    )
  );
};

LogoSmall.defaultProps = {
  className: null
};

LogoSmall.propTypes = {
  className: _propTypes2.default.string
};

exports.default = LogoSmall;

/***/ }),
/* 901 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PauseIcon = function PauseIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: '438.536px', height: '438.536px', viewBox: '0 0 438.536 438.536' }),
    _react2.default.createElement('path', { d: 'M164.453,0H18.276C13.324,0,9.041,1.807,5.425,5.424C1.808,9.04,0.001,13.322,0.001,18.271v401.991c0,4.948,1.807,9.233,5.424,12.847c3.619,3.617,7.902,5.428,12.851,5.428h146.181c4.949,0,9.231-1.811,12.847-5.428c3.617-3.613,5.424-7.898,5.424-12.847V18.271c0-4.952-1.807-9.231-5.428-12.847C173.685,1.807,169.402,0,164.453,0z' }),
    _react2.default.createElement('path', { d: 'M433.113,5.424C429.496,1.807,425.215,0,420.267,0H274.086c-4.949,0-9.237,1.807-12.847,5.424c-3.621,3.615-5.432,7.898-5.432,12.847v401.991c0,4.948,1.811,9.233,5.432,12.847c3.609,3.617,7.897,5.428,12.847,5.428h146.181c4.948,0,9.229-1.811,12.847-5.428c3.614-3.613,5.421-7.898,5.421-12.847V18.271C438.534,13.319,436.73,9.04,433.113,5.424z' })
  );
};

PauseIcon.defaultProps = {
  className: null
};

PauseIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = PauseIcon;

/***/ }),
/* 902 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlayIcon = function PlayIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', width: '443.307px', height: '443.306px', viewBox: '0 0 443.307 443.306' }),
    _react2.default.createElement('path', { d: 'M415.934,212.799L36.788,2.097C32.411-0.377,28.65-0.661,25.51,1.242c-3.14,1.902-4.708,5.328-4.708,10.276V431.78c0,4.952,1.569,8.381,4.708,10.284c3.14,1.902,6.901,1.622,11.278-0.855l379.146-210.703c4.381-2.478,6.571-5.434,6.571-8.856C422.505,218.224,420.314,215.274,415.934,212.799z' })
  );
};

PlayIcon.defaultProps = {
  className: null
};

PlayIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = PlayIcon;

/***/ }),
/* 903 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SearchIcon = function SearchIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' }),
    _react2.default.createElement('path', { d: 'M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z' })
  );
};

SearchIcon.defaultProps = {
  className: null
};

SearchIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = SearchIcon;

/***/ }),
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SortIcon = function SortIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M6.5 11H10V0h2v11h3.5L11 15.5 6.5 11zM6 5v11H4V5H.5L5 .5 9.5 5H6z' })
  );
};

SortIcon.defaultProps = {
  className: null
};

SortIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = SortIcon;

/***/ }),
/* 905 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SpinnerIcon = function SpinnerIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { width: '80px', height: '80px', viewBox: '0 0 100 100' }),
    _react2.default.createElement(
      'circle',
      { cx: '84', cy: '50', r: '1.43464', fill: '#55acee' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '8;0;0;0;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '84;84;84;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '77.9028', cy: '50', r: '8', fill: '#157bf8' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;8;8;8;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.85s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;50;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.85s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '43.9028', cy: '50', r: '8', fill: '#55acee' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;8;8;8;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.425s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;50;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '-0.425s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '16', cy: '50', r: '6.56536', fill: '#157bf8' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;8;8;8;0', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;50;84;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' })
    ),
    _react2.default.createElement(
      'circle',
      { cx: '16', cy: '50', r: '0', fill: '#55acee' },
      _react2.default.createElement('animate', { attributeName: 'r', values: '0;0;8;8;8', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' }),
      _react2.default.createElement('animate', { attributeName: 'cx', values: '16;16;16;50;84', keyTimes: '0;0.25;0.5;0.75;1', keySplines: '0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1', calcMode: 'spline', dur: '1.7s', repeatCount: 'indefinite', begin: '0s' })
    )
  );
};

SpinnerIcon.defaultProps = {
  className: null
};

SpinnerIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = SpinnerIcon;

/***/ }),
/* 906 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StackIcon = function StackIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M16 5L8 1 0 5l8 4 8-4zM8 2.328L13.345 5 8 7.672 2.655 5 8 2.328zm6.398 4.871L16 8l-8 4-8-4 1.602-.801L8 10.398zm0 3L16 11l-8 4-8-4 1.602-.801L8 13.398z' })
  );
};

StackIcon.defaultProps = {
  className: null
};

StackIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = StackIcon;

/***/ }),
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UploadIcon = function UploadIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M8 8.5L4.5 12H7v3h2v-3h2.5L8 8.5z' }),
    _react2.default.createElement('path', { d: 'M13.941 8.04c.039-.176.059-.357.059-.54C14 6.122 12.879 5 11.5 5c-.218 0-.434.029-.643.084C10.469 3.876 9.335 3 8 3c-1.354 0-2.514.907-2.88 2.158C4.761 5.054 4.385 5 4 5 1.794 5 0 6.794 0 9c0 .969.351 1.903.988 2.632.631.721 1.498 1.193 2.442 1.328.024.003.048.005.071.005.245 0 .459-.18.494-.429.039-.273-.151-.527-.424-.566-.707-.101-1.357-.455-1.83-.996-.477-.546-.74-1.247-.74-1.973 0-1.654 1.346-3 3-3 .813 0 1.574.32 2.143.9.193.197.51.2.707.007s.2-.51.007-.707c-.245-.25-.517-.463-.809-.638.201-.897 1.005-1.562 1.952-1.562 1.103 0 2 .897 2 2 0 .136-.014.272-.041.404-.055.271.119.535.39.59.034.007.068.01.101.01.233 0 .441-.163.489-.4.035-.17.055-.343.06-.518.16-.057.33-.086.501-.086.827 0 1.5.673 1.5 1.5 0 .171-.029.34-.086.5h-.414c-.276 0-.5.224-.5.5s.224.5.5.5h1c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1c1.379 0 2.5-1.121 2.5-2.5 0-1.228-.89-2.251-2.059-2.46z' })
  );
};

UploadIcon.defaultProps = {
  className: null
};

UploadIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = UploadIcon;

/***/ }),
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UserIcon = function UserIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement('path', { d: 'M9 11.041v-.825c1.102-.621 2-2.168 2-3.716C11 4.015 11 2 8 2S5 4.015 5 6.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z' })
  );
};

UserIcon.defaultProps = {
  className: null
};

UserIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = UserIcon;

/***/ }),
/* 909 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 2e35c156f7c13cd2f47c197c873368ca
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type primaryLayoutContainerQueryResponse = {|
  +user: ?{| |};
  +loginProviders: ?$ReadOnlyArray<?{| |}>;
|};
*/

/*
query primaryLayoutContainerQuery {
  user {
    ...headerContainer_user
    id
  }
  loginProviders {
    ...socialLoginsContainer_loginProviders
  }
}

fragment headerContainer_user on ApplicationUser {
  userName
}

fragment socialLoginsContainer_loginProviders on LoginProvider {
  name
  displayName
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "primaryLayoutContainerQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ApplicationUser",
      "name": "user",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "headerContainer_user",
        "args": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "LoginProvider",
      "name": "loginProviders",
      "plural": true,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "socialLoginsContainer_loginProviders",
        "args": null
      }],
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "primaryLayoutContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "primaryLayoutContainerQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ApplicationUser",
      "name": "user",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "userName",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "id",
        "storageKey": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "LoginProvider",
      "name": "loginProviders",
      "plural": true,
      "selections": [{
        "kind": "InlineFragment",
        "type": "LoginProvider",
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "displayName",
          "storageKey": null
        }]
      }],
      "storageKey": null
    }]
  },
  "text": "query primaryLayoutContainerQuery {\n  user {\n    ...headerContainer_user\n    id\n  }\n  loginProviders {\n    ...socialLoginsContainer_loginProviders\n  }\n}\n\nfragment headerContainer_user on ApplicationUser {\n  userName\n}\n\nfragment socialLoginsContainer_loginProviders on LoginProvider {\n  name\n  displayName\n}\n"
};

module.exports = batch;

/***/ }),
/* 910 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _account = __webpack_require__(778);

var _account2 = _interopRequireDefault(_account);

var _headerContainer = __webpack_require__(890);

var _headerContainer2 = _interopRequireDefault(_headerContainer);

var _footerPlaylistContainer = __webpack_require__(881);

var _footerPlaylistContainer2 = _interopRequireDefault(_footerPlaylistContainer);

var _primaryLayout = __webpack_require__(1119);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _flagAudioModalContainer = __webpack_require__(874);

var _flagAudioModalContainer2 = _interopRequireDefault(_flagAudioModalContainer);

var _flagCommentModalContainer = __webpack_require__(877);

var _flagCommentModalContainer2 = _interopRequireDefault(_flagCommentModalContainer);

var _cookieNoticeContainer = __webpack_require__(914);

var _cookieNoticeContainer2 = _interopRequireDefault(_cookieNoticeContainer);

var _primaryLayoutErrorBoundary = __webpack_require__(912);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _displayType = __webpack_require__(231);

var _displayType2 = _interopRequireDefault(_displayType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayout = function PrimaryLayout(_ref) {
  var children = _ref.children,
      user = _ref.user,
      loginProviders = _ref.loginProviders;

  var isAuthorized = user !== null;

  return _react2.default.createElement(
    _displayType2.default,
    null,
    function (displayType) {
      var displayTypeClassName = (0, _classnames2.default)(displayType.isMobile && 'mobile', displayType.isTablet && 'tablet', displayType.isDesktop && 'desktop');

      return _react2.default.createElement(
        'div',
        { className: displayTypeClassName },
        _react2.default.createElement(
          _primaryLayoutErrorBoundary2.default,
          null,
          _react2.default.createElement(_account2.default, { loginProviders: loginProviders }),
          _react2.default.createElement(_headerContainer2.default, { user: user }),
          _react2.default.createElement(
            'div',
            { className: _primaryLayout2.default.main },
            children
          ),
          _react2.default.createElement(_flagAudioModalContainer2.default, { isAuthorized: isAuthorized }),
          _react2.default.createElement(_flagCommentModalContainer2.default, { isAuthorized: isAuthorized }),
          _react2.default.createElement(_footerPlaylistContainer2.default, null),
          _react2.default.createElement(_cookieNoticeContainer2.default, null)
        )
      );
    }
  );
};

PrimaryLayout.defaultProps = {
  children: null,
  user: null
};

PrimaryLayout.propTypes = {
  children: _propTypes2.default.node,
  loginProviders: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  user: _propTypes2.default.shape({
    username: _propTypes2.default.string
  })
};

exports.default = PrimaryLayout;

/***/ }),
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(9);

var _primaryLayout = __webpack_require__(910);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  return __webpack_require__(909);
};

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer,
  query: query,
  prepareVariables: function prepareVariables(_, _ref) {
    var location = _ref.location;
    return {
      __loggedInUserName: location.state && location.state.loggedInUserName
    };
  }
};

exports.default = PrimaryLayoutContainer;

/***/ }),
/* 912 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _found = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrimaryLayoutErrorBoundary = function (_React$Component) {
  _inherits(PrimaryLayoutErrorBoundary, _React$Component);

  function PrimaryLayoutErrorBoundary() {
    _classCallCheck(this, PrimaryLayoutErrorBoundary);

    return _possibleConstructorReturn(this, (PrimaryLayoutErrorBoundary.__proto__ || Object.getPrototypeOf(PrimaryLayoutErrorBoundary)).apply(this, arguments));
  }

  _createClass(PrimaryLayoutErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch() {
      this.props.router.push('/error/500');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return PrimaryLayoutErrorBoundary;
}(_react2.default.Component);

PrimaryLayoutErrorBoundary.propTypes = {
  router: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _recompose.compose)(_found.withRouter)(PrimaryLayoutErrorBoundary);

/***/ }),
/* 913 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CookieNotice = function (_React$Component) {
  _inherits(CookieNotice, _React$Component);

  function CookieNotice() {
    _classCallCheck(this, CookieNotice);

    return _possibleConstructorReturn(this, (CookieNotice.__proto__ || Object.getPrototypeOf(CookieNotice)).apply(this, arguments));
  }

  _createClass(CookieNotice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var cookieNoticeShown = localStorage.getItem('cookieNoticeShown');

      if (!cookieNoticeShown) {
        this.props.showPopup('This website uses cookies to give you the best user experience, by continuing to use the site you are agreeing to our use of cookies.', 15000);

        localStorage.setItem('cookieNoticeShown', true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return CookieNotice;
}(_react2.default.Component);

CookieNotice.propTypes = {
  showPopup: _propTypes2.default.func.isRequired
};

exports.default = CookieNotice;

/***/ }),
/* 914 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _cookieNotice = __webpack_require__(913);

var _cookieNotice2 = _interopRequireDefault(_cookieNotice);

var _actions = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(null, { showPopup: _actions.showPopup })(_cookieNotice2.default);

/***/ }),
/* 915 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(414);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicy = function PrivacyPolicy() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Privacy Policy'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: February 10th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This privacy policy has been compiled to better serve those who are concerned with how their \'Personally Identifiable Information\' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'What personal information do we collect?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When registering on our site, you will be asked to enter your email address. This is to help use indentify you. We will not send you any emails that you do not request.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'When do we collect information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We collect information from you when you register on our site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'How do we protect your information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not use vulnerability scanning and/or scanning to PCI standards. We only provide radio stations for online streaming. We never ask for credit card numbers. We use regular Malware Scanning. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Do we use \'cookies\'?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Yes. Cookies are small files that a site or its service provider transfers to your computer\'s hard drive through your Web browser that enables the site\'s or service provider\'s systems to recognize your browser and capture and remember certain information. They are used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'We use cookies to:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Understand and save user\'s preferences for future visits.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cookies are an important part of our website and the website will not work without having them enabled. By using our site you allow us to use cookies.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party disclosure'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'There may be third-party links to radio station websites throughout our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites. Any link on our site to a third part website that is not relevant or if we deem it inappropriate, may be removed.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Google'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Google\'s advertising requirements can be summed up by Google\'s Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en We have not enabled Google AdSense on our site but we may do so in the future.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'California Online Privacy Protection Act'
        ),
        _react2.default.createElement(
          'p',
          null,
          'CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law\'s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'According to CalOPPA, we agree to the following:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Users can visit our site anonymously. This privacy policy has a link to it from our home page in the header. Our Privacy Policy link includes the word \'Privacy\' and can easily be found on the page specified above. You will be notified of any Privacy Policy changes: \u2022 On our Privacy Policy Page Can change your personal information: \u2022 Through our website'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Does our site allow third-party behavioral tracking?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'It\'s important to note that we allow third-party behavioral tracking'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'COPPA (Children Online Privacy Protection Act)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When it comes to the collection of personal information from children under the age of 13 years old, the Children\'s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States\' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children\'s privacy and safety online. We do not specifically market to children under the age of 13 years old.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Fair Information Practices'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information. In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify you via email within 7 business days. We will also notify users via an in-site notification on the home page within 7 business days. We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.'
        )
      )
    )
  );
};

exports.default = PrivacyPolicy;

/***/ }),
/* 916 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(915);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),
/* 917 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(414);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditions = function TermsAndConditions() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Terms and Conditions'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: February 10th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      '"You" and "your" refer to you, as a user of the Site. A "user" is someone who accesses,browses, crawls, scrapes, or in any way uses the Site. "We," "us," and "our" refer to SoundVast. "Content" means text, images, photos, audio, video, location data, and all other forms of data or communication. "Your Content" means Content that you submit or transmit to, through, or in connection with the Site, such as ratings, reviews, compliments, invitations, check-ins, messages, and information that you publicly display or displayed in your account profile. "User Content" means Content that users submit or transmit to, through, or in connection with the Site. "SoundVast Content" means Content that we create and make available in connection with the Site. "Third Party Content" means Content that originates from parties other than SoundVast or its users, which is made available in connection with the Site. "Site Content" means all of the Content that is made available in connection with the Site, including Your Content, User Content, Third Party Content, and SoundVast Content.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Terms'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Disclaimer'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials on the SoundVast website are provided "as shown". SoundVast makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, SoundVast does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its internet website or otherwise relating to such materials or on any sites linked to this site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Limitations'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In no event shall SoundVast or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our internet site or offered services, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Revisions and Errors'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials appearing on our website could include technical, typographical, or photographic errors. SoundVast does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'SoundVast has not reviewed all of the sites linked to its internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user"s own risk.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Governing Law'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Any claim relating to the SoundVast website shall be governed by the laws of the country of note without regard to its conflict of law provisions.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'English Language'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the event of a conflict between these Terms and a foreign language version of our Terms of Use, the English language version of these Terms governs. All disputes, claims and causes of action (and related proceedings) will be communicated in English.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Copyright policy, notice and claim information'
        ),
        _react2.default.createElement(
          'p',
          null,
          'All materials on this site, whether separate or compiled, including, but not limited to, text, graphics, audio clips, logos, buttons, images, digital downloads, data compilations, software, icons, html code and xml code, as well as all copyright, patent, trademark, trade dress, and other rights therein, are owned or licensed by SoundVast and its third-party information providers, and are protected by international intellectual property laws.'
        )
      )
    )
  );
};

exports.default = TermsAndConditions;

/***/ }),
/* 918 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(917);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),
/* 919 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type radioContainer_liveStream = {|
  +audioId: number;
  +name: string;
  +coverImageUrl: string;
  +liveStreamUrl: string;
  +websiteUrl: string;
  +playCount: number;
  +likes: number;
  +dislikes: number;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "radioContainer_liveStream",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "audioId",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "name",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "coverImageUrl",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "liveStreamUrl",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "websiteUrl",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "playCount",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "likes",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "dislikes",
    "storageKey": null
  }, {
    "kind": "FragmentSpread",
    "name": "likeAudioContainer_audio",
    "args": null
  }, {
    "kind": "FragmentSpread",
    "name": "dislikeAudioContainer_audio",
    "args": null
  }],
  "type": "LiveStream"
};

module.exports = fragment;

/***/ }),
/* 920 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type radiosContainer = {|
  +liveStreams: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string;
      +node: ?{|
        +id: string;
        +audioId: number;
        +name: string;
        +coverImageUrl: string;
        +liveStreamUrl: string;
      |};
    |}>;
    +pageInfo: {|
      +hasNextPage: boolean;
    |};
  |};
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [{
    "kind": "RootArgument",
    "name": "count",
    "type": "Int"
  }, {
    "kind": "RootArgument",
    "name": "cursor",
    "type": "String"
  }, {
    "kind": "RootArgument",
    "name": "genre",
    "type": "String"
  }, {
    "kind": "RootArgument",
    "name": "searchQuery",
    "type": "String"
  }, {
    "kind": "RootArgument",
    "name": "filter",
    "type": "FilterInput"
  }],
  "kind": "Fragment",
  "metadata": {
    "connection": [{
      "count": "count",
      "cursor": "cursor",
      "direction": "forward",
      "path": ["liveStreams"]
    }]
  },
  "name": "radiosContainer",
  "selections": [{
    "kind": "LinkedField",
    "alias": "liveStreams",
    "args": [{
      "kind": "Variable",
      "name": "filter",
      "variableName": "filter",
      "type": "FilterInput"
    }, {
      "kind": "Variable",
      "name": "genre",
      "variableName": "genre",
      "type": "String"
    }, {
      "kind": "Variable",
      "name": "searchQuery",
      "variableName": "searchQuery",
      "type": "String"
    }],
    "concreteType": "LiveStreamPayloadConnection",
    "name": "__radiosContainer_liveStreams_connection",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "LiveStreamPayloadEdge",
      "name": "edges",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "cursor",
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LiveStream",
        "name": "node",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "audioId",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "coverImageUrl",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "liveStreamUrl",
          "storageKey": null
        }, {
          "kind": "FragmentSpread",
          "name": "radioContainer_liveStream",
          "args": null
        }, {
          "kind": "FragmentSpread",
          "name": "sideBarContainer_audios",
          "args": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "__typename",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "name": "pageInfo",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "hasNextPage",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "endCursor",
        "storageKey": null
      }],
      "storageKey": null
    }],
    "storageKey": null
  }],
  "type": "Query"
};

module.exports = fragment;

/***/ }),
/* 921 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash f89616d31cc5b941fe1100dcdffdb65b
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type radiosContainerForwardQueryResponse = {| |};
*/

/*
query radiosContainerForwardQuery(
  $count: Int!
  $cursor: String
  $genre: String
  $searchQuery: String
  $filter: FilterInput
) {
  ...radiosContainer
}

fragment radiosContainer on Query {
  liveStreams(first: $count, after: $cursor, genre: $genre, searchQuery: $searchQuery, filter: $filter) {
    edges {
      cursor
      node {
        __typename
        id
        audioId
        name
        coverImageUrl
        liveStreamUrl
        ...radioContainer_liveStream
        ...sideBarContainer_audios
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment radioContainer_liveStream on LiveStream {
  audioId
  name
  coverImageUrl
  liveStreamUrl
  websiteUrl
  playCount
  likes
  dislikes
  ...likeAudioContainer_audio
  ...dislikeAudioContainer_audio
}

fragment sideBarContainer_audios on Audio {
  audioId
  name
  ...commentBoxContainer_audio
  ...commentsContainer_audio
}

fragment commentBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment commentsContainer_audio on Audio {
  id
  ...commentBoxContainer_audio
  ...replyBoxContainer_audio
  comments(first: $count, after: $cursor) {
    edges {
      node {
        __typename
        commentId
        ...commentContainer_comment
        id
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment replyBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment commentContainer_comment on Comment {
  id
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  ...repliesContainer_comment
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment repliesContainer_comment on Comment {
  id
  replies(first: 0, after: $cursor) {
    totalCount
    edges {
      cursor
      node {
        __typename
        commentId
        ...replyContainer_reply
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
}

fragment replyContainer_reply on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment likeAudioContainer_audio on Audio {
  id
  audioId
}

fragment dislikeAudioContainer_audio on Audio {
  id
  audioId
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "genre",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "searchQuery",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "FilterInput",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "radiosContainerForwardQuery",
    "selections": [{
      "kind": "FragmentSpread",
      "name": "radiosContainer",
      "args": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "radiosContainerForwardQuery",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "genre",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "searchQuery",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "FilterInput",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "radiosContainerForwardQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "cursor",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter",
        "type": "FilterInput"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "count",
        "type": "Int"
      }, {
        "kind": "Variable",
        "name": "genre",
        "variableName": "genre",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "searchQuery",
        "variableName": "searchQuery",
        "type": "String"
      }],
      "concreteType": "LiveStreamPayloadConnection",
      "name": "liveStreams",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LiveStreamPayloadEdge",
        "name": "edges",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "cursor",
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "LiveStream",
          "name": "node",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "audioId",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "coverImageUrl",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "liveStreamUrl",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "websiteUrl",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "playCount",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": [{
              "kind": "Variable",
              "name": "after",
              "variableName": "cursor",
              "type": "String"
            }, {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            }],
            "concreteType": "CommentPayloadConnection",
            "name": "comments",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "CommentPayloadEdge",
              "name": "edges",
              "plural": true,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "name": "node",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "__typename",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "commentId",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "id",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "body",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "dateAdded",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "likes",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "dislikes",
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "ApplicationUser",
                  "name": "user",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "userName",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }],
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": [{
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  }, {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0,
                    "type": "Int"
                  }],
                  "concreteType": "CommentPayloadConnection",
                  "name": "replies",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "totalCount",
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentPayloadEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "cursor",
                      "storageKey": null
                    }, {
                      "kind": "LinkedField",
                      "alias": null,
                      "args": null,
                      "concreteType": "Comment",
                      "name": "node",
                      "plural": false,
                      "selections": [{
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "commentId",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "body",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "dateAdded",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "likes",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "dislikes",
                        "storageKey": null
                      }, {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "ApplicationUser",
                        "name": "user",
                        "plural": false,
                        "selections": [{
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "userName",
                          "storageKey": null
                        }, {
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "id",
                          "storageKey": null
                        }],
                        "storageKey": null
                      }, {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "name": "originalComment",
                        "plural": false,
                        "selections": [{
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "body",
                          "storageKey": null
                        }, {
                          "kind": "LinkedField",
                          "alias": null,
                          "args": null,
                          "concreteType": "ApplicationUser",
                          "name": "user",
                          "plural": false,
                          "selections": [{
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "userName",
                            "storageKey": null
                          }, {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }],
                          "storageKey": null
                        }, {
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "id",
                          "storageKey": null
                        }],
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }],
                      "storageKey": null
                    }],
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "endCursor",
                      "storageKey": null
                    }, {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "hasNextPage",
                      "storageKey": null
                    }],
                    "storageKey": null
                  }],
                  "storageKey": null
                }, {
                  "kind": "LinkedHandle",
                  "alias": null,
                  "args": [{
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  }, {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0,
                    "type": "Int"
                  }],
                  "handle": "connection",
                  "name": "replies",
                  "key": "repliesContainer_replies",
                  "filters": null
                }],
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }],
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "name": "pageInfo",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              }],
              "storageKey": null
            }],
            "storageKey": null
          }, {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [{
              "kind": "Variable",
              "name": "after",
              "variableName": "cursor",
              "type": "String"
            }, {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            }],
            "handle": "connection",
            "name": "comments",
            "key": "commentsContainer_comments",
            "filters": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "PageInfo",
        "name": "pageInfo",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "hasNextPage",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "endCursor",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedHandle",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "cursor",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter",
        "type": "FilterInput"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "count",
        "type": "Int"
      }, {
        "kind": "Variable",
        "name": "genre",
        "variableName": "genre",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "searchQuery",
        "variableName": "searchQuery",
        "type": "String"
      }],
      "handle": "connection",
      "name": "liveStreams",
      "key": "radiosContainer_liveStreams",
      "filters": ["genre", "searchQuery", "filter"]
    }]
  },
  "text": "query radiosContainerForwardQuery(\n  $count: Int!\n  $cursor: String\n  $genre: String\n  $searchQuery: String\n  $filter: FilterInput\n) {\n  ...radiosContainer\n}\n\nfragment radiosContainer on Query {\n  liveStreams(first: $count, after: $cursor, genre: $genre, searchQuery: $searchQuery, filter: $filter) {\n    edges {\n      cursor\n      node {\n        __typename\n        id\n        audioId\n        name\n        coverImageUrl\n        liveStreamUrl\n        ...radioContainer_liveStream\n        ...sideBarContainer_audios\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment radioContainer_liveStream on LiveStream {\n  audioId\n  name\n  coverImageUrl\n  liveStreamUrl\n  websiteUrl\n  playCount\n  likes\n  dislikes\n  ...likeAudioContainer_audio\n  ...dislikeAudioContainer_audio\n}\n\nfragment sideBarContainer_audios on Audio {\n  audioId\n  name\n  ...commentBoxContainer_audio\n  ...commentsContainer_audio\n}\n\nfragment commentBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentsContainer_audio on Audio {\n  id\n  ...commentBoxContainer_audio\n  ...replyBoxContainer_audio\n  comments(first: $count, after: $cursor) {\n    edges {\n      node {\n        __typename\n        commentId\n        ...commentContainer_comment\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment replyBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        __typename\n        commentId\n        ...replyContainer_reply\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment dislikeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n"
};

module.exports = batch;

/***/ }),
/* 922 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 43e799e9a8ad5df48b2b05b53935ee88
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type radiosContainerQueryResponse = {| |};
*/

/*
query radiosContainerQuery(
  $count: Int!
  $cursor: String
  $genre: String
  $searchQuery: String
  $filter: FilterInput
) {
  ...radiosContainer
}

fragment radiosContainer on Query {
  liveStreams(first: $count, after: $cursor, genre: $genre, searchQuery: $searchQuery, filter: $filter) {
    edges {
      cursor
      node {
        __typename
        id
        audioId
        name
        coverImageUrl
        liveStreamUrl
        ...radioContainer_liveStream
        ...sideBarContainer_audios
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment radioContainer_liveStream on LiveStream {
  audioId
  name
  coverImageUrl
  liveStreamUrl
  websiteUrl
  playCount
  likes
  dislikes
  ...likeAudioContainer_audio
  ...dislikeAudioContainer_audio
}

fragment sideBarContainer_audios on Audio {
  audioId
  name
  ...commentBoxContainer_audio
  ...commentsContainer_audio
}

fragment commentBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment commentsContainer_audio on Audio {
  id
  ...commentBoxContainer_audio
  ...replyBoxContainer_audio
  comments(first: $count, after: $cursor) {
    edges {
      node {
        __typename
        commentId
        ...commentContainer_comment
        id
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment replyBoxContainer_audio on Audio {
  id
  audioId
  name
}

fragment commentContainer_comment on Comment {
  id
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  ...repliesContainer_comment
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment repliesContainer_comment on Comment {
  id
  replies(first: 0, after: $cursor) {
    totalCount
    edges {
      cursor
      node {
        __typename
        commentId
        ...replyContainer_reply
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment likeCommentContainer_comment on Comment {
  id
  commentId
}

fragment dislikeCommentContainer_comment on Comment {
  id
  commentId
}

fragment replyContainer_reply on Comment {
  commentId
  body
  dateAdded
  likes
  dislikes
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
  ...likeCommentContainer_comment
  ...dislikeCommentContainer_comment
}

fragment likeAudioContainer_audio on Audio {
  id
  audioId
}

fragment dislikeAudioContainer_audio on Audio {
  id
  audioId
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "genre",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "searchQuery",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "FilterInput",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "radiosContainerQuery",
    "selections": [{
      "kind": "FragmentSpread",
      "name": "radiosContainer",
      "args": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "radiosContainerQuery",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int!",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "genre",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "searchQuery",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "FilterInput",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "radiosContainerQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "cursor",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter",
        "type": "FilterInput"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "count",
        "type": "Int"
      }, {
        "kind": "Variable",
        "name": "genre",
        "variableName": "genre",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "searchQuery",
        "variableName": "searchQuery",
        "type": "String"
      }],
      "concreteType": "LiveStreamPayloadConnection",
      "name": "liveStreams",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LiveStreamPayloadEdge",
        "name": "edges",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "cursor",
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "LiveStream",
          "name": "node",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "audioId",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "coverImageUrl",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "liveStreamUrl",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "websiteUrl",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "playCount",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": [{
              "kind": "Variable",
              "name": "after",
              "variableName": "cursor",
              "type": "String"
            }, {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            }],
            "concreteType": "CommentPayloadConnection",
            "name": "comments",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "CommentPayloadEdge",
              "name": "edges",
              "plural": true,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "name": "node",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "__typename",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "commentId",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "id",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "body",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "dateAdded",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "likes",
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "dislikes",
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "ApplicationUser",
                  "name": "user",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "userName",
                    "storageKey": null
                  }, {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }],
                  "storageKey": null
                }, {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": [{
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  }, {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0,
                    "type": "Int"
                  }],
                  "concreteType": "CommentPayloadConnection",
                  "name": "replies",
                  "plural": false,
                  "selections": [{
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "totalCount",
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "CommentPayloadEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "cursor",
                      "storageKey": null
                    }, {
                      "kind": "LinkedField",
                      "alias": null,
                      "args": null,
                      "concreteType": "Comment",
                      "name": "node",
                      "plural": false,
                      "selections": [{
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "commentId",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "body",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "dateAdded",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "likes",
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "dislikes",
                        "storageKey": null
                      }, {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "ApplicationUser",
                        "name": "user",
                        "plural": false,
                        "selections": [{
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "userName",
                          "storageKey": null
                        }, {
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "id",
                          "storageKey": null
                        }],
                        "storageKey": null
                      }, {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Comment",
                        "name": "originalComment",
                        "plural": false,
                        "selections": [{
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "body",
                          "storageKey": null
                        }, {
                          "kind": "LinkedField",
                          "alias": null,
                          "args": null,
                          "concreteType": "ApplicationUser",
                          "name": "user",
                          "plural": false,
                          "selections": [{
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "userName",
                            "storageKey": null
                          }, {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }],
                          "storageKey": null
                        }, {
                          "kind": "ScalarField",
                          "alias": null,
                          "args": null,
                          "name": "id",
                          "storageKey": null
                        }],
                        "storageKey": null
                      }, {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }],
                      "storageKey": null
                    }],
                    "storageKey": null
                  }, {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [{
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "endCursor",
                      "storageKey": null
                    }, {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "hasNextPage",
                      "storageKey": null
                    }],
                    "storageKey": null
                  }],
                  "storageKey": null
                }, {
                  "kind": "LinkedHandle",
                  "alias": null,
                  "args": [{
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  }, {
                    "kind": "Literal",
                    "name": "first",
                    "value": 0,
                    "type": "Int"
                  }],
                  "handle": "connection",
                  "name": "replies",
                  "key": "repliesContainer_replies",
                  "filters": null
                }],
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }],
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "name": "pageInfo",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              }],
              "storageKey": null
            }],
            "storageKey": null
          }, {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [{
              "kind": "Variable",
              "name": "after",
              "variableName": "cursor",
              "type": "String"
            }, {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            }],
            "handle": "connection",
            "name": "comments",
            "key": "commentsContainer_comments",
            "filters": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": null
      }, {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "PageInfo",
        "name": "pageInfo",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "hasNextPage",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "endCursor",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedHandle",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "cursor",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "filter",
        "variableName": "filter",
        "type": "FilterInput"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "count",
        "type": "Int"
      }, {
        "kind": "Variable",
        "name": "genre",
        "variableName": "genre",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "searchQuery",
        "variableName": "searchQuery",
        "type": "String"
      }],
      "handle": "connection",
      "name": "liveStreams",
      "key": "radiosContainer_liveStreams",
      "filters": ["genre", "searchQuery", "filter"]
    }]
  },
  "text": "query radiosContainerQuery(\n  $count: Int!\n  $cursor: String\n  $genre: String\n  $searchQuery: String\n  $filter: FilterInput\n) {\n  ...radiosContainer\n}\n\nfragment radiosContainer on Query {\n  liveStreams(first: $count, after: $cursor, genre: $genre, searchQuery: $searchQuery, filter: $filter) {\n    edges {\n      cursor\n      node {\n        __typename\n        id\n        audioId\n        name\n        coverImageUrl\n        liveStreamUrl\n        ...radioContainer_liveStream\n        ...sideBarContainer_audios\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment radioContainer_liveStream on LiveStream {\n  audioId\n  name\n  coverImageUrl\n  liveStreamUrl\n  websiteUrl\n  playCount\n  likes\n  dislikes\n  ...likeAudioContainer_audio\n  ...dislikeAudioContainer_audio\n}\n\nfragment sideBarContainer_audios on Audio {\n  audioId\n  name\n  ...commentBoxContainer_audio\n  ...commentsContainer_audio\n}\n\nfragment commentBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentsContainer_audio on Audio {\n  id\n  ...commentBoxContainer_audio\n  ...replyBoxContainer_audio\n  comments(first: $count, after: $cursor) {\n    edges {\n      node {\n        __typename\n        commentId\n        ...commentContainer_comment\n        id\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment replyBoxContainer_audio on Audio {\n  id\n  audioId\n  name\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  ...repliesContainer_comment\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n  replies(first: 0, after: $cursor) {\n    totalCount\n    edges {\n      cursor\n      node {\n        __typename\n        commentId\n        ...replyContainer_reply\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment likeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment dislikeCommentContainer_comment on Comment {\n  id\n  commentId\n}\n\nfragment replyContainer_reply on Comment {\n  commentId\n  body\n  dateAdded\n  likes\n  dislikes\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n  ...likeCommentContainer_comment\n  ...dislikeCommentContainer_comment\n}\n\nfragment likeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n\nfragment dislikeAudioContainer_audio on Audio {\n  id\n  audioId\n}\n"
};

module.exports = batch;

/***/ }),
/* 923 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _playContainer = __webpack_require__(827);

var _playContainer2 = _interopRequireDefault(_playContainer);

var _coverImage = __webpack_require__(230);

var _coverImage2 = _interopRequireDefault(_coverImage);

var _audioRating = __webpack_require__(427);

var _audioRating2 = _interopRequireDefault(_audioRating);

var _likeAudioContainer = __webpack_require__(935);

var _likeAudioContainer2 = _interopRequireDefault(_likeAudioContainer);

var _dislikeAudioContainer = __webpack_require__(931);

var _dislikeAudioContainer2 = _interopRequireDefault(_dislikeAudioContainer);

var _playCount = __webpack_require__(828);

var _playCount2 = _interopRequireDefault(_playCount);

var _name = __webpack_require__(409);

var _name2 = _interopRequireDefault(_name);

var _flag = __webpack_require__(418);

var _flag2 = _interopRequireDefault(_flag);

var _radio = __webpack_require__(1120);

var _radio2 = _interopRequireDefault(_radio);

var _ratingPercent = __webpack_require__(937);

var _ratingPercent2 = _interopRequireDefault(_ratingPercent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
  var liveStream = _ref.liveStream,
      footerPlaylist = _ref.footerPlaylist;

  var name = _react2.default.createElement(_name2.default, { className: _radio2.default.radioName, name: liveStream.name });

  return _react2.default.createElement(
    'div',
    null,
    liveStream.websiteUrl ? _react2.default.createElement(
      'a',
      { href: liveStream.websiteUrl, target: '_blank' },
      name
    ) : _react2.default.createElement(
      'div',
      null,
      name
    ),
    _react2.default.createElement(
      'div',
      { className: _radio2.default.coverImageContainer },
      _react2.default.createElement(
        _playContainer2.default,
        { id: liveStream.audioId, footerPlaylist: footerPlaylist },
        _react2.default.createElement(_coverImage2.default, { coverImageUrl: liveStream.coverImageUrl })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _radio2.default.controls },
      _react2.default.createElement(
        'div',
        { className: _radio2.default.controlsRow },
        _react2.default.createElement(_ratingPercent2.default, {
          className: _radio2.default.ratingPercent,
          likes: liveStream.likes,
          dislikes: liveStream.dislikes
        }),
        _react2.default.createElement(
          'div',
          { className: _radio2.default.alignRight },
          _react2.default.createElement(_audioRating2.default, {
            likes: liveStream.likes,
            dislikes: liveStream.dislikes,
            like: _react2.default.createElement(_likeAudioContainer2.default, { audio: liveStream }),
            dislike: _react2.default.createElement(_dislikeAudioContainer2.default, { audio: liveStream })
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _radio2.default.controlsRow },
        _react2.default.createElement(_playCount2.default, { className: _radio2.default.playCount, playCount: liveStream.playCount }),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_radio2.default.alignRight, _radio2.default.extraControls) },
          _react2.default.createElement(_flag2.default, { modalId: 'flagAudio', id: liveStream.audioId })
        )
      )
    )
  );
};

Radio.propTypes = {
  liveStream: _propTypes2.default.shape({
    coverImageUrl: _propTypes2.default.string.isRequired,
    liveStreamUrl: _propTypes2.default.string.isRequired,
    websiteUrl: _propTypes2.default.string,
    audioId: _propTypes2.default.number.isRequired,
    dislikes: _propTypes2.default.number.isRequired,
    likes: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired,
    playCount: _propTypes2.default.number.isRequired
  }).isRequired,
  footerPlaylist: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired,
    sources: _propTypes2.default.shape({
      mp3: _propTypes2.default.string.isRequired
    }).isRequired,
    poster: _propTypes2.default.string.isRequired
  })).isRequired
};

exports.default = Radio;

/***/ }),
/* 924 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _radio = __webpack_require__(923);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  liveStream: function liveStream() {
    return __webpack_require__(919);
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments))(_radio2.default);

/***/ }),
/* 925 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactInfiniteScroller = __webpack_require__(605);

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _scrollTracker = __webpack_require__(968);

var _scrollTracker2 = _interopRequireDefault(_scrollTracker);

var _soundVastTitle = __webpack_require__(969);

var _soundVastTitle2 = _interopRequireDefault(_soundVastTitle);

var _radioContainer = __webpack_require__(924);

var _radioContainer2 = _interopRequireDefault(_radioContainer);

var _grid = __webpack_require__(435);

var _grid2 = _interopRequireDefault(_grid);

var _audiosContentContainer = __webpack_require__(863);

var _audiosContentContainer2 = _interopRequireDefault(_audiosContentContainer);

var _audiosHeader = __webpack_require__(818);

var _audiosHeader2 = _interopRequireDefault(_audiosHeader);

var _audiosSubHeader = __webpack_require__(819);

var _audiosSubHeader2 = _interopRequireDefault(_audiosSubHeader);

var _loader = __webpack_require__(437);

var _loader2 = _interopRequireDefault(_loader);

var _convertRadioToMedia = __webpack_require__(970);

var _convertRadioToMedia2 = _interopRequireDefault(_convertRadioToMedia);

var _sideBarContainer = __webpack_require__(833);

var _sideBarContainer2 = _interopRequireDefault(_sideBarContainer);

var _radios = __webpack_require__(1121);

var _radios2 = _interopRequireDefault(_radios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radios = function Radios(_ref) {
  var liveStreams = _ref.liveStreams,
      loadMore = _ref.loadMore;

  var footerPlaylist = liveStreams.edges.map(function (_ref2) {
    var node = _ref2.node;
    return (0, _convertRadioToMedia2.default)(node);
  });

  return _react2.default.createElement(
    _soundVastTitle2.default,
    { title: 'Radios' },
    _react2.default.createElement(
      _audiosContentContainer2.default,
      null,
      _react2.default.createElement(_audiosHeader2.default, { audioTypeText: 'radios' }),
      _react2.default.createElement(_audiosSubHeader2.default, null),
      _react2.default.createElement(
        _scrollTracker2.default,
        null,
        function (elementToTrackRef, values) {
          return _react2.default.createElement(
            'div',
            { className: _radios2.default.infiniteScrollContainer, ref: elementToTrackRef },
            _react2.default.createElement(
              _reactInfiniteScroller2.default,
              {
                loadMore: loadMore,
                hasMore: liveStreams.pageInfo.hasNextPage,
                loader: _react2.default.createElement(_loader2.default, { key: 0 }),
                initialLoad: false,
                className: _radios2.default.gridContainer
              },
              _react2.default.createElement(
                _grid2.default,
                null,
                liveStreams.edges.map(function (_ref3) {
                  var node = _ref3.node;
                  return _react2.default.createElement(_radioContainer2.default, { key: node.audioId, footerPlaylist: footerPlaylist, liveStream: node });
                })
              )
            ),
            _react2.default.createElement(_sideBarContainer2.default, {
              isFixed: values.pastTopOfElement,
              audios: liveStreams.edges.map(function (x) {
                return x.node;
              })
            })
          );
        }
      )
    )
  );
};

Radios.propTypes = {
  liveStreams: _propTypes2.default.shape({
    pageInfo: _propTypes2.default.shape({
      hasNextPage: _propTypes2.default.bool.isRequired
    }).isRequired,
    edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      node: _propTypes2.default.shape({
        audioId: _propTypes2.default.number.isRequired
      })
    }))
  }).isRequired,
  loadMore: _propTypes2.default.func.isRequired
};

exports.default = Radios;

/***/ }),
/* 926 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var _reactJplaylist = __webpack_require__(155);

var _radios = __webpack_require__(925);

var _radios2 = _interopRequireDefault(_radios);

var _itemsToLoad = __webpack_require__(439);

var _getAudioVariables = __webpack_require__(972);

var _getAudioVariables2 = _interopRequireDefault(_getAudioVariables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  return __webpack_require__(922);
};

var fragments = {
  data: function data() {
    return __webpack_require__(920);
  }
};

var connectionConfig = {
  direction: 'forward',
  query: function query() {
    return __webpack_require__(921);
  },
  getVariables: function getVariables(_, _ref, fragmentVariables) {
    var count = _ref.count,
        cursor = _ref.cursor;
    return {
      count: count,
      cursor: cursor,
      filter: fragmentVariables.filter
    };
  }
};

var handlers = {
  loadMore: function loadMore(_ref2) {
    var relay = _ref2.relay;
    return function () {
      return relay.loadMore(_itemsToLoad.audiosToLoad);
    };
  }
};

var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(null, {
  setPlaylist: _reactJplaylist.actions.setPlaylist
}), (0, _recomposeRelayModern.paginationContainer)(fragments, connectionConfig), (0, _recompose.flattenProp)('data'), (0, _recompose.withHandlers)(handlers));

var RadiosContainer = enhance(_radios2.default);

var routeConfig = exports.routeConfig = {
  Component: RadiosContainer,
  query: query,
  render: function render(_ref3) {
    var props = _ref3.props;
    return props && _react2.default.createElement(RadiosContainer, { data: props });
  },
  prepareVariables: function prepareVariables(_, _ref4) {
    var location = _ref4.location;
    return _extends({
      count: _itemsToLoad.audiosToLoad
    }, (0, _getAudioVariables2.default)(location));
  }
};

exports.default = RadiosContainer;

/***/ }),
/* 927 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 4485cd3dd4efa0635bfbf49221055fbb
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type rateAudioMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    id: number;
    liked: boolean;
  };
|};
export type rateAudioMutationResponse = {|
  +rateAudio: ?{|
    +rating: ?{|
      +audio: ?{|
        +likes: number;
        +dislikes: number;
      |};
    |};
  |};
|};
*/

/*
mutation rateAudioMutation(
  $input: RateInput!
) {
  rateAudio(input: $input) {
    rating {
      audio {
        __typename
        likes
        dislikes
        id
      }
      id
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "RateInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "rateAudioMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RateInput!"
      }],
      "concreteType": "RateAudioPayload",
      "name": "rateAudio",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Rating",
        "name": "rating",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": null,
          "name": "audio",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "rateAudioMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "RateInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "rateAudioMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RateInput!"
      }],
      "concreteType": "RateAudioPayload",
      "name": "rateAudio",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Rating",
        "name": "rating",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": null,
          "name": "audio",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }],
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation rateAudioMutation(\n  $input: RateInput!\n) {\n  rateAudio(input: $input) {\n    rating {\n      audio {\n        __typename\n        likes\n        dislikes\n        id\n      }\n      id\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 928 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 46bc57e23d9b807496cb668446fdf9ae
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type rateCommentMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    id: number;
    liked: boolean;
  };
|};
export type rateCommentMutationResponse = {|
  +rateComment: ?{|
    +rating: ?{|
      +comment: ?{|
        +likes: number;
        +dislikes: number;
      |};
    |};
  |};
|};
*/

/*
mutation rateCommentMutation(
  $input: RateInput!
) {
  rateComment(input: $input) {
    rating {
      comment {
        likes
        dislikes
        id
      }
      id
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "RateInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "rateCommentMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RateInput!"
      }],
      "concreteType": "RateAudioPayload",
      "name": "rateComment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Rating",
        "name": "rating",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Comment",
          "name": "comment",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "rateCommentMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "RateInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "rateCommentMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RateInput!"
      }],
      "concreteType": "RateAudioPayload",
      "name": "rateComment",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Rating",
        "name": "rating",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Comment",
          "name": "comment",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "likes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "dislikes",
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }],
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation rateCommentMutation(\n  $input: RateInput!\n) {\n  rateComment(input: $input) {\n    rating {\n      comment {\n        likes\n        dislikes\n        id\n      }\n      id\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 929 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type dislikeAudioContainer_audio = {|
  +id: ?string;
  +audioId: number;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "dislikeAudioContainer_audio",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "audioId",
    "storageKey": null
  }],
  "type": "Audio"
};

module.exports = fragment;

/***/ }),
/* 930 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type dislikeCommentContainer_comment = {|
  +id: string;
  +commentId: number;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "dislikeCommentContainer_comment",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "commentId",
    "storageKey": null
  }],
  "type": "Comment"
};

module.exports = fragment;

/***/ }),
/* 931 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _dislike = __webpack_require__(428);

var _dislike2 = _interopRequireDefault(_dislike);

var _rateAudioMutation = __webpack_require__(430);

var _rateAudioMutation2 = _interopRequireDefault(_rateAudioMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  audio: function audio() {
    return __webpack_require__(929);
  }
};

var handlers = {
  onClick: function onClick(_ref) {
    var audio = _ref.audio;
    return function () {
      return (0, _rateAudioMutation2.default)(audio, false);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.withHandlers)(handlers))(_dislike2.default);

/***/ }),
/* 932 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _dislike = __webpack_require__(428);

var _dislike2 = _interopRequireDefault(_dislike);

var _rateCommentMutation = __webpack_require__(431);

var _rateCommentMutation2 = _interopRequireDefault(_rateCommentMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  comment: function comment() {
    return __webpack_require__(930);
  }
};

var handlers = {
  onClick: function onClick(_ref) {
    var comment = _ref.comment;
    return function () {
      return (0, _rateCommentMutation2.default)(comment, false);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.withHandlers)(handlers))(_dislike2.default);

/***/ }),
/* 933 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type likeAudioContainer_audio = {|
  +id: ?string;
  +audioId: number;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "likeAudioContainer_audio",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "audioId",
    "storageKey": null
  }],
  "type": "Audio"
};

module.exports = fragment;

/***/ }),
/* 934 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type likeCommentContainer_comment = {|
  +id: string;
  +commentId: number;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "likeCommentContainer_comment",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "commentId",
    "storageKey": null
  }],
  "type": "Comment"
};

module.exports = fragment;

/***/ }),
/* 935 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _like = __webpack_require__(429);

var _like2 = _interopRequireDefault(_like);

var _rateAudioMutation = __webpack_require__(430);

var _rateAudioMutation2 = _interopRequireDefault(_rateAudioMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  audio: function audio() {
    return __webpack_require__(933);
  }
};

var handlers = {
  onClick: function onClick(_ref) {
    var audio = _ref.audio;
    return function () {
      return (0, _rateAudioMutation2.default)(audio, true);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.withHandlers)(handlers))(_like2.default);

/***/ }),
/* 936 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _like = __webpack_require__(429);

var _like2 = _interopRequireDefault(_like);

var _rateCommentMutation = __webpack_require__(431);

var _rateCommentMutation2 = _interopRequireDefault(_rateCommentMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  comment: function comment() {
    return __webpack_require__(934);
  }
};

var handlers = {
  onClick: function onClick(_ref) {
    var comment = _ref.comment;
    return function () {
      return (0, _rateCommentMutation2.default)(comment, true);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.withHandlers)(handlers))(_like2.default);

/***/ }),
/* 937 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _ratingPercent = __webpack_require__(1125);

var _ratingPercent2 = _interopRequireDefault(_ratingPercent);

var _percentageNumber = __webpack_require__(962);

var _percentageNumber2 = _interopRequireDefault(_percentageNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RatingPercent = function RatingPercent(_ref) {
  var className = _ref.className,
      likes = _ref.likes,
      dislikes = _ref.dislikes;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_ratingPercent2.default.ratingPercent, className) },
    _react2.default.createElement(_percentageNumber2.default, {
      className: _ratingPercent2.default.ratingPercentage,
      firstValue: likes,
      secondValue: dislikes
    }),
    likes > 0 || dislikes > 0 ? _react2.default.createElement(
      'span',
      null,
      'liked'
    ) : null
  );
};

RatingPercent.defaultProps = {
  className: null
};

RatingPercent.propTypes = {
  className: _propTypes2.default.string,
  likes: _propTypes2.default.number.isRequired,
  dislikes: _propTypes2.default.number.isRequired
};

exports.default = RatingPercent;

/***/ }),
/* 938 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type withAuthorization_user = {|
  +userName: string;
|};
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "withAuthorization_user",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "userName",
    "storageKey": null
  }],
  "type": "ApplicationUser"
};

module.exports = fragment;

/***/ }),
/* 939 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _reactRelay = __webpack_require__(9);

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _actions = __webpack_require__(62);

var fragments = {
  user: function user() {
    return __webpack_require__(938);
  }
};

var withAuthorization = function withAuthorization(BaseComponent) {
  return (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _recomposeRelayModern.fragmentContainer)(fragments), (0, _recompose.flattenProp)('user'), (0, _recompose.renameProp)('userName', 'isLoggedIn'), (0, _recompose.lifecycle)({
    componentDidMount: function componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.dispatch((0, _actions.showModal)('login'));
      }
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.dispatch((0, _actions.showModal)('login'));
      }
    }
  }), (0, _recompose.withProps)({ BaseComponent: BaseComponent }), (0, _recompose.branch)(function (props) {
    return props.isLoggedIn;
  }, (0, _recompose.renderComponent)(BaseComponent)))((0, _recompose.renderNothing)());
};

exports.default = withAuthorization;

/***/ }),
/* 940 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _imageButton = __webpack_require__(1126);

var _imageButton2 = _interopRequireDefault(_imageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ImageButton = function ImageButton(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'onClick', 'className']);

  return _react2.default.createElement(
    _button2.default,
    _extends({ onClick: onClick, className: (0, _classnames2.default)(_imageButton2.default.imageButton, className) }, props),
    children,
    _react2.default.createElement('div', { className: _imageButton2.default.imageOverlay })
  );
};

ImageButton.defaultProps = {
  className: null
};

ImageButton.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

exports.default = ImageButton;

/***/ }),
/* 941 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ModalButton = function ModalButton(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'onClick', 'className']);

  return _react2.default.createElement(
    _button2.default,
    _extends({ onClick: onClick, className: className }, props),
    children
  );
};

ModalButton.defaultProps = {
  className: null
};

ModalButton.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

exports.default = ModalButton;

/***/ }),
/* 942 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _spinnerButton = __webpack_require__(1127);

var _spinnerButton2 = _interopRequireDefault(_spinnerButton);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _spinner = __webpack_require__(905);

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SpinnerButton = function SpinnerButton(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    _button2.default,
    props,
    _react2.default.createElement(_spinner2.default, { className: _spinnerButton2.default.spinnerIcon })
  );
};

var propTypes = {
  isLoading: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired
};

var enhance = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _recompose.branch)(function (props) {
  return !props.isLoading;
}, (0, _recompose.renderComponent)(_button2.default)));

exports.default = enhance(SpinnerButton);

/***/ }),
/* 943 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _dropdown = __webpack_require__(1128);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      className = _ref.className,
      setDropdownVisibility = _ref.setDropdownVisibility,
      isDropdownVisible = _ref.isDropdownVisible,
      titleCallback = _ref.titleCallback;
  return _react2.default.createElement(
    'div',
    {
      onBlur: function onBlur() {
        return setDropdownVisibility(false);
      },
      className: (0, _classnames2.default)(_dropdown2.default.dropdown, className)
    },
    titleCallback(function () {
      return setDropdownVisibility(!isDropdownVisible);
    }),
    _react2.default.createElement(
      'div',
      {
        role: 'button',
        tabIndex: 0,
        onMouseDown: function onMouseDown(e) {
          e.stopPropagation();
          e.preventDefault();
        },
        onClick: function onClick() {
          return setDropdownVisibility(false);
        },
        className: (0, _classnames2.default)(!isDropdownVisible && _dropdown2.default.hide)
      },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.Children.map(children, function (child) {
          return _react2.default.createElement(
            'li',
            null,
            child
          );
        })
      )
    )
  );
};

Dropdown.defaultProps = {
  className: null
};

Dropdown.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  setDropdownVisibility: _propTypes2.default.func.isRequired,
  isDropdownVisible: _propTypes2.default.bool.isRequired,
  titleCallback: _propTypes2.default.func.isRequired
};

exports.default = Dropdown;

/***/ }),
/* 944 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDropzone = __webpack_require__(1501);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _dropzone = __webpack_require__(1129);

var _dropzone2 = _interopRequireDefault(_dropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Dropzone = function Dropzone(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ['className', 'children', 'title']);

  return _react2.default.createElement(
    _reactDropzone2.default,
    _extends({
      className: (0, _classnames2.default)(className, _dropzone2.default.dropzone)
    }, props),
    _react2.default.createElement(
      'div',
      { className: _dropzone2.default.placeholderContainer },
      _react2.default.createElement(
        'div',
        { className: _dropzone2.default.placeholder },
        title
      )
    ),
    children
  );
};

Dropzone.defaultProps = {
  className: null,
  children: null,
  title: null
};

Dropzone.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  title: _propTypes2.default.string
};

exports.default = Dropzone;

/***/ }),
/* 945 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _inputRadioButtonGroup = __webpack_require__(236);

var _inputRadioButtonGroup2 = _interopRequireDefault(_inputRadioButtonGroup);

var _creativeCommonsGroupContainer = __webpack_require__(947);

var _creativeCommonsGroupContainer2 = _interopRequireDefault(_creativeCommonsGroupContainer);

var _copyrightField = __webpack_require__(1130);

var _copyrightField2 = _interopRequireDefault(_copyrightField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CopyrightField = function CopyrightField(_ref) {
  var id = _ref.id,
      formName = _ref.formName;

  var creativeCommonsValue = 'CreativeCommons';

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reduxForm.Field, {
      component: _inputRadioButtonGroup2.default,
      name: 'copyright',
      groupClassName: _copyrightField2.default.radioButtonGroup,
      options: [{ label: 'All Rights Reserved', id: 'allRightsReserved_' + id, customValue: 'AllRightsReserved' }, { label: 'Creative Commons', id: 'creativeCommons_' + id, customValue: creativeCommonsValue }]
    }),
    _react2.default.createElement(_creativeCommonsGroupContainer2.default, { formName: formName, creativeCommonsValue: creativeCommonsValue })
  );
};

CopyrightField.defaultProps = {
  id: 0
};

CopyrightField.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  formName: _propTypes2.default.string.isRequired
};

exports.default = CopyrightField;

/***/ }),
/* 946 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _inputCheckboxField = __webpack_require__(432);

var _inputCheckboxField2 = _interopRequireDefault(_inputCheckboxField);

var _inputRadioButton = __webpack_require__(433);

var _inputRadioButton2 = _interopRequireDefault(_inputRadioButton);

var _creativeCommonsGroup = __webpack_require__(1131);

var _creativeCommonsGroup2 = _interopRequireDefault(_creativeCommonsGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreativeCommonsGroup = function CreativeCommonsGroup(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'div',
    { className: _creativeCommonsGroup2.default.creativeCommonsGroup },
    _react2.default.createElement(_reduxForm.Field, {
      component: _inputCheckboxField2.default,
      name: 'creativeCommonsAttribution',
      id: 'createCommons_attribution_' + id,
      label: 'Attribution',
      checked: true
    }),
    _react2.default.createElement(_reduxForm.Field, {
      component: _inputCheckboxField2.default,
      name: 'creativeCommonsNoncommercial',
      id: 'createCommons_noncommercial_' + id,
      label: 'Noncommercial'
    }),
    _react2.default.createElement(_reduxForm.Field, {
      component: _inputRadioButton2.default,
      name: 'creativeCommonsRadioButtonGroup',
      id: 'creativeCommons_derivative_' + id,
      customValue: 'Derivative',
      label: 'No Derivative Works'
    }),
    _react2.default.createElement(_reduxForm.Field, {
      component: _inputRadioButton2.default,
      name: 'creativeCommonsRadioButtonGroup',
      id: 'creativeCommons_share_' + id,
      customValue: 'Share',
      label: 'Share Alike'
    })
  );
};

CreativeCommonsGroup.defaultProps = {
  id: 0
};

CreativeCommonsGroup.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = CreativeCommonsGroup;

/***/ }),
/* 947 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _creativeCommonsGroup = __webpack_require__(946);

var _creativeCommonsGroup2 = _interopRequireDefault(_creativeCommonsGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  formName: _propTypes2.default.string.isRequired,
  creativeCommonsValue: _propTypes2.default.string.isRequired
};

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var form = _ref.form;
  var formName = _ref2.formName,
      creativeCommonsValue = _ref2.creativeCommonsValue;
  return {
    creativeCommonsChecked: form[formName].values.copyright === creativeCommonsValue
  };
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _reactRedux.connect)(mapStateToProps), (0, _recompose.branch)(function (props) {
  return !props.creativeCommonsChecked;
}, _recompose.renderNothing))(_creativeCommonsGroup2.default);

/***/ }),
/* 948 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type {ConcreteFragment} from 'relay-runtime';
export type genresFieldContainer_genres = $ReadOnlyArray<{|
  +id: ?string;
  +name: string;
|}>;
*/

var fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "genresFieldContainer_genres",
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "id",
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "args": null,
    "name": "name",
    "storageKey": null
  }],
  "type": "Genre"
};

module.exports = fragment;

/***/ }),
/* 949 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _genresSelectInput = __webpack_require__(951);

var _genresSelectInput2 = _interopRequireDefault(_genresSelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var GenresField = function GenresField(_ref) {
  var id = _ref.id,
      genres = _ref.genres,
      props = _objectWithoutProperties(_ref, ['id', 'genres']);

  var options = genres.map(function (genre) {
    return { label: genre.name, value: genre.id };
  });

  return _react2.default.createElement(
    'label',
    { htmlFor: 'genres_' + id },
    _react2.default.createElement(
      'span',
      null,
      'Genres'
    ),
    _react2.default.createElement(_reduxForm.Field, _extends({}, props, {
      name: 'genres',
      id: 'genres_' + id,
      component: _genresSelectInput2.default,
      options: options
    }))
  );
};

GenresField.defaultProps = {
  id: 0
};

GenresField.propTypes = {
  genres: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = GenresField;

/***/ }),
/* 950 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _recomposeRelayModern = __webpack_require__(12);

var _reactRelay = __webpack_require__(9);

var _genresField = __webpack_require__(949);

var _genresField2 = _interopRequireDefault(_genresField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  genres: function genres() {
    return __webpack_require__(948);
  }
};

var enhance = (0, _recompose.compose)((0, _recomposeRelayModern.fragmentContainer)(fragments));

exports.default = enhance(_genresField2.default);

/***/ }),
/* 951 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(612);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationField = __webpack_require__(95);

var _validationField2 = _interopRequireDefault(_validationField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var GenresSelectInput = function GenresSelectInput(_ref) {
  var input = _ref.input,
      options = _ref.options,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      props = _objectWithoutProperties(_ref, ['input', 'options', 'meta']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement(_reactSelect2.default, _extends({}, input, props, {
      options: options,
      placeholder: '',
      multi: true,
      onBlur: function onBlur() {
        return input.onBlur(input.value);
      }
    }))
  );
};

GenresSelectInput.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any
  }).isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  })).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired
};

exports.default = GenresSelectInput;

/***/ }),
/* 952 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LiveStreamUrlField = function LiveStreamUrlField(_ref) {
  var id = _ref.id,
      props = _objectWithoutProperties(_ref, ['id']);

  return _react2.default.createElement(
    'label',
    { htmlFor: 'liveStreamUrl_' + id },
    _react2.default.createElement(
      'span',
      null,
      'Live Stream Url *'
    ),
    _react2.default.createElement(_reduxForm.Field, _extends({}, props, {
      name: 'liveStreamUrl',
      id: 'liveStreamUrl_' + id,
      component: _inputTextField2.default
    }))
  );
};

LiveStreamUrlField.defaultProps = {
  id: 0
};

LiveStreamUrlField.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = LiveStreamUrlField;

/***/ }),
/* 953 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NameField = function NameField(_ref) {
  var id = _ref.id,
      props = _objectWithoutProperties(_ref, ['id']);

  return _react2.default.createElement(
    'label',
    { htmlFor: 'name_' + id },
    _react2.default.createElement(
      'span',
      null,
      'Name *'
    ),
    _react2.default.createElement(_reduxForm.Field, _extends({}, props, {
      name: 'name',
      id: 'name_' + id,
      component: _inputTextField2.default
    }))
  );
};

NameField.defaultProps = {
  id: 0
};

NameField.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = NameField;

/***/ }),
/* 954 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _tagsSelectInput = __webpack_require__(955);

var _tagsSelectInput2 = _interopRequireDefault(_tagsSelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TagsField = function TagsField(_ref) {
  var id = _ref.id,
      props = _objectWithoutProperties(_ref, ['id']);

  return _react2.default.createElement(
    'label',
    { htmlFor: 'tags_' + id },
    _react2.default.createElement(
      'span',
      null,
      'Tags'
    ),
    _react2.default.createElement(_reduxForm.Field, _extends({}, props, {
      name: 'tags',
      id: 'tags_' + id,
      component: _tagsSelectInput2.default
    }))
  );
};

TagsField.defaultProps = {
  id: 0
};

TagsField.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = TagsField;

/***/ }),
/* 955 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = __webpack_require__(612);

var _validationField = __webpack_require__(95);

var _validationField2 = _interopRequireDefault(_validationField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TagsSelectInput = function TagsSelectInput(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      props = _objectWithoutProperties(_ref, ['input', 'meta']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement(_reactSelect.Creatable, _extends({}, input, props, {
      placeholder: '',
      multi: true,
      options: [],
      onBlur: function onBlur() {
        return input.onBlur(input.value);
      }
    }))
  );
};

TagsSelectInput.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.any
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired
};

exports.default = TagsSelectInput;

/***/ }),
/* 956 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(1136);

var _validationError2 = _interopRequireDefault(_validationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var error = _ref.error;
  return error && _react2.default.createElement(
    'span',
    { className: _validationError2.default.error },
    error
  );
};

Error.defaultProps = {
  error: null
};

Error.propTypes = {
  error: _propTypes2.default.string
};

exports.default = Error;

/***/ }),
/* 957 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(13);

var _inputTextField = __webpack_require__(61);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var WebsiteUrlField = function WebsiteUrlField(_ref) {
  var id = _ref.id,
      props = _objectWithoutProperties(_ref, ['id']);

  return _react2.default.createElement(
    'label',
    { htmlFor: 'websiteUrl_' + id },
    _react2.default.createElement(
      'span',
      null,
      'Website Url'
    ),
    _react2.default.createElement(_reduxForm.Field, _extends({}, props, {
      name: 'websiteUrl',
      id: 'websiteUrl_' + id,
      component: _inputTextField2.default
    }))
  );
};

WebsiteUrlField.defaultProps = {
  id: 0
};

WebsiteUrlField.propTypes = {
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = WebsiteUrlField;

/***/ }),
/* 958 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gridCell = __webpack_require__(436);

var _gridCell2 = _interopRequireDefault(_gridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://stackoverflow.com/questions/25514579/css-keep-all-flexbox-children-elements-the-same-size
var FlexWrapFix = function FlexWrapFix(_ref) {
  var numberOfGhostElements = _ref.numberOfGhostElements;

  var ghostElements = [];

  for (var index = 0; index < numberOfGhostElements; index += 1) {
    ghostElements.push(_react2.default.createElement(
      _gridCell2.default,
      { key: index },
      _react2.default.createElement('div', null)
    ));
  }

  return ghostElements;
};

FlexWrapFix.propType = {
  numberOfGhostElements: _propTypes2.default.number.isRequired
};

exports.default = FlexWrapFix;

/***/ }),
/* 959 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _dropzone = __webpack_require__(944);

var _dropzone2 = _interopRequireDefault(_dropzone);

var _imageDropzone = __webpack_require__(1141);

var _imageDropzone2 = _interopRequireDefault(_imageDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageDropzone = function ImageDropzone(_ref) {
  var onDrop = _ref.onDrop,
      children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_imageDropzone2.default.imageDropzoneContainer, className) },
    _react2.default.createElement(
      _dropzone2.default,
      {
        className: _imageDropzone2.default.imageDropzone,
        title: 'Update cover image',
        accept: 'image/*',
        multiple: false,
        onDrop: onDrop
      },
      children
    )
  );
};

ImageDropzone.defaultProps = {
  children: null,
  className: null
};

ImageDropzone.propTypes = {
  onDrop: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = ImageDropzone;

/***/ }),
/* 960 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = __webpack_require__(485);

var _modal2 = _interopRequireDefault(_modal);

var _overlay = __webpack_require__(963);

var _overlay2 = _interopRequireDefault(_overlay);

var _cross = __webpack_require__(895);

var _cross2 = _interopRequireDefault(_cross);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var children = _ref.children,
      title = _ref.title,
      hideModal = _ref.hideModal,
      className = _ref.className;
  return _react2.default.createElement(
    _overlay2.default,
    { onClick: hideModal },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_modal2.default.modal, className) },
      _react2.default.createElement(
        'button',
        { onClick: hideModal, className: _modal2.default.close },
        _react2.default.createElement(_cross2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: _modal2.default.title },
        title
      ),
      children
    )
  );
};

Modal.defaultProps = {
  className: null
};

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  hideModal: _propTypes2.default.func.isRequired
};

exports.default = Modal;

/***/ }),
/* 961 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'SHOW_MODAL':
      return _extends({}, state, action.variables, {
        currentModal: action.id
      });
    case 'HIDE_MODAL':
      return _extends({}, state, {
        currentModal: null
      });
    default:
      return state;
  }
};

/***/ }),
/* 962 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getPercentage = __webpack_require__(973);

var _getPercentage2 = _interopRequireDefault(_getPercentage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Gets the percentage of two numbers from the firstValue
 */
var PercentageNumber = function PercentageNumber(_ref) {
  var firstValue = _ref.firstValue,
      secondValue = _ref.secondValue,
      decimalPoints = _ref.decimalPoints,
      className = _ref.className;

  var percent = (0, _getPercentage2.default)(firstValue, secondValue);

  return !isNaN(percent) && _react2.default.createElement(
    'span',
    { className: className },
    percent.toFixed(decimalPoints),
    '%'
  );
};

PercentageNumber.defaultProps = {
  decimalPoints: 0,
  className: null
};

PercentageNumber.propTypes = {
  className: _propTypes2.default.string,
  firstValue: _propTypes2.default.number.isRequired,
  secondValue: _propTypes2.default.number.isRequired,
  decimalPoints: _propTypes2.default.number
};

exports.default = PercentageNumber;

/***/ }),
/* 963 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = __webpack_require__(1142);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/click-events-have-key-events */
// No Key event as it should be handled by other objects such as a modal close icon
var Overlay = function Overlay(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _overlay2.default.overlay },
    children,
    _react2.default.createElement('div', { className: _overlay2.default.clickableOverlay, tabIndex: -1, role: 'button', onClick: onClick })
  );
};

Overlay.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = Overlay;

/***/ }),
/* 964 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(1143);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.props.hidePopup(_this2.props.index);
      }, this.props.millisecondsToShow);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _popup2.default.popup },
        this.props.text
      );
    }
  }]);

  return Popup;
}(_react2.default.Component);

Popup.propTypes = {
  index: _propTypes2.default.number.isRequired,
  text: _propTypes2.default.string.isRequired,
  hidePopup: _propTypes2.default.func.isRequired,
  millisecondsToShow: _propTypes2.default.number.isRequired
};

exports.default = Popup;

/***/ }),
/* 965 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(964);

var _popup2 = _interopRequireDefault(_popup);

var _popups = __webpack_require__(1144);

var _popups2 = _interopRequireDefault(_popups);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popups = function Popups(_ref) {
  var popups = _ref.popups,
      hidePopup = _ref.hidePopup;
  return popups.length > 0 ? _react2.default.createElement(
    'div',
    { className: _popups2.default.popups },
    popups.map(function (popup, index) {
      return _react2.default.createElement(_popup2.default, {
        key: popup.id,
        index: index,
        text: popup.text,
        hidePopup: hidePopup,
        millisecondsToShow: popup.millisecondsToShow
      });
    })
  ) : null;
};

Popups.propTypes = {
  hidePopup: _propTypes2.default.func.isRequired,
  popups: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    millisecondsToShow: _propTypes2.default.number.isRequired
  })).isRequired
};

exports.default = Popups;

/***/ }),
/* 966 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = {
  popups: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'SHOW_POPUP':
      {
        var popups = [].concat(_toConsumableArray(state.popups), [{
          id: action.id,
          text: action.text,
          millisecondsToShow: action.millisecondsToShow
        }]);

        return _extends({}, state, {
          popups: popups
        });
      }
    case 'HIDE_POPUP':
      {
        var _popups = state.popups.filter(function (_, i) {
          return i !== action.index;
        });

        return _extends({}, state, {
          popups: _popups
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),
/* 967 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewImage = function PreviewImage(_ref) {
  var previewUrl = _ref.previewUrl;
  return _react2.default.createElement('img', { alt: '', src: previewUrl });
};

PreviewImage.defaultProps = {
  previewUrl: null
};

PreviewImage.propTypes = {
  previewUrl: _propTypes2.default.string
};

exports.default = PreviewImage;

/***/ }),
/* 968 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollTracker = function (_React$Component) {
  _inherits(ScrollTracker, _React$Component);

  function ScrollTracker() {
    _classCallCheck(this, ScrollTracker);

    var _this = _possibleConstructorReturn(this, (ScrollTracker.__proto__ || Object.getPrototypeOf(ScrollTracker)).call(this));

    _this.setRef = function (ref) {
      return _this.setState({ element: ref });
    };

    _this.trackScrolling = function () {
      var getBoundingClientRect = _this.state.element.getBoundingClientRect();

      if (getBoundingClientRect.top <= 0) {
        _this.setState({ pastTopOfElement: true });
      } else {
        _this.setState({ pastTopOfElement: false });
      }
    };

    _this.state = {
      pastTopOfElement: false
    };
    return _this;
  }

  _createClass(ScrollTracker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('scroll', this.trackScrolling);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.setRef, this.state);
    }
  }]);

  return ScrollTracker;
}(_react2.default.Component);

ScrollTracker.propTypes = {
  children: _propTypes2.default.func.isRequired
};

exports.default = ScrollTracker;

/***/ }),
/* 969 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDocumentTitle = __webpack_require__(1497);

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SoundVastTitle = function SoundVastTitle(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ['title']);

  return _react2.default.createElement(_reactDocumentTitle2.default, _extends({ title: title + ' | SoundVast' }, props));
};

SoundVastTitle.propTypes = {
  title: _propTypes2.default.string.isRequired
};

exports.default = SoundVastTitle;

/***/ }),
/* 970 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (radio) {
  return {
    id: radio.audioId,
    title: radio.name,
    sources: {
      mp3: radio.liveStreamUrl
    },
    poster: radio.coverImageUrl
  };
};

/***/ }),
/* 971 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var treatAsUTC = function treatAsUTC(date) {
  var result = new Date(date);

  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());

  return result;
};

exports.default = function (startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  var value = (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;

  return Number(value).toFixed(0);
};

/***/ }),
/* 972 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normalizeBoolean = __webpack_require__(119);

var _normalizeBoolean2 = _interopRequireDefault(_normalizeBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (location) {
  return {
    filter: {
      newest: (0, _normalizeBoolean2.default)(location.query.newest),
      mostCommented: (0, _normalizeBoolean2.default)(location.query.mostCommented),
      mostPlayed: (0, _normalizeBoolean2.default)(location.query.mostPlayed),
      dateFrom: location.query.dateFrom && new Date(location.query.dateFrom).toISOString(),
      ratingFilter: {
        topRated: (0, _normalizeBoolean2.default)(location.query.topRated),
        minimumNumberOfRatingsThreshold: 0
      }
    },
    genre: location.query.genre,
    searchQuery: location.query.searchQuery
  };
};

/***/ }),
/* 973 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (firstValue, secondValue) {
  return firstValue / (firstValue + secondValue) * 100;
};

/***/ }),
/* 974 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (time) {
  var newTime = time;

  switch (typeof time === 'undefined' ? 'undefined' : _typeof(time)) {
    case 'number':
      break;
    case 'string':
      newTime = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) {
        newTime = time.getTime();
      }
      break;
    default:
      newTime = +new Date();
  }
  var timeFormats = [[60, 'seconds', 1], // 60
  [120, '1 minute ago', '1 minute from now'], // 60*2
  [3600, 'minutes', 60], // 60*60, 60
  [7200, '1 hour ago', '1 hour from now'], // 60*60*2
  [86400, 'hours', 3600], // 60*60*24, 60*60
  [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
  [604800, 'days', 86400], // 60*60*24*7, 60*60*24
  [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
  [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
  [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
  [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
  [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
  [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
  [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
  [58060800000, 'centuries', 2903040000]];

  var seconds = (+new Date() - newTime) / 1000;
  var token = 'ago';
  var listChoice = 1;

  if (seconds === 0) {
    return 'Just now';
  }

  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    listChoice = 2;
  }

  for (var index = 0; index < timeFormats.length; index += 1) {
    var timeFormat = timeFormats[index];

    if (seconds < timeFormat[0]) {
      if (typeof timeFormat[2] === 'string') {
        return timeFormat[listChoice];
      }
      var flooredTime = Math.floor(seconds / timeFormat[2]);

      return flooredTime + ' ' + timeFormat[1] + ' ' + token;
    }
  }

  return newTime;
};

/***/ }),
/* 975 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var documentScrollTop = 0;
var bodyScrollTop = 0;

var disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll() {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';

    // following is neccessary on iOS. position fixed will reset scroll position
    documentScrollTop = window.document.documentElement.scrollTop;
    bodyScrollTop = window.document.body.scrollTop;
    document.body.style.position = 'fixed';
  }
};

var enableBodyScroll = exports.enableBodyScroll = function enableBodyScroll() {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = '';

    // reset position and scroll position
    document.body.style.position = '';

    try {
      window.document.documentElement.scrollTop = documentScrollTop;
    } catch (e) {
      console.error(e);
    } // eslint-disable-line no-console

    try {
      window.document.body.scrollTop = bodyScrollTop;
    } catch (e) {
      console.error(e);
    } // eslint-disable-line no-console
  }
};

/***/ }),
/* 976 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noWhiteSpace = __webpack_require__(440);

var _noWhiteSpace2 = _interopRequireDefault(_noWhiteSpace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var audioValidation = function audioValidation(values) {
  var errors = {};

  if (!values.name || !(0, _noWhiteSpace2.default)(values.name)) {
    errors.name = 'Name is required';
  }

  if (!values.liveStreamUrl || !(0, _noWhiteSpace2.default)(values.liveStreamUrl)) {
    errors.liveStreamUrl = 'The live stream Url is required';
  }

  return errors;
};

exports.default = audioValidation;

/***/ }),
/* 977 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(4);

var _displayType = __webpack_require__(231);

var _displayType2 = _interopRequireDefault(_displayType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withDisplayType = function withDisplayType(Component) {
  var DisplayTypeWrapper = function DisplayTypeWrapper(props) {
    return _react2.default.createElement(
      _displayType2.default,
      null,
      function (displayType) {
        return _react2.default.createElement(Component, _extends({}, props, { displayType: displayType }));
      }
    );
  };

  return (0, _recompose.compose)((0, _recompose.setDisplayName)((0, _recompose.wrapDisplayName)(Component, 'withDisplayType')))(DisplayTypeWrapper);
};

exports.default = withDisplayType;

/***/ }),
/* 978 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sizes = {
  breakpointMobile: { value: 768, unit: 'px' },
  breakpointTablet: { value: 992, unit: 'px' },
  breakpointDesktop: { value: 1200, unit: 'px' }
};

exports.default = sizes;

/***/ }),
/* 979 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 2f4af600d2bc8706a005b01647558bee
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadContainerQueryResponse = {|
  +genres: ?$ReadOnlyArray<?{| |}>;
  +user: ?{| |};
|};
*/

/*
query uploadContainerQuery {
  genres {
    ...genresFieldContainer_genres
    id
  }
  user {
    ...withAuthorization_user
    id
  }
}

fragment genresFieldContainer_genres on Genre {
  id
  name
}

fragment withAuthorization_user on ApplicationUser {
  userName
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "uploadContainerQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Genre",
      "name": "genres",
      "plural": true,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "genresFieldContainer_genres",
        "args": null
      }],
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ApplicationUser",
      "name": "user",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "withAuthorization_user",
        "args": null
      }],
      "storageKey": null
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "uploadContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "uploadContainerQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Genre",
      "name": "genres",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "id",
        "storageKey": null
      }, {
        "kind": "InlineFragment",
        "type": "Genre",
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        }]
      }],
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ApplicationUser",
      "name": "user",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "userName",
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "id",
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "query uploadContainerQuery {\n  genres {\n    ...genresFieldContainer_genres\n    id\n  }\n  user {\n    ...withAuthorization_user\n    id\n  }\n}\n\nfragment genresFieldContainer_genres on Genre {\n  id\n  name\n}\n\nfragment withAuthorization_user on ApplicationUser {\n  userName\n}\n"
};

module.exports = batch;

/***/ }),
/* 980 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _basicInfo = __webpack_require__(1145);

var _basicInfo2 = _interopRequireDefault(_basicInfo);

var _formGroup = __webpack_require__(118);

var _formGroup2 = _interopRequireDefault(_formGroup);

var _imageDropzoneContainer = __webpack_require__(981);

var _imageDropzoneContainer2 = _interopRequireDefault(_imageDropzoneContainer);

var _previewImageContainer = __webpack_require__(982);

var _previewImageContainer2 = _interopRequireDefault(_previewImageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicInfo = function BasicInfo(_ref) {
  var id = _ref.id,
      children = _ref.children,
      change = _ref.change;
  return _react2.default.createElement(
    'div',
    { className: _basicInfo2.default.basicInfo },
    _react2.default.createElement(
      _imageDropzoneContainer2.default,
      { change: change, className: _basicInfo2.default.imageDropzone, id: id },
      _react2.default.createElement(_previewImageContainer2.default, { id: id })
    ),
    _react2.default.createElement(
      _formGroup2.default,
      { className: _basicInfo2.default.formGroup },
      children
    )
  );
};

BasicInfo.propTypes = {
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  change: _propTypes2.default.func.isRequired
};

exports.default = BasicInfo;

/***/ }),
/* 981 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _imageDropzone = __webpack_require__(959);

var _imageDropzone2 = _interopRequireDefault(_imageDropzone);

var _actions = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  onDrop: function onDrop(_ref) {
    var dispatch = _ref.dispatch,
        id = _ref.id,
        change = _ref.change;
    return function (files) {
      return dispatch((0, _actions.uploadCoverImage)(id, files[0], change));
    };
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.setPropTypes)({
  id: _propTypes2.default.string.isRequired,
  change: _propTypes2.default.func.isRequired
}),
// TODO: Implement removeCoverImage in component
(0, _reactRedux.connect)(), (0, _recompose.withHandlers)(handlers));

exports.default = enhance(_imageDropzone2.default);

/***/ }),
/* 982 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _previewImage = __webpack_require__(967);

var _previewImage2 = _interopRequireDefault(_previewImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var upload = _ref.upload;
  var id = _ref2.id;
  return {
    coverImage: upload.coverImages[id]
  };
};

var propTypes = {
  id: _propTypes2.default.string.isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _reactRedux.connect)(mapStateToProps), (0, _recompose.flattenProp)('coverImage'))(_previewImage2.default);

/***/ }),
/* 983 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = {
  liveStreams: [],
  coverImages: {}
};

var removeForm = function removeForm(forms, index) {
  var newForms = [].concat(_toConsumableArray(forms));

  newForms.splice(index, 1);

  return newForms;
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'UPDATE_COVER_IMAGE':
      {
        var coverImages = _extends({}, state.coverImages);

        coverImages[action.id] = {
          previewUrl: action.previewUrl,
          imagePath: action.imagePath
        };

        return _extends({}, state, {
          coverImages: coverImages
        });
      }
    case 'REMOVE_COVER_IMAGE':
      {
        var _coverImages = [].concat(_toConsumableArray(state.coverImages));

        delete _coverImages[action.id];

        return _extends({}, state, {
          coverImages: _coverImages
        });
      }
    case 'ADD_LIVE_STREAM':
      return _extends({}, state, {
        liveStreams: state.liveStreams.concat([action.liveStream])
      });
    case 'REMOVE_LIVE_STREAM_FORM':
      return _extends({}, state, {
        liveStreams: removeForm(state.liveStreams, action.index)
      });
    default:
      return state;
  }
};

/***/ }),
/* 984 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _upload = __webpack_require__(1146);

var _upload2 = _interopRequireDefault(_upload);

var _uploadLiveStreamContainer = __webpack_require__(991);

var _uploadLiveStreamContainer2 = _interopRequireDefault(_uploadLiveStreamContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Upload = function Upload(_ref) {
  var genres = _ref.genres;
  return _react2.default.createElement(
    'div',
    { className: _upload2.default.upload },
    _react2.default.createElement(
      'div',
      { className: _upload2.default.title },
      'Upload radio stations.'
    ),
    _react2.default.createElement(_uploadLiveStreamContainer2.default, { genres: genres })
  );
};

Upload.propTypes = {
  genres: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = Upload;

/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRedux = __webpack_require__(10);

var _recompose = __webpack_require__(4);

var _reactRelay = __webpack_require__(9);

var _upload = __webpack_require__(984);

var _upload2 = _interopRequireDefault(_upload);

var _withAuthorization = __webpack_require__(939);

var _withAuthorization2 = _interopRequireDefault(_withAuthorization);

var _actions = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = function query() {
  return __webpack_require__(979);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var upload = _ref.upload;
  return {
    liveStreams: upload.liveStreams
  };
};

var enhance = (0, _recompose.compose)(_withAuthorization2.default, (0, _reactRedux.connect)(mapStateToProps, {
  addLiveStream: _actions.addLiveStream
}), (0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    if (!this.props.liveStreams.length) {
      this.props.addLiveStream();
    }
  }
}), (0, _recompose.branch)(function () {
  return !JSON.parse("false");
}, _recompose.renderNothing));

var UploadContainer = enhance(_upload2.default);

var routeConfig = exports.routeConfig = {
  Component: UploadContainer,
  query: query
};

exports.default = UploadContainer;

/***/ }),
/* 986 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash ca547848f0c45fb4c23b1a71e53fe0f8
 */

/* eslint-disable */



/*::
import type {ConcreteBatch} from 'relay-runtime';
export type saveLiveStreamMutationVariables = {|
  input: {
    clientMutationId?: ?string;
    name: string;
    liveStreamUrl: string;
    websiteUrl: string;
    coverImageUrl: string;
    tags?: ?$ReadOnlyArray<?{
      id?: ?number;
      tag?: ?string;
    }>;
    genreIds?: ?$ReadOnlyArray<?number>;
  };
|};
export type saveLiveStreamMutationResponse = {|
  +saveLiveStream: ?{|
    +liveStream: {|
      +id: string;
    |};
  |};
|};
*/

/*
mutation saveLiveStreamMutation(
  $input: SaveLiveStreamInput!
) {
  saveLiveStream(input: $input) {
    liveStream {
      id
    }
  }
}
*/

var batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "SaveLiveStreamInput!",
      "defaultValue": null
    }],
    "kind": "Fragment",
    "metadata": null,
    "name": "saveLiveStreamMutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SaveLiveStreamInput!"
      }],
      "concreteType": "SaveLiveStreamPayload",
      "name": "saveLiveStream",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LiveStream",
        "name": "liveStream",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "saveLiveStreamMutation",
  "query": {
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "input",
      "type": "SaveLiveStreamInput!",
      "defaultValue": null
    }],
    "kind": "Root",
    "name": "saveLiveStreamMutation",
    "operation": "mutation",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SaveLiveStreamInput!"
      }],
      "concreteType": "SaveLiveStreamPayload",
      "name": "saveLiveStream",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "LiveStream",
        "name": "liveStream",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        }],
        "storageKey": null
      }],
      "storageKey": null
    }]
  },
  "text": "mutation saveLiveStreamMutation(\n  $input: SaveLiveStreamInput!\n) {\n  saveLiveStream(input: $input) {\n    liveStream {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;

/***/ }),
/* 987 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = __webpack_require__(30);

var _button2 = _interopRequireDefault(_button);

var _spinnerSubmitContainer = __webpack_require__(159);

var _spinnerSubmitContainer2 = _interopRequireDefault(_spinnerSubmitContainer);

var _liveStreamForm = __webpack_require__(1147);

var _liveStreamForm2 = _interopRequireDefault(_liveStreamForm);

var _basicInfo = __webpack_require__(980);

var _basicInfo2 = _interopRequireDefault(_basicInfo);

var _nameField = __webpack_require__(953);

var _nameField2 = _interopRequireDefault(_nameField);

var _genresFieldContainer = __webpack_require__(950);

var _genresFieldContainer2 = _interopRequireDefault(_genresFieldContainer);

var _liveStreamUrlField = __webpack_require__(952);

var _liveStreamUrlField2 = _interopRequireDefault(_liveStreamUrlField);

var _websiteUrlField = __webpack_require__(957);

var _websiteUrlField2 = _interopRequireDefault(_websiteUrlField);

var _tagsField = __webpack_require__(954);

var _tagsField2 = _interopRequireDefault(_tagsField);

var _copyrightField = __webpack_require__(945);

var _copyrightField2 = _interopRequireDefault(_copyrightField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LiveStreamForm = function LiveStreamForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      id = _ref.id,
      genres = _ref.genres,
      form = _ref.form,
      removeLiveStreamForm = _ref.removeLiveStreamForm,
      change = _ref.change;
  return _react2.default.createElement(
    'form',
    { className: _liveStreamForm2.default.liveStreamForm, onSubmit: handleSubmit, action: '' },
    _react2.default.createElement(
      _basicInfo2.default,
      { id: id, change: change },
      _react2.default.createElement(_nameField2.default, { id: id }),
      _react2.default.createElement(_liveStreamUrlField2.default, { id: id }),
      _react2.default.createElement(_websiteUrlField2.default, { id: id }),
      _react2.default.createElement(_genresFieldContainer2.default, { id: id, genres: genres }),
      _react2.default.createElement(_tagsField2.default, { id: id }),
      _react2.default.createElement(_copyrightField2.default, { id: id, formName: form })
    ),
    _react2.default.createElement(
      'div',
      { className: _liveStreamForm2.default.buttonsContainer },
      _react2.default.createElement(
        _spinnerSubmitContainer2.default,
        { formName: form },
        'Save'
      ),
      _react2.default.createElement(
        _button2.default,
        { onClick: removeLiveStreamForm },
        'Cancel'
      )
    )
  );
};

LiveStreamForm.propTypes = {
  genres: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  id: _propTypes2.default.string.isRequired,
  form: _propTypes2.default.string.isRequired,
  removeLiveStreamForm: _propTypes2.default.func.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  change: _propTypes2.default.func.isRequired
};

exports.default = LiveStreamForm;

/***/ }),
/* 988 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(13);

var _recompose = __webpack_require__(4);

var _reactRedux = __webpack_require__(10);

var _liveStreamForm = __webpack_require__(987);

var _liveStreamForm2 = _interopRequireDefault(_liveStreamForm);

var _audioValidation = __webpack_require__(976);

var _audioValidation2 = _interopRequireDefault(_audioValidation);

var _saveLiveStreamMutation = __webpack_require__(989);

var _saveLiveStreamMutation2 = _interopRequireDefault(_saveLiveStreamMutation);

var _actions = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var index = _ref.index;
  return {
    removeLiveStreamForm: function removeLiveStreamForm() {
      return dispatch((0, _actions.removeLiveStreamForm)(index));
    }
  };
};

var handlers = {
  onSubmit: function onSubmit() {
    return function (input) {
      return (0, _saveLiveStreamMutation2.default)(input);
    };
  }
};

var createProps = function createProps(_ref2) {
  var imagePath = _ref2.imagePath;
  return {
    initialValues: {
      imagePath: imagePath,
      copyright: 'AllRightsReserved',
      creativeCommonsNoncommercial: true,
      creativeCommonsRadioButtonGroup: 'Share'
    }
  };
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(null, mapDispatchToProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.withProps)(createProps), (0, _reduxForm.reduxForm)({
  validate: _audioValidation2.default
}))(_liveStreamForm2.default);

/***/ }),
/* 989 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(9);

var _recomposeRelayModern = __webpack_require__(12);

var mutation = function mutation() {
  return __webpack_require__(986);
};

exports.default = function (_ref) {
  var name = _ref.name,
      liveStreamUrl = _ref.liveStreamUrl,
      websiteUrl = _ref.websiteUrl,
      imagePath = _ref.imagePath,
      _ref$genres = _ref.genres,
      genres = _ref$genres === undefined ? [] : _ref$genres,
      _ref$tags = _ref.tags,
      tags = _ref$tags === undefined ? [] : _ref$tags;

  var variables = {
    input: {
      coverImageUrl: imagePath,
      name: name,
      liveStreamUrl: liveStreamUrl,
      websiteUrl: websiteUrl,
      tags: tags.map(function (tag) {
        return {
          id: Number.isInteger(tag.value) ? tag.value : null,
          tag: typeof tag.value === 'string' ? tag.value : null
        };
      }),
      genreIds: genres.map(function (genre) {
        return genre.value;
      })
    }
  };

  return (0, _recomposeRelayModern.createMutation)(mutation, variables);
};

/***/ }),
/* 990 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _liveStreamFormContainer = __webpack_require__(988);

var _liveStreamFormContainer2 = _interopRequireDefault(_liveStreamFormContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UploadLiveStream = function UploadLiveStream(_ref) {
  var liveStreams = _ref.liveStreams,
      addLiveStream = _ref.addLiveStream,
      genres = _ref.genres;
  return _react2.default.createElement(
    'div',
    null,
    liveStreams.map(function (liveStream, i) {
      return _react2.default.createElement(_liveStreamFormContainer2.default, {
        key: liveStream.id,
        form: 'upload_' + liveStream.id,
        id: liveStream.id,
        index: i,
        genres: genres
      });
    }),
    _react2.default.createElement(
      'a',
      { tabIndex: 0, role: 'link', onClick: addLiveStream },
      'Add Live Stream'
    )
  );
};

UploadLiveStream.propTypes = {
  genres: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  addLiveStream: _propTypes2.default.func.isRequired,
  liveStreams: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired
  }).isRequired).isRequired
};

exports.default = UploadLiveStream;

/***/ }),
/* 991 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(10);

var _uploadLiveStream = __webpack_require__(990);

var _uploadLiveStream2 = _interopRequireDefault(_uploadLiveStream);

var _actions = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var upload = _ref.upload;
  return {
    liveStreams: upload.liveStreams
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  addLiveStream: _actions.addLiveStream
})(_uploadLiveStream2.default);

/***/ }),
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */,
/* 1073 */,
/* 1074 */,
/* 1075 */,
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */,
/* 1084 */,
/* 1085 */,
/* 1086 */,
/* 1087 */,
/* 1088 */,
/* 1089 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"forgotPasswordLink":"wwwroot-components-account-login-login__forgotPasswordLink--1OSDR","rememberMe":"wwwroot-components-account-login-login__rememberMe--32uoS"};

/***/ }),
/* 1090 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"loginLink":"wwwroot-components-account-register-register__loginLink--1ZboH"};

/***/ }),
/* 1091 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"audiosHeader":"wwwroot-components-audio-audiosHeader__audiosHeader--27_Al"};

/***/ }),
/* 1092 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"audiosSubHeader":"wwwroot-components-audio-audiosSubHeader__audiosSubHeader--S9Kd5","middleColumn":"wwwroot-components-audio-audiosSubHeader__middleColumn--2d5E0","rightColumn":"wwwroot-components-audio-audiosSubHeader__rightColumn--k_EbN","subHeaderIcons":"wwwroot-components-audio-audiosSubHeader__subHeaderIcons--2dAUm","filterToggles":"wwwroot-components-audio-audiosSubHeader__filterToggles--25DY3"};

/***/ }),
/* 1093 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coverImage":"wwwroot-components-audio-coverImage__coverImage--5JoVP"};

/***/ }),
/* 1094 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dateFilter":"wwwroot-components-audio-dateFilter__dateFilter--2wO1O","slider":"wwwroot-components-audio-dateFilter__slider--2tPys"};

/***/ }),
/* 1095 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"filterText":"wwwroot-components-audio-filterText__filterText--3gF3b","queryFilterLabel":"wwwroot-components-audio-filterText__queryFilterLabel--30m0K","genreLabel":"wwwroot-components-audio-filterText__genreLabel--2MMYR","searchQueryLabel":"wwwroot-components-audio-filterText__searchQueryLabel--19tH0","dateFromLabel":"wwwroot-components-audio-filterText__dateFromLabel--2hesd","dateToLabel":"wwwroot-components-audio-filterText__dateToLabel--Hq-_i","clearAllFilters":"wwwroot-components-audio-filterText__clearAllFilters--2YEs0"};

/***/ }),
/* 1096 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"name":"wwwroot-components-audio-name__name--2CK2V"};

/***/ }),
/* 1097 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currentlyPlayed":"wwwroot-components-audio-play__currentlyPlayed--2xKxR","playIcon":"wwwroot-components-audio-play__playIcon--2Nq9E","pauseIcon":"wwwroot-components-audio-play__pauseIcon--33O-z","play":"wwwroot-components-audio-play__play--3PuxR"};

/***/ }),
/* 1098 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"playCount":"wwwroot-components-audio-playCount__playCount--1R0We"};

/***/ }),
/* 1099 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sideBar":"wwwroot-components-audio-sideBar__sideBar--2H4HU","commentBox":"wwwroot-components-audio-sideBar__commentBox--QqliJ","name":"wwwroot-components-audio-sideBar__name--3s3ZL","fixedSideBar":"wwwroot-components-audio-sideBar__fixedSideBar--23pM9"};

/***/ }),
/* 1100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"toggleSideBar":"wwwroot-components-audio-toggleSideBar__toggleSideBar--2CP7k"};

/***/ }),
/* 1101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"commentTree":"wwwroot-components-comments-comment__commentTree--jC3gw"};

/***/ }),
/* 1102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"commentBox":"wwwroot-components-comments-commentBox__commentBox--1fEI5"};

/***/ }),
/* 1103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"body":"wwwroot-components-comments-common-commentBody__body--16Vni"};

/***/ }),
/* 1104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"flag":"wwwroot-components-comments-common-commentControls__flag--3ADwR","commentControls":"wwwroot-components-comments-common-commentControls__commentControls--1p-NJ"};

/***/ }),
/* 1105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userName":"wwwroot-components-comments-common-commentHeader__userName--2sVlM","dateAdded":"wwwroot-components-comments-common-commentHeader__dateAdded--3YXVy"};

/***/ }),
/* 1106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"replyBox":"wwwroot-components-comments-common-replyBox__replyBox--3T-Ii"};

/***/ }),
/* 1107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"replyButton":"wwwroot-components-comments-common-replyButton__replyButton--2p9Pm"};

/***/ }),
/* 1108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"replies":"wwwroot-components-comments-replies__replies--1e2z-","toggleReplies":"wwwroot-components-comments-replies__toggleReplies--qUFSv"};

/***/ }),
/* 1109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reply":"wwwroot-components-comments-reply__reply--8emJ-","expandOriginalCommentButton":"wwwroot-components-comments-reply__expandOriginalCommentButton--30vWD","userNameContainer":"wwwroot-components-comments-reply__userNameContainer--3WaXv","originalComment":"wwwroot-components-comments-reply__originalComment--JPNNZ","originalCommentExpanded":"wwwroot-components-comments-reply__originalCommentExpanded--37q8D"};

/***/ }),
/* 1110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"audioContent":"wwwroot-components-content-audiosContent__audioContent--1QJqp"};

/***/ }),
/* 1111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"wwwroot-components-content-pageContent__pageContent--1YAl7"};

/***/ }),
/* 1112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"wwwroot-components-errorPage-errorPage__errorPage--3Q8tK","error":"wwwroot-components-errorPage-errorPage__error--2Y0vq"};

/***/ }),
/* 1113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"flag":"wwwroot-components-flag-flag__flag--1BHsb"};

/***/ }),
/* 1114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"radioButtonGroup":"wwwroot-components-flag-flagAudioModal__radioButtonGroup--NUBj9"};

/***/ }),
/* 1115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"radioButtonGroup":"wwwroot-components-flag-flagCommentModal__radioButtonGroup--22VjR"};

/***/ }),
/* 1116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fields":"wwwroot-components-flag-flagModal__fields--1DNhC"};

/***/ }),
/* 1117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"genre":"wwwroot-components-genres-genres__genre--2jAzS"};

/***/ }),
/* 1118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"search":"wwwroot-components-header-search-search__search--39ZSR","searchField":"wwwroot-components-header-search-search__searchField--1K-A8","searchButton":"wwwroot-components-header-search-search__searchButton---ySWj","searchIcon":"wwwroot-components-header-search-search__searchIcon--2kWCT"};

/***/ }),
/* 1119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"wwwroot-components-layouts-primaryLayout-primaryLayout__main--3pHiE"};

/***/ }),
/* 1120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"radioName":"wwwroot-components-radios-radio__radioName--3qiuq","controlsRow":"wwwroot-components-radios-radio__controlsRow--3XAXy","playCount":"wwwroot-components-radios-radio__playCount--3vJny","ratingPercent":"wwwroot-components-radios-radio__ratingPercent--27oB7","controls":"wwwroot-components-radios-radio__controls--Xs-t_","alignRight":"wwwroot-components-radios-radio__alignRight--K0E2u","extraControls":"wwwroot-components-radios-radio__extraControls--1-6wj","coverImageContainer":"wwwroot-components-radios-radio__coverImageContainer--2qvSa"};

/***/ }),
/* 1121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"infiniteScrollContainer":"wwwroot-components-radios-radios__infiniteScrollContainer--2zjm7","gridContainer":"wwwroot-components-radios-radios__gridContainer--13EP1"};

/***/ }),
/* 1122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rating":"wwwroot-components-rating-audioRating__rating--1EEDP","likeContainer":"wwwroot-components-rating-audioRating__likeContainer--3rJQ9","dislikeContainer":"wwwroot-components-rating-audioRating__dislikeContainer--1JHlk"};

/***/ }),
/* 1123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dislike":"wwwroot-components-rating-dislike-dislike__dislike--7dcUw","dislikeIcon":"wwwroot-components-rating-dislike-dislike__dislikeIcon--25Jxl"};

/***/ }),
/* 1124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"like":"wwwroot-components-rating-like-like__like--3eD7p","likeIcon":"wwwroot-components-rating-like-like__likeIcon--3jG5y"};

/***/ }),
/* 1125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ratingPercent":"wwwroot-components-rating-ratingPercent__ratingPercent--2xdl0","ratingPercentage":"wwwroot-components-rating-ratingPercent__ratingPercentage--F3ity"};

/***/ }),
/* 1126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imageButton":"wwwroot-components-shared-button-imageButton__imageButton--Wmyy8","imageOverlay":"wwwroot-components-shared-button-imageButton__imageOverlay--1VRqe"};

/***/ }),
/* 1127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"spinnerIcon":"wwwroot-components-shared-button-spinnerButton__spinnerIcon--2svOb"};

/***/ }),
/* 1128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hide":"wwwroot-components-shared-dropdown-dropdown__hide--3P2Xc","dropdown":"wwwroot-components-shared-dropdown-dropdown__dropdown--sB1xf"};

/***/ }),
/* 1129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropzone":"wwwroot-components-shared-dropzone-dropzone__dropzone--2pt2G","placeholder":"wwwroot-components-shared-dropzone-dropzone__placeholder--1QmZo","placeholderContainer":"wwwroot-components-shared-dropzone-dropzone__placeholderContainer--3O0Mc"};

/***/ }),
/* 1130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"radioButtonGroup":"wwwroot-components-shared-fields-copyrightField-copyrightField__radioButtonGroup--1Stue"};

/***/ }),
/* 1131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"creativeCommonsGroup":"wwwroot-components-shared-fields-copyrightField-creativeCommonsGroup__creativeCommonsGroup--2z5V2"};

/***/ }),
/* 1132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"inputCheckboxField":"wwwroot-components-shared-fields-inputField-inputCheckboxField__inputCheckboxField--e-t-S","input":"wwwroot-components-shared-fields-inputField-inputCheckboxField__input--2M8kY","customCheckbox":"wwwroot-components-shared-fields-inputField-inputCheckboxField__customCheckbox--1ghZl"};

/***/ }),
/* 1133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"wwwroot-components-shared-fields-inputField-inputRadioButton__input--1bLmc","radioButtonContainer":"wwwroot-components-shared-fields-inputField-inputRadioButton__radioButtonContainer--2WUz6","customRadioButton":"wwwroot-components-shared-fields-inputField-inputRadioButton__customRadioButton--oJzmA"};

/***/ }),
/* 1134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"wwwroot-components-shared-fields-inputField-inputTextField__input--2bodt","editableField":"wwwroot-components-shared-fields-inputField-inputTextField__editableField--3HuMp"};

/***/ }),
/* 1135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"textArea":"wwwroot-components-shared-fields-inputField-inputTextareaField__textArea--qCMml"};

/***/ }),
/* 1136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"error":"wwwroot-components-shared-fields-validationField-validationError__error--1ByjC"};

/***/ }),
/* 1137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errors":"wwwroot-components-shared-fields-validationField-validationErrors__errors--1wWDc"};

/***/ }),
/* 1138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"formGroup":"wwwroot-components-shared-form-formGroup__formGroup--28r4m"};

/***/ }),
/* 1139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"grid":"wwwroot-components-shared-grid-grid__grid--2lln2"};

/***/ }),
/* 1140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"gridCell":"wwwroot-components-shared-grid-gridCell__gridCell--2uDCl"};

/***/ }),
/* 1141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imageDropzone":"wwwroot-components-shared-imageDropzone-imageDropzone__imageDropzone--2_pyb"};

/***/ }),
/* 1142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"wwwroot-components-shared-overlay-overlay__overlay--1GqX1","clickableOverlay":"wwwroot-components-shared-overlay-overlay__clickableOverlay--1LGEQ"};

/***/ }),
/* 1143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup":"wwwroot-components-shared-popup-popup__popup--3RAHV"};

/***/ }),
/* 1144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popups":"wwwroot-components-shared-popup-popups__popups--2GUx1"};

/***/ }),
/* 1145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"basicInfo":"wwwroot-components-upload-common-basicInfo-basicInfo__basicInfo--3WsFl","imageDropzone":"wwwroot-components-upload-common-basicInfo-basicInfo__imageDropzone--12Baz","formGroup":"wwwroot-components-upload-common-basicInfo-basicInfo__formGroup--35Rbi"};

/***/ }),
/* 1146 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"upload":"wwwroot-components-upload-upload__upload--MBWMh","title":"wwwroot-components-upload-upload__title--2LLLD","tabList":"wwwroot-components-upload-upload__tabList--1jHvJ"};

/***/ }),
/* 1147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"uploadFileForm":"wwwroot-components-upload-uploadLiveStream-liveStreamForm__uploadFileForm--3HBvI","buttonsContainer":"wwwroot-components-upload-uploadLiveStream-liveStreamForm__buttonsContainer--3Doet"};

/***/ })
]),[809]);