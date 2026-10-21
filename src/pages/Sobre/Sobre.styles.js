import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts, spacing } from '../../styles/fonts';

export default StyleSheet.create({
  logo: { marginVertical: spacing.lg },
  version: {
    marginVertical: spacing.lg, textAlign: 'center',
    color: colors.secondary, fontWeight: fonts.weight.bold,
  },

  foto: {
    width: 300,
    height: 300,
    borderRadius: 200,
    alignSelf: 'center',
    marginVertical: 16,
  },
});