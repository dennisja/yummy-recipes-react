import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';

import Main from './Main';
import '../App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Token from '../helpers/Token';


class App extends Component {
  static initialState = {
    loggedIn: false,
    userData: {
      data: null,
      token: "",
    },
  }
  
  state = App.initialState;

  loginUser = (userData) => {
    this.setState({
        loggedIn: true,
        userData: userData,
    })
    //put data in locationStorage
    Token.setToken(userData);
    // console.log(userData)
  }

  logoutUser = ()=>{
    this.setState(App.initialState);
    //clear data from location storage
    Token.deleteToken();
  }

  componentDidMount(){
    const userData = Token.getToken();
    if(userData){
      this.loginUser(userData);
    }
  }

  render() {
    const { loggedIn, userData } = this.state;
    return (
      <BrowserRouter>
        <div>          
          <Header 
            loggedIn={loggedIn} 
            logoutUser={this.logoutUser} 
            userData={userData.data}/>          
          <div className="container">
            <Main 
              loggedIn={loggedIn} 
              userData={userData.data} 
              loginUser={this.loginUser} />
          </div>
          <Footer isLoggedIn={loggedIn}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
