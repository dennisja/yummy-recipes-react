import React, { Component } from 'react';
import User from '../../helpers/User';

export default class ChangePasswordForm extends Component {
    state = {
        current_password:"",
        new_password:"",
        new_password_again:"",
    }

    handleInputChange = (event)=>{
        const target = event.target;
        this.setState({
            [target.name]:target.value
        });
    }

    handleFormSubmit = (event) =>{
        event.preventDefault();
        alert('Yeah')
        //make api request to change password here
        User.changeUserPassword(this.state)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        return (
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
              <label htmlFor="current_password">Current Password</label>
              <input type="password" name="current_password" id="current_password" onChange={this.handleInputChange} required />
            </div>
            <div className="input-field">
              <label htmlFor="new_password">New Password </label>
              <input type="password" name="new_password" id="new_password" onChange={this.handleInputChange} required />
            </div>
            <div className="input-field">
              <label htmlFor="new_password_again">Confirm New Password: </label>
              <input type="password" name="new_password_again" id="new_password_again" onChange={this.handleInputChange} required />
            </div>
            <div className="center-align">
                <input type="submit" className="btn btn-small orange" value="Change Password" name="change_password" id="change_pasword" />
            </div>
          </form>
        );
    }
}
