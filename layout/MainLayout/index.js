import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { AppBar, Toolbar } from '@material-ui/core';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import styles from '../../styles/Dashboard.module.css';

//-----------------------|| MAIN LAYOUT ||-----------------------//

const MainLayout = ({ children }) => {
  // Handle left drawer
  const [opened, setOpened] = useState(false);
  const handleLeftDrawerToggle = () => {
    setOpened(!opened);
  };

  return (
    <div className={styles.dashboardContainer}>
      <AppBar enableColorOnDark position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Sidebar drawerOpen={opened} drawerToggle={handleLeftDrawerToggle} />
      <main
        className={!opened ? styles.dashboardContent : styles.dashboardContentOpened}
        style={{ transition: 'all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms' }}
      >
        <div>{children}</div>
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
