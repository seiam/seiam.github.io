import React , {useState} from 'react';
import {Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        height: '400px'
    },
}));

export default function Resume(props) {

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h2 className="m-2 p-2">Welcome to my resume!</h2>

        </Paper>
    );
}