import React, { Component } from 'react';
import axios from 'axios';
import Configs from '../../configs/Configs';

class RegisterForm extends Component {
    static initialState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        c_password: '',
    }
    constructor(props) {
        super(props);
        this.state = RegisterForm.initialState;
    }

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const {baseUrl, registerUrl} = Configs.api;
        const form = event.target;
        
        axios.post(`${baseUrl}${registerUrl}`, this.state)
        .then(response=>{
            form.reset();
            this.setState(RegisterForm.initialState);
            // alert user that he or she has successfully registered
        })
        .catch(error=>{
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
                    <input type="text" name="firstname" id="firstname" onChange={this.handleInputChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lastname" id="lastname" onChange={this.handleInputChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="reg_email" onChange={this.handleInputChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="reg_password" onChange={this.handleInputChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="c_password">Confirm Password: </label>
                    <input type="password" name="c_password" id="c_password" onChange={this.handleInputChange} required/>
                </div>
                <div className="center-align">
                    <input type="submit" className="btn" name="register" id="register" value="Register" />
                </div>
            </form>
        );
    }
}

export default RegisterForm;
