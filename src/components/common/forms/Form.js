import React, { Component } from 'react';
import { NormalText } from '../../index';
import { View, TextInput } from 'react-native';
import * as styles from '../../../styles';

const customStyle = {
  height: 44,
  padding: 8,
  marginTop: 5,
  marginBottom: 5,
  color: styles.colors.secondary,
  backgroundColor: styles.colors.brightTransparent,
}

export class Form extends Component {

  render() {
    return (
      <View>
        <NormalText>
          {this.props.titleText}
        </NormalText>
        <TextInput
          multiline={this.props.multiline}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          returnKeyType = {'next'}
          autoFocus = {this.props.autoFocus}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholderTextColor={styles.colors.third}
          underlineColorAndroid={styles.colors.transparent}
          style={customStyle}
          />
      </View>
    );
  }

}
