import React, {Fragment} from 'react';
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import {Route, Switch} from "react-router";

const Body = () => {
    return (
        <Fragment>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>

        </Fragment>
    );
};

export default Body;