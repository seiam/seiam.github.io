import React , {useState} from 'react';
import Menu from './Menu'
import Home from './Welcome'
import Resume from './Resume'
import AboutMe from './AboutMe'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  

export default function Body(props) {

  return (
    <div className="row">
        <Router>
            <div className="col-3 m-2">
                <Menu/>
            </div>
            <div className="col-8">
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/resume">
                        <Resume/>
                    </Route>
                    <Route path="/about-me">
                        <AboutMe/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}