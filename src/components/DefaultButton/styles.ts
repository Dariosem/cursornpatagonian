import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainOrange,
    borderColor: colors.white,
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.mainOrange,
    borderColor: colors.white,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
    borderWidth: 1,
  },
});

export default styles;
