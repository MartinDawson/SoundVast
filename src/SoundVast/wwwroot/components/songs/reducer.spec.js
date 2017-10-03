import expect from 'expect';

import songsReducer from './reducer';

describe('songsReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = songsReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      songs: [],
      hasMore: true,
    });
  });

  it('should fetch songs', () => {
    const ratings = [
      { id: 0, liked: true, audioId: 0 },
    ];
    const prevState = {
      songs: [
        { id: 0, name: 'test.mp3', ratings },
      ],
      test: 'test',
    };
    const actionProps = {
      songs: [
        { id: 1, name: 'bubble.mp3' },
      ],
      hasMore: true,
    };
    const state = songsReducer(prevState, {
      type: 'FETCH_NEXT_SONGS',
      ...actionProps,
    });

    expect(state).toEqual({
      ...prevState,
      ...actionProps,
      songs: [
        { id: 0, name: 'test.mp3', ratings: [0] },
        { id: 1, name: 'bubble.mp3' },
      ],
      ratings: {
        0: { id: 0, liked: true, audioId: 0 },
      },
    });
  });

  it('should rate song', () => {
    const prevState = {
      test: 'test',
    };
    const actionProps = {
      rating: {
        id: 1,
        liked: true,
      },
    };
    const state = songsReducer(prevState, {
      type: 'RATE_SONG',
      ...actionProps,
    });

    expect(state).toEqual({
      ...prevState,
      ratings: {
        [actionProps.rating.id]: actionProps.rating,
      },
    });
  });
});
