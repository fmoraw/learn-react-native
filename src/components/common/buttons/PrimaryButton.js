import React from 'react';
import { Button } from 'react-native-elements';
import * as styles from '../../../styles';

const customStyle={
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: styles.primaryButtonColor,
}

const customTextStyle={
  color: styles.colors.third,
}

export const PrimaryButton = (props) => {
  return (
    <Button
      raised
      title={props.title}
      onPress={props.onPress}
      textStyle={customTextStyle}
      buttonStyle={customStyle}/>
  );
}
