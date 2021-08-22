import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';

import { DefaultButton } from './src/components';

import { DEVICE_WIDTH } from './src/utils/dimensions';
import { colors } from './src/utils/theme';

const showAlert = () => {
  Alert.alert('Hola');
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Título</Text>
      <Text>Subtítulo</Text>
      <Image
        source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <DefaultButton
        text="Boton Hola!!"
        onPress={showAlert}
        additionalStyles={styles.button}
        fontSize={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.verylightBlue,
    flex: 1,
  },
  title: {
    color: colors.mainOrange,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    width: DEVICE_WIDTH * 0.5,
    aspectRatio: 1,
    minHeight: 100,
    borderRadius: 10,
  },
  button: {
    backgroundColor: colors.verylightBlue,
    borderColor: colors.mainOrange,
    borderWidth: 2,
  },
});

export default App;
