import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import FlagAudioModal from './flagAudioModal';
import { hideModal } from '../shared/modal/actions';
import flagAudioMutation from './flagAudioMutation';
import { showFlaggedPopup } from './actions';

const mapStateToProps = ({ modal }) => ({
  audioId: modal.id,
});

const handlers = {
  onSubmit: ({ dispatch, audioId }) => input =>
    flagAudioMutation(input, audioId)
      .then(() => {
        dispatch(showFlaggedPopup());
        dispatch(hideModal());
      }).catch((error) => {
        if (!input.reason) {
          throw new SubmissionError({
            _error: ['A reason for flagging is required'],
          });
        }
        throw new SubmissionError(error);
      }),
};

export default compose(
  connect(mapStateToProps),
  setPropTypes({
    audioId: PropTypes.number,
  }),
  withHandlers(handlers),
)(FlagAudioModal);
