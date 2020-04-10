import React from 'react';
import NavigationBar from './components/NavigationBar'
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function App() {

  const classes = useStyles();

  document.title = "Seiam's Webpage"
  return (
    <div>
    	<NavigationBar/>
      <Body/>
    </div>
  );
}

export default App;
