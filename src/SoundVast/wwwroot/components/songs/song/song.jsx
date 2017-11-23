import React from 'react';
import PropTypes from 'prop-types';

import styles from './song.less';
import GridCell from '../../shared/grid/gridCell';
import Play from '../../audio/playContainer';
import CoverImage from '../../audio/coverImage';
import Rating from '../../rating/rating';
import Name from '../../audio/name';

const Song = ({ coverImageUrl, likes, dislikes, name, artist, audioId }) => (
  <GridCell>
    <Play id={audioId}>
      <CoverImage coverImageUrl={coverImageUrl} />
    </Play>
    <Name name={name} />
    <div className={styles.artist}>{artist}</div>
    <Rating audioId={audioId} likes={likes} dislikes={dislikes} />
  </GridCell>
);

Song.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
  audioId: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Song;
