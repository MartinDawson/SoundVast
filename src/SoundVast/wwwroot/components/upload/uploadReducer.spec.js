import expect from 'expect';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const uploadReducer = proxyquire('./uploadReducer', {
  shortid: {
    generate: expect.createSpy().andReturn(0),
  },
}).default;


describe('uploadReducer', () => {
  it('should return defaultState if undefined', () => {
    const state = uploadReducer(undefined, {
      type: 'NONE',
    });

    expect(state).toEqual({
      audioFiles: [],
      progressPercents: [],
    });
  });

  it('should add audio files to existing files', () => {
    const actionProps = {
      audioFiles: [{
        name: 'bubble.mp3',
      }],
    };
    const prevState = {
      audioFiles: [{
        name: 'test.mp3',
      }],
    };

    const state = uploadReducer(prevState, {
      type: 'ADD_AUDIO_FILES',
      ...actionProps,
    });

    expect(state).toEqual({
      audioFiles: [
        { name: 'test.mp3' },
        { name: 'bubble.mp3' },
      ],
    });
  });

  it('should remove audio file', () => {
    const prevState = {
      audioFiles: [
        { name: 'test.mp3' },
        { name: 'testTwo.mp3' },
      ],
    };

    const state = uploadReducer(prevState, {
      type: 'REMOVE_AUDIO_FILE',
      index: 0,
    });

    expect(state.audioFiles.length).toBe(1);
  });

  it('should update cover image file', () => {
    const index = 0;
    const actionProps = {
      preview: 'bubble.jpg',
      index,
    };

    const prevState = {
      audioFiles: [
        { name: 'test.mp3' },
      ],
    };

    const state = uploadReducer(prevState, {
      type: 'UPDATE_COVER_IMAGE_FILE',
      ...actionProps,
    });

    expect(state.audioFiles[index].previewCoverImage).toBe(
      actionProps.preview,
    );
  });

  it('should remove cover image file', () => {
    const index = 0;
    const prevState = {
      audioFiles: [
        { previewCoverImage: 'test.jpg' },
      ],
    };

    const state = uploadReducer(prevState, {
      type: 'REMOVE_COVER_IMAGE_FILE',
      index,
    });

    expect(state.audioFiles[index].previewCoverImage).toBe(null);
  });

  it('should update upload progress', () => {
    const index = 0;
    const actionProps = {
      progressPercent: 33,
      message: 'uploading files...',
      index,
    };

    const prevState = {
      audioFiles: [
        { name: 'test.mp3' },
      ],
    };

    const state = uploadReducer(prevState, {
      type: 'UPDATE_UPLOAD_PROGRESS',
      ...actionProps,
    });

    expect(state.audioFiles[index]).toEqual({
      progress: {
        value: actionProps.progressPercent,
        message: actionProps.message,
      },
      ...prevState.audioFiles[index],
    });
  });
});