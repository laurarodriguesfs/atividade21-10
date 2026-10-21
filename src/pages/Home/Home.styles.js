import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts, spacing, radius } from '../../styles/fonts';

export default StyleSheet.create({
  hero: { backgroundColor: colors.primary, borderRadius: radius.lg, padding: spacing.lg },
  heroKicker: { color: colors.background, fontSize: fonts.size.md, fontWeight: fonts.weight.medium },
  heroTitle: {
    color: colors.onPrimary, fontSize: fonts.size.xl, fontWeight: fonts.weight.bold,
    textTransform: 'uppercase', marginVertical: spacing.sm,
  },
  heroText: { color: colors.background, fontSize: fonts.size.md, lineHeight: 22 },
  section: { marginTop: spacing.lg },
  second: { marginTop: spacing.sm },
});
