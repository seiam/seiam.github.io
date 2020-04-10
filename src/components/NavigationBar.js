import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Seiam's Webpage
          </Typography>
          <Tooltip title="My LinkedIn Page">
            <Button onClick={() => window.open("https://www.linkedin.com/in/seiam-salehi/")}>
              <LinkedInIcon/>
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}