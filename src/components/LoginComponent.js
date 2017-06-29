import React, { Component } from 'react';
import { View } from 'react-native';
import { PrimaryButton, Form } from './common';

class LoginComponent extends Component {

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
        <View/>
      );
  }
}

export default LoginComponent;
