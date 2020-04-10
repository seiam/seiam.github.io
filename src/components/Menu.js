import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
  },
}));

function Menu() {

  const classes = useStyles();

  return (
      <Paper className='ml-1'>
        <MenuList>
          {/* <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/resume">Resume</Link></MenuItem>
          <MenuItem><Link to="/about-me">About Me</Link></MenuItem> */}
          <Link to="/home"><MenuItem>Home</MenuItem></Link>
          <Link to="/resume"><MenuItem>Resume</MenuItem></Link>
          <Link to="/about-me"><MenuItem>About Me</MenuItem></Link>
        </MenuList>
      </Paper>
  );
}

export default Menu;
