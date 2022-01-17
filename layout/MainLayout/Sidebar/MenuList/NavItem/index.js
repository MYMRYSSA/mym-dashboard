import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// assets
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styles from '../../../../../styles/Dashboard.module.css';

//-----------------------|| SIDEBAR MENU LIST ITEMS ||-----------------------//

const NavItem = ({ item, level }) => {
  const [selected, setSelected] = useState(null);

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon stroke={1.5} size="1.3rem" className={styles.listCustomIcon} />
  ) : (
    <FiberManualRecordIcon className={styles.listCustomIconSubActive} fontSize={level > 0 ? 'inherit' : 'default'} />
  );

  // active menu item on page load
  React.useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      setSelected(item.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      disabled={item.disabled}
      className={level > 1 ? styles.listItemNoBack : styles.listItem}
      sx={{ borderRadius: '10px' }}
      selected={false}
      onClick={() => setSelected(item.id)}
      style={{ paddingLeft: level * 23 + 'px' }}
    >
      <ListItemIcon className={styles.listIcon}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="h5" color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
