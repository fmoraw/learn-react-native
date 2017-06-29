import React, { Component } from 'react';
import LoginComponent from '../components/LoginComponent';

class LoginContainer extends Component {

  login(username, password) {
    this.props.fetchLogin(username, password);
  }

  goToRegistrationScreen() {
    alert('Registrieren');
  }

  goToForgotPasswordScreen() {
    alert('Passwort zurücksetzen');
  }

  render() {
    return (
      <LoginComponent
        register={() => this.goToRegistrationScreen}
        forgotPassword={() => this.goToForgotPasswordScreen}
        login={() => this.login}
      />
    );
  }
}

export default LoginContainer;
