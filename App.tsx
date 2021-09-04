import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { DefaultButton, DefaultModal, Separator, Typography } from './src/components';

import { DEVICE_WIDTH } from './src/utils/dimensions';
import { colors } from './src/utils/theme';

const App = () => {
  const arr = Array.from({ length: 6 }, (_, index) => index);

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={styles.mainContainer}>
          <Typography
            color={colors.mainOrange}
            size={50}
            additionalStyle={styles.title}
            variant="italic"
          >
            Título
          </Typography>
          <Separator size={20} />
          <Typography>Subtítulo</Typography>
          {arr.forEach((item) => {
            <View key={`image-${item}`}>
              <Image
                resizeMode="contain"
                source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
                style={styles.image}
              />
              <Separator size={10} />
            </View>;
          })}
          <View>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
              style={styles.image}
            />
            <Separator size={10} />
          </View>
          <View>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
              style={styles.image}
            />
            <Separator size={10} />
          </View>
          <View>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
              style={styles.image}
            />
            <Separator size={10} />
          </View>
          <View>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
              style={styles.image}
            />
            <Separator size={10} />
          </View>
          <View style={styles.horizontalImages}>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
              style={styles.image}
            />
            <Separator isHorizontal size={10} />
            <Image
              resizeMode="contain"
              source={{ uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png' }}
              style={styles.image}
            />
          </View>

          <DefaultButton text="Boton Hola!!" onPress={showModal} fontSize={25} variant="primary" />
          <DefaultModal
            visible={isModalVisible}
            onPressPrimaryButton={hideModal}
            onPressSecondaryButton={hideModal}
            primaryButtonText="Ok"
            secondaryButtonText="Cancel"
            text="Hola Modal"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.verylightBlue,
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.verylightBlue,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    width: DEVICE_WIDTH * 0.4,
    aspectRatio: 1,
    minHeight: 100,
    borderRadius: 10,
  },
  horizontalImages: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.verylightBlue,
    borderColor: colors.mainOrange,
    borderWidth: 2,
  },
});

export default App;
