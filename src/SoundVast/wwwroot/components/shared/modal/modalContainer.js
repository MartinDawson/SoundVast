import { connect } from 'react-redux';
import { compose, setPropTypes, branch, renderNothing } from 'recompose';
import PropTypes from 'prop-types';

import Modal from './modal';
import { hideModal, showModal } from './actions';
import { enableBodyScroll, disableBodyScroll } from '../utilities/scrollLock';

const mapStateToProps = ({ modal }, { id }) => ({
  isCurrentModal: modal.currentModal === id,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  if ((ownProps.authRequired && !ownProps.isAuthorized) && stateProps.isCurrentModal) {
    dispatchProps.showModal('login');
  }

  if (stateProps.isCurrentModal) {
    disableBodyScroll();
  } else {
    enableBodyScroll();
  }

  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
};

export default compose(
  setPropTypes({
    id: PropTypes.string.isRequired,
    isAuthorized: PropTypes.bool,
  }),
  connect(mapStateToProps, {
    hideModal,
    showModal,
  }, mergeProps),
  branch(
    props => !props.isCurrentModal,
    renderNothing,
  ),
)(Modal);
