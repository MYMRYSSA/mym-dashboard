import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ListItemButton from '@material-ui/core/ListItemButton';

// assets
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// style constant
const useStyles = makeStyles((theme) => ({
  collapseIcon: {
    fontSize: '1rem',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  collapseIconSub: {
    fontSize: '1rem',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  menuIcon: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  listIcon: {
    minWidth: '18px',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  listCustomIconSub: {
    width: '6px',
    height: '6px'
  },
  listCustomIconSubActive: {
    width: '8px',
    height: '8px'
  },
  listItem: {
    marginBottom: '5px',
    alignItems: 'flex-start'
  },
  listItemNoBack: {
    marginBottom: '5px',
    backgroundColor: 'transparent !important',
    paddingTop: '8px',
    paddingBottom: '8px',
    alignItems: 'flex-start'
  },
  subMenuCaption: {
    ...theme.typography.subMenuCaption
  },
  collapseWrapper: {
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      left: '32px',
      top: 0,
      height: '100%',
      width: '1px',
      opacity: 1,
      background: theme.palette.primary.light
    }
  }
}));

//-----------------------|| SIDEBAR MENU LIST COLLAPSE ITEMS ||-----------------------//

const NavCollapse = ({ menu, level }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
  };

  const Icon = menu.icon;
  const menuIcon = menu.icon ? (
    <Icon stroke={1.5} size="1.3rem" className={classes.listCustomIcon} />
  ) : (
    <FiberManualRecordIcon
      className={selected === menu.id ? classes.listCustomIconSubActive : classes.listCustomIconSub}
      fontSize={level > 0 ? 'inherit' : 'default'}
    />
  );

  return (
    <React.Fragment>
      <ListItemButton
        className={level > 1 ? classes.listItemNoBack : classes.listItem}
        sx={{ borderRadius: '10px' }}
        selected={selected === menu.id}
        onClick={handleClick}
        style={{ paddingLeft: level * 23 + 'px' }}
      >
        <ListItemIcon className={classes.listIcon}>{menuIcon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" className={classes.listItemTypography}>
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography variant="caption" className={classes.subMenuCaption} display="block" gutterBottom>
                {menu.caption}
              </Typography>
            )
          }
        />
      </ListItemButton>
    </React.Fragment>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number
};

export default NavCollapse;
