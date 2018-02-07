import React, { Component } from 'react';
import User from '../../helpers/User';
import Token from '../../helpers/Token';
import {displayError} from '../Utilities';

export default class EditProfileForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
    }

    componentDidMount(){
        // get data of the logged in user
        const {firstname, lastname, email} = Token.getUserData()
        // set state to current values of user data
        this.setState({
            firstname,
            lastname,
            email
        })
    }

    handleInputChange = (event)=>{
        const target = event.target;
        this.setState({
            [target.name] : target.value
        });
    }

    handleFormSubmit = (event)=>{
        event.preventDefault();
        // make request to update user information
        // if you add another value of state that is not among the sent data
        // please update the sent data
        User.editUserDetails(this.state)
        .then(response=>{
            window.Materialize.toast(response.data.message, 4000)
        })
        .catch(error=>{
            displayError(error)
        })
    }

    render() {
        return (
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
              <label htmlFor="firstname">Lastname</label>
              <input type="text" name="firstname" id="firstname" onChange={this.handleInputChange} value={this.state.firstname} required />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Lastname</label>
              <input type="text" name="lastname" id="lastname" onChange={this.handleInputChange} value={this.state.lastname} required />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={this.handleInputChange} value={this.state.email} required />
            </div>
            <div className="center-align">
              <input type="submit" value="Edit Profile" id="edit_profile" name="edit_profile" className="btn btn-small orange" />
            </div>
          </form>
        );
    }
}
