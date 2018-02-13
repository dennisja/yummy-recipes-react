import React from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import FormCard from './forms/FormCard';


const Home = (props) => {
    const { loginUser, loggedIn } = props;
    const { from } = props.location.state || { from: { pathname: '/home' } };

    if (loggedIn) {
      return <Redirect to={from} />;
    }

    return (
      <div className="row">
        <div className="col m6 hide-on-small-only">
                This is the demo
        </div>
        <div className="col m6 s10 offset-s1">
          <FormCard title="Login" form={<LoginForm onLoginSubmit={loginUser} />} />
          <FormCard title="Register" form={<RegisterForm />} />
        </div>
      </div>
    );
};

Home.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

export default Home;
