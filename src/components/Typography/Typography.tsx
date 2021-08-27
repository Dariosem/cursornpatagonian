import React, { ReactNode } from 'react';
import { Text, ViewStyle } from 'react-native';
import { colors } from './../../utils/theme';

interface props {
  additionalStyle?: ViewStyle;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  size?: number;
}

const getTextStyle = ({ align, color, size }: Pick<props, 'align' | 'color' | 'size'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
  };
  return textStyle;
};
const Typography = ({ additionalStyle, align, children, color, size }: props) => {
  const textStyle = getTextStyle({ align, color, size });
  return (
    <Text allowFontScaling={false} style={[textStyle, additionalStyle]}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  additionalStyle: {},
  align: 'left',
  color: colors.black,
  size: 14,
};

export default Typography;
