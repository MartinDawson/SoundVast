import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import PlayState from './playState/container';
import Like from './ratingControl/like/container';
import Dislike from './ratingControl/dislike/container';

const Song = ({ isCurrent, name, artist, coverImageUrl, togglePlay, id }) => (
  <div className={styles.song}>
    <figure>
      <button onClick={togglePlay} className={styles.imageContainer}>
        <img alt="" src={coverImageUrl} />
        <PlayState isCurrent={isCurrent} />
      </button>
      <figcaption className={styles.name}>{name}</figcaption>
      <figcaption className={styles.artist}>{artist}</figcaption>
      <Like songId={id} />
      <Dislike songId={id} />
    </figure>
  </div>
);

Song.defaultProps = {
  artist: null,
};

Song.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string,
  coverImageUrl: PropTypes.string.isRequired,
  togglePlay: PropTypes.func.isRequired,
};

export default Song;
