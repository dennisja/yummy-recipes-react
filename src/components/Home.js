import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import FormCard from './forms/FormCard';
import {Link, Redirect} from 'react-router-dom';
class Home extends Component {
    render() {
        const {loginUser, loggedIn} = this.props;

        if(loggedIn){
            return <Redirect to='/home' />
        }

        return (
            <div className="row">
                <div className="col m6 hide-on-small-only">
                    This is the demo
                </div>
                <div className="col m6 s10 offset-s1">
                    <FormCard title="Login" form={<LoginForm onLoginSubmit={loginUser}/>} />
                    <FormCard title="Register" form={<RegisterForm />} />
                </div>               
            </div>
        );
    }
}

export default Home;
