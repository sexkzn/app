import React from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import GirlList from "./components/GirlList";
import GirlItem from "./components/GirlItem";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/girls">Девушки</Link>
                    </li>
                </ul>

                <hr/>

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <GirlList/>
                        <Redirect to="/girls"/>
                    </Route>
                    <Route exact path="/girls" component={GirlList}>
                    </Route>
                    <Route exact path="/girls/:id" component={GirlItem}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
