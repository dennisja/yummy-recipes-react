import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import FormCard from './forms/FormCard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userData: null,
        };
    }

    loginUser = (userData) => {
        this.setState({
            loggedIn: true,
            userData: userData,
        })
        console.log(userData)
    }

    render() {
        return (
            <div className="row">
                {
                    !this.state.loggedIn ?
                        (
                            <div>
                                <div className="col m6 hide-on-small-only">
                                    This is the demo
                                </div>
                                <div className="col m6 s10 offset-s1">
                                    <FormCard title="Login" form={<LoginForm onLoginSubmit={this.loginUser}/>} />
                                    <FormCard title="Register" form={<RegisterForm />} />
                                </div>
                            </div>
                        )
                        :
                        <div>I am loged in</div>
                }
            </div>
        );
    }
}

export default Home;
