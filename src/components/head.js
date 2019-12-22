import React from 'react';
import './head.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import About from './about'

export default function Header() {
    return (
        <Router>
        <div className="header"><Link to="/home">
            <h1 id="maintitle">Ludovic Mazet</h1>
            <h3 id="secondtitle">Dev Web Junior</h3>
            </Link>
        </div>
        

        <Switch>
            <Route path="/home">
            </Route>
        </Switch>

        </Router>
    )
}