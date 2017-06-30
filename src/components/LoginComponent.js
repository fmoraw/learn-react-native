import React, { Component } from 'react';
import { View } from 'react-native';
import { PrimaryButton, Form, Card, LinkButton, Spinner } from './common';

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
    if (this.props.isFetching) {
      return (
        <Card>
          <Spinner />
        </Card>
      )
    }
    return (
      <Card>
        <Form
          titleText={'Username'}
          placeholder={'Username'}
          onChangeText={() => this.onChangeUsernameText}
          value={this.state.username}
        />
        <Form
          titleText={'Password'}
          secureTextEntry
          placeholder={'Password'}
        />
        <View style={{ marginTop: 30 }} />
        <PrimaryButton
          title={'Login'}
          onPress={this.props.login}
        />
        <View style={{ marginTop: 10 }} />
        <LinkButton
          title={'Register'}
          onPress={this.props.goToRegistrationScreen}
        />
        <LinkButton
          title={'ForgotPassword'}
          onPress={this.props.goToForgotPasswordScreen}
        />
      </Card>
    );
  }
}

export default LoginComponent;
