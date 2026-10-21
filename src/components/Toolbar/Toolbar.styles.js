import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export default StyleSheet.create({
  bar: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingBottom: 6,
    borderBottomWidth: 4,
    borderBottomColor: colors.secondary,
  },
  top: { flexDirection: 'row', alignItems: 'center' },
  side: { flex: 1.2 },
  right: { alignItems: 'flex-end' },
  title: {
    flex: 1.4, textAlign: 'center', color: colors.onPrimary,
    fontSize: fonts.size.lg, fontWeight: fonts.weight.bold, textTransform: 'uppercase',
  },
  action: { color: colors.onPrimary, fontSize: fonts.size.md, fontWeight: fonts.weight.medium },
  nav: { flexDirection: 'row', marginTop: 12 },
  navItem: {
    flex: 1, alignItems: 'center', paddingVertical: 10,
    borderBottomWidth: 3, borderBottomColor: 'transparent',
  },
  navItemActive: { borderBottomColor: colors.onPrimary },
  navText: { color: colors.background, fontSize: fonts.size.md, fontWeight: fonts.weight.medium },
  navTextActive: { color: colors.onPrimary, fontWeight: fonts.weight.bold },
});