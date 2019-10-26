import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';

const Main = () => (
    // set up routes for each application view
    <Switch>
        <Route path='/' component={App}></Route>
        <Route path='/camera' component={Camera}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/about' component={About Us}></Route>
    </Switch>
);