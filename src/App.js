import React, { Component } from 'react';
import UserCardContainer from './containers/UserCardContainer';
import UserContainer from './containers/UserContainer';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Home from './Home';
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/Login" component={UserContainer} exact />
          {/* <Route path="/repolist" component={UserContainer} exact /> */}
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    );
  }
}
