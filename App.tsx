import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
const { NavigationContainer } = require('@react-navigation/native');

import { navigationRef } from './src/Navigation/controls';

import MainNavigator from './src/Navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
