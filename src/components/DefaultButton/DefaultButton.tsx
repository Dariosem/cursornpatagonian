import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
}

const DefaultButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text>Hola btn</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
