import React, { Component } from 'react';
import { View } from 'react-native';
import { PrimaryButton, Form, Card } from './common';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  login(username, password) {
    this.props.fetchLogin(username, password);
  }

  goToRegistrationScreen() {
    alert('Registrieren');
  }

  goToForgotPasswordScreen() {
    alert('Passwort zurücksetzen');
  }

  onChangeUsernameText(username) {
    this.setState({
      username: username
    });
  }

  render() {
    return (
      <Card>
        <Form
          titleText={'username'}
          placeholder={'username'}
          onChangeText={() => this.onChangeUsernameText}
          value={this.state.username}
        />
        <Form
          titleText={'password'}
          secureTextEntry
          placeholder={'password'}
        />
      </Card>
    );
  }
}

export default LoginComponent;
