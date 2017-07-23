import jsmediatags from 'jsmediatags/dist/jsmediatags';
import shortid from 'shortid';

import fetchProgress from '../shared/polyfills/fetchProgress';
import trimFileExtension from '../shared/utilities/trimFileExtension';
import notOkError from '../shared/fetch/errorHandling/notOkError/notOkError';
import notOkErrorPopup from '../shared/fetch/errorHandling/notOkError/notOkErrorPopup';

export const uploadMp3 = (jsonText, id) => (dispatch) => {
  const body = JSON.parse(jsonText);
  const eventSource = new EventSource(`upload/uploadProgress?progressId=${id}`);

  body.progressId = id;

  eventSource.onmessage = (e) => {
    const progressPercent = parseInt(e.data, 10);

    if (progressPercent === 100) {
      eventSource.close();
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent,
        message: 'Successfully uploaded.',
        id,
      });
    } else {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 50 + (progressPercent / 2),
        message: 'Uploading to SoundVast...',
        id,
      });
    }
  };

  fetch('/upload/uploadMp3', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(notOkError)
    .then((response) => {
      if (!response.ok) {
        eventSource.close();
      }
    })
    .catch(() => {
      notOkErrorPopup(dispatch);
      eventSource.close();
    });
};

export const convertToMp3 = (file, id) => (dispatch) => {
  const formData = new FormData();

  formData.set('file', file);

  fetchProgress('/upload/convertToMp3', {
    method: 'post',
    body: formData,
  }, {
    readystatechange() {
      if (this.readyState === 4) {
        uploadMp3(this.responseText, id)(dispatch);
      }
    },
  }, {
    load: () => {
      dispatch({
        type: 'UPDATE_UPLOAD_PROGRESS',
        progressPercent: 25,
        id,
        message: 'Converting to mp3...',
      });
    },
    progress: (e) => {
      if (e.lengthComputable) {
        const progressPercent = parseInt((e.loaded / e.total) * 25, 10);

        dispatch({
          type: 'UPDATE_UPLOAD_PROGRESS',
          progressPercent,
          id,
          message: 'Sending file to server...',
        });
      }
    },
  });
};

export const uploadAudioFiles = files => (dispatch) => {
  files.forEach((file) => {
    fetch(file.preview)
      .then(notOkError)
      .then(response => response.blob())
      .then((blob) => {
        const audioFile = {
          id: shortid.generate(),
        };

        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            audioFile.artist = tag.tags.artist;
            audioFile.album = tag.tags.album;
            audioFile.title = tag.tags.title;

            if (tag.tags.picture !== undefined) {
              const coverImageBytes = new Uint8Array(tag.tags.picture.data);

              audioFile.coverImageFile = new File([coverImageBytes], audioFile.title, {
                type: tag.tags.picture.format,
              });
              audioFile.coverImagePreview = URL.createObjectURL(audioFile.coverImageFile);
            }

            dispatch({
              type: 'ADD_AUDIO_FILE',
              audioFile,
            });

            convertToMp3(file, audioFile.id)(dispatch);
          },
          onError: () => {
            audioFile.title = trimFileExtension(file.name);

            dispatch({
              type: 'ADD_AUDIO_FILE',
              audioFile,
            });

            convertToMp3(file, audioFile.id)(dispatch);
          },
        });
      })
      .catch(notOkErrorPopup(dispatch));
  });
};

export const removeAudioFile = index => ({
  type: 'REMOVE_AUDIO_FILE',
  index,
});

export const updateCoverImageFile = (file, index) => ({
  type: 'UPDATE_COVER_IMAGE_FILE',
  file,
  index,
});

export const removeCoverImageFile = index => ({
  type: 'REMOVE_COVER_IMAGE_FILE',
  index,
});
