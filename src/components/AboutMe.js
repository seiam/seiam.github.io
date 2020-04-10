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

export default function AboutMe(props) {

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h2 className="m-2 p-2">Welcome to my about me!</h2>
            <p className="m-2 p-2">When I was a young lad of about 7 or 8, I discovered my passion for 
            eating spaghetti. I took that first spoonful of pasta noodles and the rest was history. Since
            then I have consumed upwards of 9700 plates of spaghetti and I don't have any plans on stopping.
            You may be wondering to yourself - isn't that more spaghetti than is humanly possible to consume?
            But I ask you this: How can I stop eating delicious spaghetti when there are countless children
            around the world who would kill for the smallest slurp of these noodles?
            </p>
        </Paper>
    );
}