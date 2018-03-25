import React from 'react';
import { graphql } from 'react-relay';
import { compose, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import Genres from './genres';
import genreType from './genreType';

const query = graphql`
  query genresContainerQuery {
    genres {
      ...genresContainer_genres
    }
  }
`;

const fragments = graphql`
  fragment genresContainer_genres on Genre @relay(plural: true) {
    id,
    name,
    coverImages {
      dimention
      imageUrl
    }
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
);

const GenresContainer = enhance(Genres);

export const routeConfig = {
  Component: GenresContainer,
  query,
  render: ({ props }) =>
    props && <GenresContainer genres={props.genres} />,
};

export default GenresContainer;
