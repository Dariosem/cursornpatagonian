import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';
import Typography from '../Typography';

import styles from './styles';

interface Props {
  additionalStyles?: ViewStyle;
  fontSize: number;
  onPress: () => void;
  text: string;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({
  additionalStyles,
  fontSize,
  onPress,
  text,
  variant = 'primary',
}: Props) => {
  const textStyle = {
    primary: colors.white,
    secondary: colors.mainOrange,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, styles[variant], additionalStyles]}
    >
      <Typography color={textStyle[variant] || colors.white} size={fontSize}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyles: {},
  fontSize: 14,
  variant: 'primary',
};

export default DefaultButton;
