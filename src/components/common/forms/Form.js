import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import * as styles from '../../../styles';

const customStyle = {
  height: 44,
  padding: 8,
  marginTop: 5,
  marginBottom: 5,
  backgroundColor: styles.colors.brightTransparent,
};

export class Form extends Component {

  render() {
    return (
      <View>
        <Text style={{ color: styles.colors.third }}>
          {this.props.titleText}
        </Text>
        <TextInput
          multiline={this.props.multiline}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          returnKeyType={'next'}
          autoFocus ={this.props.autoFocus}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholderTextColor={styles.colors.primary}
          underlineColorAndroid={styles.colors.transparent}
          style={customStyle}
        />
      </View>
    );
  }
}
