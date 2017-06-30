import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/reducers';
import NavigationContainer from './src/containers/NavigationContainer';

const style = {
  flex: 1,
  paddingTop: Platform.OS === 'ios' ? 0 : 24,
};

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={style}>
          <NavigationContainer />
        </View>
      </Provider>
    );
  }
}

export default App;
