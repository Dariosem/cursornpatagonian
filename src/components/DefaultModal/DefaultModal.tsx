import React from 'react';
import { Modal, View } from 'react-native';
import Typography from '../Typography';
import DefaultButton from './../DefaultButton';
import styles from './styles';

interface props {
  text: string;
  onPressPrimaryButton: () => void;
  onPressSecondaryButton?: () => void;
  primaryButtonText: string;
  secondaryButtonText?: string;
  visible: boolean;
}
const DefaultModal = ({
  visible,
  onPressPrimaryButton,
  onPressSecondaryButton,
  primaryButtonText,
  secondaryButtonText,
  text,
}: props) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.mainModalContainer}>
        <View style={styles.textContainer}>
          <Typography size={20}>{text}</Typography>
          <DefaultButton fontSize={20} onPress={onPressPrimaryButton} text={primaryButtonText} />
          {secondaryButtonText && onPressSecondaryButton ? (
            <DefaultButton
              fontSize={20}
              onPress={onPressSecondaryButton}
              text={secondaryButtonText}
              variant="secondary"
            />
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

DefaultModal.defaultProps = {
  onPressSecondaryButton: null,
  secondaryButtonText: '',
};
export default DefaultModal;
