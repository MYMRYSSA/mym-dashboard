import React from 'react';
import PropTypes from 'prop-types';
import { Box, Drawer } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuList from './MenuList';
import styles from '../../../styles/Dashboard.module.css';

//-----------------------|| SIDEBAR DRAWER ||-----------------------//

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {

  const drawer = (
    <React.Fragment>
      <PerfectScrollbar component="div" className={styles.scrollHeight}>
        <MenuList />
      </PerfectScrollbar>
    </React.Fragment>
  );

  return (
    <nav>
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        className={styles.menuContainer}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default Sidebar;
