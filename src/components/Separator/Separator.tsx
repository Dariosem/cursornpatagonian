import React from 'react';
import { View } from 'react-native';

interface props {
  isHorizontal?: boolean;
  size: number;
}

const Separator = ({ isHorizontal, size }: props) => {
  return <View style={isHorizontal ? { width: size } : { height: size }} />;
};

export default Separator;
