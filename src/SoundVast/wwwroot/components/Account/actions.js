/* eslint-disable import/prefer-default-export */

import notOkError from '../shared/fetch/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/notOkError/popup/popup';
import { showTextPopup } from '../shared/popup/actions';

export const getAccountDetails = () => dispatch =>
  fetch('/account/getAccountDetails', {
    credentials: 'same-origin',
  }).then(notOkError)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'GET_ACCOUNT_DETAILS',
      userName: json.userName,
      isLoggedIn: json.isLoggedIn,
      isAdmin: json.isAdmin,
    }))
    .catch(notOkErrorPopup(dispatch));

export const showLoginPopup = () => showTextPopup('You have successfully logged in.');
