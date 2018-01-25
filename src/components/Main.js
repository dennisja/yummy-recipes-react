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

import {YummyNotifier} from './Utilities';

export const FileNotFound = () => (
  <YummyNotifier message= "File Not found. Check the url and try again" type="info"/>
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedIn, userData } = rest;

  return (
    <Route
      {...rest}
      render={
        props => (
          loggedIn
          ? <Component userData={userData} />
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
      path="/"
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
      path="/add-recipe"
      component={CreateRecipe}
      loggedIn={props.loggedIn}
    />
    <PrivateRoute
      path="/edit-recipe/:recipeId"
      component={EditRecipe}
      loggedIn={props.loggedIn}
    />
    <PrivateRoute
      path="/categories"
      component={Categories}
      loggedIn={props.loggedIn}
    />
    <PrivateRoute
      path="/add-category"
      component={CreateCategory}
      loggedIn={props.loggedIn}
      userData={props.userData}
    />
    <PrivateRoute
      path="/edit-category/:categoryId"
      component={EditCategory}
      loggedIn={props.loggedIn}
      userData={props.userData}
    />
    <PrivateRoute
      path="/profile"
      component={ProfileWithRouter}
      loggedIn={props.loggedIn}
      userData={props.userData}
    />
    <Route component={FileNotFound} />
  </Switch>
);

// component prop types
Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([React.Component, Function]).isRequired,
  location: PropTypes.object.isRequired,
};

export default Main;
