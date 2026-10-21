import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export default StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  marks: { width: 64, height: 56, marginRight: 14 },
  marksSm: { width: 36, height: 32, marginRight: 10 },
  navy: {
    position: 'absolute', left: 0, top: 8, width: 36, height: 36,
    backgroundColor: colors.primary, borderRadius: 6,
    transform: [{ rotate: '45deg' }],
  },
  red: {
    position: 'absolute', left: 28, top: 8, width: 30, height: 30,
    backgroundColor: colors.secondary, borderRadius: 4,
    transform: [{ rotate: '45deg' }],
  },
  shapeSm: { width: 20, height: 20, top: 6, borderRadius: 4 },
  redSm: { left: 16, width: 17, height: 17 },
  name: { fontSize: 22, lineHeight: 24, fontWeight: '800', color: colors.primary, letterSpacing: -0.5 },
  nameSm: { fontSize: 14, lineHeight: 15, color: colors.onPrimary },
  role: { fontSize: 13, color: colors.primary, marginTop: 4 },
});
