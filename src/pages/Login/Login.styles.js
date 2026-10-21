import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts, spacing } from '../../styles/fonts';

export default StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: spacing.lg },
  logo: { alignItems: 'center', marginBottom: spacing.sm },
  intro: { marginTop: spacing.xs, marginBottom: spacing.md },
  geral: { marginBottom: spacing.sm, textAlign: 'center' },
  clear: { marginTop: spacing.sm },
  hint: { textAlign: 'center', marginTop: spacing.lg, fontSize: fonts.size.xs, color: colors.textMuted },
});
