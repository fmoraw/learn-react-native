import React from 'react';
import { Button } from 'react-native-elements';
import * as styles from '../../../styles';

const customStyle = {
  marginLeft: 0,
  marginRight: 0,
  borderRadius: 20,
  backgroundColor: styles.transparent,
};

const customTextStyle = {
  color: styles.colors.third,
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
  textDecorationColor: styles.colors.third,
};

export const LinkButton = (props) => {
  return (
    <Button
      onPress={props.onPress}
      title={props.title}
      textStyle={customTextStyle}
      buttonStyle={customStyle}
    />
  );
};
