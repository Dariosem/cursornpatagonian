import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { DefaultButton, DefaultModal } from './src/components';

import { DEVICE_WIDTH } from './src/utils/dimensions';
import { colors } from './src/utils/theme';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Título</Text>
      <Text>Subtítulo</Text>
      <Image
        source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <DefaultButton text="Boton Hola!!" onPress={showModal} fontSize={20} variant="primary" />
      <DefaultModal
        visible={isModalVisible}
        onPressPrimaryButton={hideModal}
        onPressSecondaryButton={hideModal}
        primaryButtonText="Ok"
        secondaryButtonText="Cancel"
        text="Hola Modal"
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
