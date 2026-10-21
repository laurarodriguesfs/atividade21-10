import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts, spacing, radius } from '../../styles/fonts';

export default StyleSheet.create({
  wrapper: { marginBottom: spacing.md },
  label: { fontSize: fonts.size.sm, fontWeight: fonts.weight.medium, color: colors.primary, marginBottom: 6 },
  field: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface,
    borderWidth: 1.5, borderColor: colors.border, borderRadius: radius.md, paddingHorizontal: 14,
  },
  fieldError: { borderColor: colors.error },
  input: { flex: 1, minHeight: 48, fontSize: fonts.size.md, color: colors.text },
  multiline: { minHeight: 96, textAlignVertical: 'top', paddingTop: 12 },
  toggle: { color: colors.secondary, fontWeight: fonts.weight.bold, fontSize: fonts.size.sm },
});
