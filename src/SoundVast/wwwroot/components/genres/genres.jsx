import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../shared/grid/grid';
import Genre from './genreContainer';

const Genres = ({ genres, typeUrl }) => (
  <Grid>
    {genres.map(genre => (
      <Genre
        key={genre.id}
        name={genre.name}
        coverImageUrl={genre.coverImageUrl}
        url={`/${typeUrl}`}
      />
    ))}
  </Grid>
);

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  typeUrl: PropTypes.string.isRequired,
};

export default Genres;
