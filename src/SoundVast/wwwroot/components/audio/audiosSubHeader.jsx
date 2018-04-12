import React from 'react';

import styles from './audiosSubHeader.less';
import ToggleSideBar from './toggleSideBarContainer';

/* eslint-disable react/no-array-index-key */
const AudiosSubHeader = () => (
  <div className={styles.audiosSubHeader}>
    <div className={styles.rightColumn}>
      <div className={styles.subHeaderIcons}>
        <ToggleSideBar className={styles.toggleSideBar} />
      </div>
    </div>
  </div>
);

export default AudiosSubHeader;
