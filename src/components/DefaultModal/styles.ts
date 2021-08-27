import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainModalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 30,
    width: '70%',
  },
});

export default styles;
