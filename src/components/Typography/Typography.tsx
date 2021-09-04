import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { colors } from './../../utils/theme';

const typographyVariant = {
  bold: 'Raleway-Bold',
  italic: 'Raleway-Italic',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
};
interface props {
  additionalStyle?: TextStyle;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  size?: number;
  variant?: keyof typeof typographyVariant;
}

const getTextStyle = ({
  align,
  color,
  size,
  variant = 'regular',
}: Pick<props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };
  return textStyle;
};
const Typography = ({ additionalStyle, align, children, color, size, variant }: props) => {
  const textStyle = getTextStyle({ align, color, size, variant });
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
  variant: 'regular',
};

export default Typography;
