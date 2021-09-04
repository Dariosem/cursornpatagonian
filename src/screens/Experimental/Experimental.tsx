import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';

import { DefaultButton, DefaultModal, Separator, Typography } from '../../components';

import styles from './styles';
import { colors } from '../../utils/theme';

const ExperimentalScreen = () => {
  const arr = Array.from({ length: 6 }, (_, index) => index);

  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <ScrollView style={styles.scrollViewStyle}>
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

export default ExperimentalScreen;
