import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import * as styles from '../../../styles';

const customStyle = {
  paddingTop: Platform.OS === 'ios' ? 64 : 54,
  flex: 1,
}

export class Card extends Component {

  render() {
    return (
      <View style={customStyle}>
        { this.props.children }
      </View>
    );
  }

}
