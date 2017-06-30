import React, { Component } from 'react';
import { Scene, Router, Reducer } from 'react-native-router-flux';
import LoginContainer from './LoginContainer';
import * as styles from '../styles';

const reducerCreate = (params) => {
  const defaultReducer = Reducer(params);
  return (state, action) => defaultReducer(state, action);
};

class NavigationContainer extends Component {
  render() {
    return (
      <Router
        createReducer={reducerCreate}
        navigationBarStyle={{ backgroundColor: styles.colors.secondary }}
        titleStyle={{ color: styles.colors.primary }}
      >
        <Scene key="root">
          <Scene
            key="login"
            component={LoginContainer}
            title="Login"
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="start"
            component={LoginContainer}
            title="Login"
          />
        </Scene>
      </Router>
    );
  }
}

export default NavigationContainer;
