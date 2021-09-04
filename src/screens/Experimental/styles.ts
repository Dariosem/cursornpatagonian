import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: colors.verylightBlue,
    flex: 1,
    width: '100%',
  },
  scrollViewStyle: {
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

export default styles;
