import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, replaceRoute } from '../../Navigation/controls';

const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome Screen
      </Typography>
      <Separator size={15} />
      <DefaultButton text="Go To Tabs" fontSize={16} onPress={() => replaceRoute('TabNavigator')} />
      <Separator size={10} />
      <DefaultButton
        text="Go To Experimental Screen"
        fontSize={16}
        onPress={() => goToScreen('Experimental')}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
