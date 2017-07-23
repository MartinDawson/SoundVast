import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});
const response = {
  email: 'test@gmail.com',
  confirmEmailLink: '/account/confirm',
};

describe('registerFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
    fetchMock.getOnce('/account/getAccountDetails', response);
    fetchMock.postOnce('/email/sendEmail', 200);
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should show popup message on success', () => {
    fetchMock.postOnce('/account/register', response);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_TEXT_POPUP',
        text: 'You have successfully logged in.',
        id: 'textPopup',
      });
    });
  });

  it('should close modal on success', () => {
    fetchMock.postOnce('/account/register', response);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'HIDE_MODAL',
      });
    });
  });

  it('should fetch user details on success', () => {
    fetchMock.postOnce('/account/register', response);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/getAccountDetails')).toBe(true);
    });
  });

  it('should send confirmation email on success', () => {
    fetchMock.postOnce('/account/register', response);

    store.dispatch(actions.submit()).then(() => {
      const sentEmailBody = JSON.parse(fetchMock.lastOptions('/email/sendEmail').body);

      expect(fetchMock.called('/email/sendEmail')).toBe(true);
      expect(sentEmailBody).toContain({
        email: response.email,
        subject: 'Confirm Email',
      });
      expect(sentEmailBody.message).toBeTruthy();
    });
  });
});
