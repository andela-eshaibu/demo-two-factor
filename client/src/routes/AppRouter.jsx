import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Roster from '../components/Roster';
import Schedule from '../components/Schedule';

const AppRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </div>
);

export default AppRouter;
