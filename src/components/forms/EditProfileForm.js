import React, { Component } from 'react';

export default class EditProfileForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
    }

    componentDidMount(){
        // fetch user data and
        // set state to current values of user data
        alert(this.state)
    }

    handleInputChange = (event)=>{
        const target = event.target;
        this.setState({
            [target.name] : target.value
        });
    }

    handleFormSubmit = ()=>{
        // make request to update user information
        alert(JSON.stringify(this.state));
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
              <input type="submit" value="Edit Profile" id="edit_profile" name="edit_profile" className="btn"/>
            </div>
          </form>
        );
    }
}
