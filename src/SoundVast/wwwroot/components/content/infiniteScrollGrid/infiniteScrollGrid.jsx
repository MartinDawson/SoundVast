import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

const InfiniteScrollGrid = ({ loadMore, hasMore, children }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={loadMore}
    hasMore={hasMore}
    loader={<div>Loading ...</div>}
  >
    {children}
  </InfiniteScroll>
);

InfiniteScrollGrid.propTypes = {
  children: PropTypes.node.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default InfiniteScrollGrid;
