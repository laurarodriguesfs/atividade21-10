import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts, spacing, radius } from './fonts';

export const globalStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: spacing.xl * 1.5 },
  title: {
    fontSize: fonts.size.xxl,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.medium,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: fonts.size.md,
    color: colors.textMuted,
    lineHeight: 22,
  },
  highlight: {
    color: colors.secondary,
    fontWeight: fonts.weight.bold,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  message: {
    fontSize: fonts.size.sm,
    color: colors.error,
    marginTop: spacing.xs,
  },
});
