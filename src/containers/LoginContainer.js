import React, { Component } from 'react';
import LoginComponent from '../components/LoginComponent';

class LoginContainer extends Component {

  login(username, password) {
    this.props.fetchLogin(username, password);
  };

  goToRegistrationScreen() {
    alert('Registrieren');
  };

  goToForgotPasswordScreen() {
    alert('Passwort zurücksetzen');
  };

  render() {
      return(
        <LoginComponent
          register={this.goToRegistrationScreen.bind(this)}
          forgotPassword={this.goToForgotPasswordScreen.bind(this)}
          login={this.login.bind(this)}/>
      );
  }
}

export default LoginContainer;
