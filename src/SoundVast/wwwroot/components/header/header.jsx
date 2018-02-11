import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SoundVastLogoIcon from '../icons/logo';
import LegalIcon from '../icons/legal';
import styles from './header.less';
import UserButton from './userButton/userButtonContainer';
import UnAuthorizedList from './unAuthorizedList/unAuthorizedListContainer';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Popups from '../shared/popup/popupsContainer';
import Button from '../shared/button/button';
import Search from './search/searchContainer';
import LinkButton from '../shared/button/linkButton';
import HeaderGenreLink from './headerGenreLinkContainer';
import HeaderUploadLink from './headerUploadLink';
import HeaderTermsLink from './headerTermsLink';
import HeaderPrivacyLink from './headerPrivacyLink';

const Header = ({
  user,
}) => (
  <header className={styles.header}>
    <nav>
      <LinkButton
        to="/"
        styleName="secondary"
        className={classnames(styles.navButton, styles.logoContainer)}
      >
        <SoundVastLogoIcon className={styles.logoIcon} />
      </LinkButton>
      <HeaderGenreLink />
      <HeaderUploadLink />
      <Search
        className={styles.search}
      />
      <UserButton user={user} className={styles.navButton} />
      <UnAuthorizedList user={user} className={styles.navButton} />
      <Popups />
      <Dropdown
        titleCallback={onClick => (
          <Button className={styles.dropdownTitle} styleName="secondary" onClick={onClick}>
            <LegalIcon className={styles.legalIcon} />
          </Button>
        )}
        className={styles.navButton}
      >
        <ul>
          <li>
            <HeaderTermsLink />
            <HeaderPrivacyLink />
          </li>
        </ul>
      </Dropdown>
    </nav>
  </header>
);

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
};

export default Header;
