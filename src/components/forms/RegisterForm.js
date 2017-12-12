import React, { Component } from 'react';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            cPassword: '',
        };
    }

    render() {
        return (
          <form>
            <div className="input-field">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="input-field">
              <label htmlFor="c_password">Confirm Password: </label>
              <input type="password" name="c_password" id="c_password" />
            </div>
            <div className="center-align">
              <input type="submit" className="btn" name="register" id="register" value="Register" />
            </div>
          </form>
        );
    }
}

export default RegisterForm;
