import { StyleSheet } from 'react-native';
import { spacing } from '../../styles/fonts';

export default StyleSheet.create({
  row: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md },
  half: { flex: 1 },
  back: { marginTop: spacing.lg },
});
