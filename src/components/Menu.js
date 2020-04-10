import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(2)
  },
}));

function Menu() {

  const classes = useStyles();

  return (
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Welcome</MenuItem>
          <MenuItem>Resume</MenuItem>
          <MenuItem>About Me</MenuItem>
        </MenuList>
      </Paper>
  );
}

export default Menu;
