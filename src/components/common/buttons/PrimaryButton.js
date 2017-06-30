import React from 'react';
import { Button } from 'react-native-elements';
import * as styles from '../../../styles';

const customStyle = {
  marginLeft: 0,
  marginRight: 0,
  borderRadius: 20,
  backgroundColor: styles.colors.secondary,
};

const customTextStyle = {
  color: styles.colors.primary,
};

export const PrimaryButton = (props) => {
  return (
    <Button
      title={props.title}
      onPress={props.onPress}
      textStyle={customTextStyle}
      buttonStyle={customStyle}
    />
  );
};
