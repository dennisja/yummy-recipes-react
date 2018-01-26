import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import FormCard from './forms/FormCard';

// TODO: Come back and implement redirecting to referer i.e. if you login a user,
// redirect him or her to the page he wanted to visit other than redirecting him to home always

class Home extends Component {
    render() {
        const { loginUser, loggedIn } = this.props;

        if (loggedIn) {
            return <Redirect to="/home" />;
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
    }
}

Home.propTypes = {
  loginUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Home;
