import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DEVICE_WIDTH } from './src/utils/dimensions';
import { colors } from './src/utils/theme';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Título</Text>
      <Text>Subtítulo</Text>
      <Image source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }} style={styles.image} />
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
  },
});

export default App;
