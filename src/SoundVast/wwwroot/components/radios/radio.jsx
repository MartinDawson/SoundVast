import React from 'react';
import PropTypes from 'prop-types';

import Play from '../audio/playContainer';
import CoverImage from '../audio/coverImageContainer';
import Rating from '../rating/audioRating';
import Like from '../rating/like/likeAudioContainer';
import Dislike from '../rating/dislike/dislikeAudioContainer';
import Name from '../audio/name';
import styles from './radio.less';
import RatingPercent from '../rating/ratingPercent';
import SideBar from '../audio/mobileSideBarContainer';
import Listeners from './listenersContainer';

const Radio = ({ isFirstLiveStream, liveStream }) => {
  const name = <Name className={styles.radioName} name={liveStream.name} />;

  return (
    <div>
      {liveStream.websiteUrl ? <a href={liveStream.websiteUrl} target="_blank">{name}</a> : <div>{name}</div>}
      <div className={styles.coverImageContainer}>
        <Play id={liveStream.audioId}>
          <CoverImage name={liveStream.name} coverImageUrl={liveStream.coverImageUrl} />
        </Play>
      </div>
      <div className={styles.controls}>
        <div className={styles.controlsRow}>
          <Listeners id={liveStream.audioId} />
        </div>
      </div>
      <SideBar
        audio={liveStream}
        isFirstLiveStream={isFirstLiveStream}
      />
    </div>
  );
};

Radio.propTypes = {
  liveStream: PropTypes.shape({
    coverImageUrl: PropTypes.string,
    websiteUrl: PropTypes.string,
    audioId: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isFirstLiveStream: PropTypes.bool.isRequired,
};

export default Radio;
