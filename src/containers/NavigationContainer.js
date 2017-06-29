import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginContainer from './LoginContainer';

class NavigationContainer extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" component={LoginContainer} title="Login" />
        {/*
        <Scene key="register" component={Register} title="Register"/>
        <Scene key="home" component={Home}/>
        */}
      </Scene>
    </Router>
  }
}

export default NavigationContainer;
