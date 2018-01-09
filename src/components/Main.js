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
    : <Redirect to="/" />
   )
  } />);
}

const Main = (props) => (
  <main>
    <Switch>
      <Route path="/" exact component={()=><Home loginUser={props.loginUser} loggedIn={props.loggedIn} />} />
      <PrivateRoute path="/home" component={Dashboard} loggedIn={props.loggedIn} />
    </Switch>
  </main>
);

export default Main;
