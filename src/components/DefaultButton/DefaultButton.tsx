import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  additionalStyles?: ViewStyle;
  fontSize: number;
  onPress: () => void;
  text: string;
}

const DefaultButton = ({ additionalStyles, fontSize, onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainContainer, additionalStyles]}>
      <Text style={{ fontSize: fontSize }}>{text}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyles: {},
  fontSize: 14,
};

export default DefaultButton;
