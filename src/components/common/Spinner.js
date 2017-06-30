import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import * as styles from '../../styles';

const customStyle = {
  flex: 1,
  padding: 10,
  justifyContent: 'center',
  backgroundColor: styles.cardBackground,
};

export class Spinner extends Component {

  render() {
    return (
      <ActivityIndicator />
    );
  }
}
