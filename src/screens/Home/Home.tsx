import React from 'react';
import { View } from 'react-native';
import { resetNavigation } from '../../Navigation/controls';

import { DefaultButton, Separator, Typography } from '../../components';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography>Home Screen</Typography>
      <Separator size={15} />
      <DefaultButton text="LogOut" onPress={resetNavigation} />
    </View>
  );
};

export default HomeScreen;
