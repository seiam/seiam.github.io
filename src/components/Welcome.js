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

export default function Home(props) {

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h2 className="m-2">Welcome to my webpage!</h2>
            <p className="m-2">
                This website is still in development, but look around to learn about me. 
                <span role="img" aria-label="sheep">😃</span>
            </p>

        </Paper>
    );
}