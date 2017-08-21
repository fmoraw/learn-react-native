import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Reducer } from 'react-native-router-flux';
import LoginContainer from './LoginContainer';
import MainMenuContainer from './MainMenuContainer';
import * as styles from '../styles';

const reducerCreate = (params) => {
  const defaultReducer = Reducer(params);
  return (state, action) => defaultReducer(state, action);
};

const customSceneStyle = {
  paddingTop: Platform.OS === 'ios' ? 64 : 54,
  flex: 1,
  padding: 10,
  justifyContent: 'center',
  backgroundColor: styles.colors.primary,
};

class NavigationContainer extends Component {
  render() {
    return (
      <Router
        createReducer={reducerCreate}
        navigationBarStyle={{ backgroundColor: styles.colors.secondary }}
        titleStyle={{ color: styles.colors.primary }}
        sceneStyle={customSceneStyle}
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
            component={MainMenuContainer}
            title="MainMenu"
          />
        </Scene>
      </Router>
    );
  }
}

export default NavigationContainer;
