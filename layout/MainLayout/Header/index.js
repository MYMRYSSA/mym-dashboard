import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, ButtonBase } from '@material-ui/core';
import ProfileSection from './ProfileSection';
import styles from '../../../styles/Dashboard.module.css';
import { IconMenu2 } from '@tabler/icons';

const Header = ({ handleLeftDrawerToggle }) => {
  return (
    <React.Fragment>
      <div className={styles.boxContainer}>
        <img src="/logo.png" height={40} />
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar variant="rounded" className={styles.headerAvatar} onClick={handleLeftDrawerToggle} color="inherit">
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </div>
      <ProfileSection />
    </React.Fragment>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
