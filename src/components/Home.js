import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import FormCard from './forms/FormCard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    render() {
        return (
          <div className="row">
            <div className="col m6 hide-on-small-only">
                This is the demo
            </div>
            <div className="col m6">
              <FormCard title="Login" form={<LoginForm />} />
              <FormCard title="Register" form={<RegisterForm />} />
            </div>
          </div>
        );
    }
}

export default Home;
