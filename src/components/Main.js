import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './Home';
import Dashboard from './Dashboard';

import Categories from './categories/Categories';
import CreateCategory from './categories/CreateCategory';
import EditCategory from './categories/EditCategory';

import { ProfileWithRouter } from './profile/Profile';

import Recipes from './recipes/Recipes';
import CreateRecipe from './recipes/AddRecipes';
import EditRecipe from './recipes/EditRecipe';

import { YummyNotifier } from './Utilities';

export const FileNotFound = () => (
  <YummyNotifier message="File Not found. Check the url and try again" type="info" />
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn, userData } = rest;

  return (
    <Route
      {...rest}
      render={
        props => (
          loggedIn
          ? <Component userData={userData} {...props} />
          : <Redirect to={{
            pathname: '/',
            state: { from: props.location },
          }}
          />
        )
     }
    />);
};

const Main = ({ loginUser, loggedIn, userData }) => (
  <Switch>
    <Route
      path="/"
      exact
      component={props => <Home loginUser={loginUser} loggedIn={loggedIn} {...props} />}
    />
    <PrivateRoute
      path="/home"
      component={Dashboard}
      loggedIn={loggedIn}
    />
    <PrivateRoute
      path="/recipes"
      component={Recipes}
      loggedIn={loggedIn}
    />
    <PrivateRoute
      path="/add-recipe"
      component={CreateRecipe}
      loggedIn={loggedIn}
    />
    <PrivateRoute
      path="/edit-recipe/:recipeId"
      component={EditRecipe}
      loggedIn={loggedIn}
    />
    <PrivateRoute
      path="/categories"
      component={Categories}
      loggedIn={loggedIn}
    />
    <PrivateRoute
      path="/add-category"
      component={CreateCategory}
      loggedIn={loggedIn}
      userData={userData}
    />
    <PrivateRoute
      path="/edit-category/:categoryId"
      component={EditCategory}
      loggedIn={loggedIn}
      userData={userData}
    />
    <PrivateRoute
      path="/profile"
      component={ProfileWithRouter}
      loggedIn={loggedIn}
      userData={userData}
    />
    <Route component={FileNotFound} />
  </Switch>
);

// component prop types
Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
  userData: PropTypes.object,
};

Main.defaultProps = {
  userData: null,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([React.Component, Function]).isRequired,
  location: PropTypes.object,
};

export default Main;
