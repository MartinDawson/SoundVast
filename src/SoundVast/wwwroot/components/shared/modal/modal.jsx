import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal.less';
import ModalOverlay from './overlay/overlay';

const Modal = ({ children, title, containerClass, hideModal }) => (
  <div className={containerClass}>
    <div className={styles.layout}>
      <button onClick={hideModal} className={styles.close}>
        <span role="img" aria-label="close">
          ❌
        </span>
      </button>
      <div className={styles.title}>
        {title}
      </div>
      {children}
    </div>
    <ModalOverlay hideModal={hideModal} />
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
