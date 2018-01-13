import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './Home';
import Dashboard from './Dashboard';
import Categories from './categories/Categories';
import Profile from './profile/Profile';
import Recipes from './recipes/Recipes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = rest;

  return (
    <Route
      {...rest}
      render={
        props => (
          loggedIn
          ? <Component />
          : <Redirect to={{
            pathname: '/',
            state: { from: props.location },
          }}
          />
        )
     }
    />);
};

const Main = props => (
  <Switch>
    <Route
      path={props.loggedIn ? '/' : '/home'}
      exact
      component={() => <Home loginUser={props.loginUser} loggedIn={props.loggedIn} />}
    />
    <PrivateRoute
      path="/home"
      component={Dashboard}
      loggedIn={props.loggedIn}
    />
    <PrivateRoute
      path="/recipes"
      component={Recipes}
      loggedIn={props.loggedIn}
    />
    <PrivateRoute
      path="/categories"
      component={Categories}
      loggedIn={props.loggedIn}
    />
    <PrivateRoute
      path="/profile"
      component={Profile}
      loggedIn={props.loggedIn}
    />
  </Switch>
);

// component prop types
Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([React.Component, Function]).isRequired,
  location: PropTypes.object.isRequired,
};

export default Main;
