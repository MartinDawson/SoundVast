import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './component.less';
import dropzoneStyles from '../../../shared/dropzone/component.less';
import FileInformation from './fileInformation/component';
import Form from './form/container';
import Progress from './progress/component';

const AudioDropzone = ({ onDrop, files, removeFile }) => (
  <div>
    <Dropzone
      className={styles.audioDropzone}
      accept="audio/*"
      onDrop={onDrop}
    >
      <div className={styles.placeholderContainer}>
        <div className={dropzoneStyles.placeholder}>
          Upload audio
        </div>
      </div>
      {files.map(file => (
        <figure key={file.id}>
          <img alt="" src={file.preview} />
          <figcaption>{file.title}</figcaption>
        </figure>
      ))}
    </Dropzone>
    <aside>
      {files.map((file, i) => (
        <div key={file.id}>
          <Progress {...file.progress} />
          <Form
            form={`upload_${file.id}`}
            index={i}
            removeFile={removeFile}
          >
            <FileInformation index={i} />
          </Form>
        </div>
      ))}
    </aside>
  </div>
);

AudioDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      progressPercent: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default AudioDropzone;