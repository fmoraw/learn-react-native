import React from 'react';
import { Button } from 'react-native-elements';
import * as styles from '../../../styles';

const customStyle={
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: styles.secondaryButtonColor,
}

const customTextStyle={
  color: styles.colors.secondary,
}

export const SecondaryButton = (props) => {
  return (
    <Button
      raised
      title={props.title}
      textStyle={customTextStyle}
      buttonStyle={customStyle}/>
  );
}
