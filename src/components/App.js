import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Notifications from 'react-notify-toast';

import Main from './Main';
import '../App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Token from '../helpers/Token';
import Requests from '../helpers/Requests';


class App extends Component {
  // initial state to use when resetting App state
  static initialState = {
    loggedIn: false,
    userData: {
      data: null,
      token: "",
    },
  }
  
  state = App.initialState;

  loginUser = (userData) => {
    // login a user
    this.setState({
        loggedIn: true,
        userData: userData,
    })
    // set the access token of the axios instance
    Requests.axiosInstance.defaults.headers.common['x-access-token'] = Token.getTokenWithoutHttpCall();
  }

  logoutUser = (event)=>{
    // logout a user
    event.preventDefault();
    this.setState(App.initialState);
    // clear data from location storage
    Token.deleteToken();
  }

  updateUserData = (newUserData)=>{
    this.setState({
      userData:{
        data: newUserData,
        token: this.state.userData.token,
      }
    });
  }

  componentDidMount(){
    // login user  if the app is restarted and the user is still loggedin
    const userData = Token.getToken();
    if(userData){
      this.loginUser(userData);
    }
  }

  componentDidUpdate(){
    if(this.state.loggedIn){
    // update user information in locationStorage
      Token.setToken(this.state.userData);
    }
  }

  render() {
    // get loddein and userData from state
    const { loggedIn, userData } = this.state;
    return (
      <BrowserRouter>
        <div>          
          <Header 
            loggedIn={loggedIn} 
            logoutUser={this.logoutUser} 
            userData={userData.data}/>          
          <div className="container">
            <Notifications />
            <Main 
              loggedIn={loggedIn} 
              userData={userData.data} 
              loginUser={this.loginUser}
              updateUserData={this.updateUserData} />
          </div>
          <Footer isLoggedIn={loggedIn}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
