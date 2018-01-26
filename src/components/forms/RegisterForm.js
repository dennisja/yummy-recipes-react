import React, { Component } from 'react';
import Configs from '../../configs/Configs';
import User from '../../helpers/User';
import Token from '../../helpers/Token';

class RegisterForm extends Component {
    static initialState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        c_password: '',
    }

    state = RegisterForm.initialState;

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const {baseUrl, registerUrl} = Configs.api;

        User.registerUser(this.state)
        .then((response)=>{
            alert('yeah')
            console.log(response)
            this.setState(RegisterForm.initialState);
        })
        .catch((error)=>{
            const { data, status } = error.response;
            console.log(data)
            alert(data.errors)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="firstname" id="firstname" onChange={this.handleInputChange} value={this.state.firstname} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lastname" id="lastname" onChange={this.handleInputChange} value={this.state.lastname} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="reg_email" onChange={this.handleInputChange} value={this.state.email} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="reg_password" onChange={this.handleInputChange} value={this.state.password} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="c_password">Confirm Password: </label>
                    <input type="password" name="c_password" id="c_password" onChange={this.handleInputChange} value={this.state.c_password} required/>
                </div>
                <div className="center-align">
                    <input type="submit" className="btn btn-small orange" name="register" id="register" value="Register" />
                </div>
            </form>
        );
    }
}

export default RegisterForm;
