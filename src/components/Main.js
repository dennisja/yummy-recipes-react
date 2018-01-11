import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard'

const PrivateRoute = ({ component:Component, ...rest})=>{
  const { loggedIn } = rest;

  return (<Route {...rest} render={
   (props)=>(
    loggedIn
    ? <Component />
    : <Redirect to={{
      pathname: '/',
      state: {from: props.location}
    }} />
   )
  } />);
}

const Main = (props) => (
  <Switch>
    <Route path="/" exact component={()=><Home loginUser={props.loginUser} loggedIn={props.loggedIn} />} />
    <PrivateRoute path="/home" component={Dashboard} loggedIn={props.loggedIn} />
  </Switch>
);

export default Main;
