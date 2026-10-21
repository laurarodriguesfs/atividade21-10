import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts, radius } from '../../styles/fonts';

export default StyleSheet.create({
  base: {
    minHeight: 50, borderRadius: radius.pill, paddingHorizontal: 24,
    alignItems: 'center', justifyContent: 'center',
  },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  outline: { backgroundColor: 'transparent', borderWidth: 2, borderColor: colors.primary },
  pressed: { opacity: 0.8 },
  label: { color: colors.onPrimary, fontSize: fonts.size.md, fontWeight: fonts.weight.bold },
  labelOutline: { color: colors.primary },
});
