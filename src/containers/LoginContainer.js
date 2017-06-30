import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
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
        isFetching={this.props.isFetching}
        goToRegistrationScreen={() => this.goToRegistrationScreen()}
        goToForgotPasswordScreen={() => this.goToForgotPasswordScreen()}
        login={() => this.login()}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    //isFetching: state.loginReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
