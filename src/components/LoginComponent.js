import React, { Component } from 'react';
import { View } from 'react-native';
import { PrimaryButton, Form, LinkButton, Spinner } from './common';

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

  onChangeUsernameText(input) {
    this.setState({
      username: input,
    });
  }

  onChangePassword(input) {
    this.setState({
      password: input,
    })
  }

  render() {
    if (this.props.isFetching) {
      return (
          <Spinner />
      )
    }
    return (
      <View>
        <Form
          titleText={'Username'}
          placeholder={'Username'}
          onChangeText={(event) => this.onChangeUsernameText(event)}
          value={this.state.username}
        />
        <Form
          titleText={'Password'}
          secureTextEntry
          placeholder={'Password'}
          onChangeText={(event) => this.onChangePassword(event)}
          value={this.state.password}
        />
        <View style={{ marginTop: 30 }} />
        <PrimaryButton
          title={'Login'}
          onPress={() => this.props.login(this.state.username, this.state.password)}
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
      </View>
    );
  }
}

export default LoginComponent;
