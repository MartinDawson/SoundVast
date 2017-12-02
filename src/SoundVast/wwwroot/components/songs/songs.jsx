import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import Song from './song';
import InfiniteScrollGrid from '../shared/grid/infiniteScrollGrid';
import Filters from '../audio/filtersContainer';
import genreTypeNames from '../shared/utilities/genreTypeNames';

const Songs = ({ songs, loadMore, hasMore }) => (
  <SoundVastTitle title="Songs">
    <div>
      <Filters type={genreTypeNames.music} />
      <InfiniteScrollGrid
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasMore}
      >
        {songs.map(song => (
          <Song
            key={song.audioId}
            audioId={song.audioId}
            coverImageUrl={song.coverImageUrl}
            name={song.name}
            artist={song.artist}
            likes={song.likes}
            dislikes={song.dislikes}
          />
        ))}
      </InfiniteScrollGrid>
    </div>
  </SoundVastTitle>
);

Songs.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;