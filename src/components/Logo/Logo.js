import { View, Text } from 'react-native';
import styles from './Logo.styles';

export default function Logo({ size = 'md' }) {
  const small = size === 'sm';
  return (
    <View style={styles.row}>
      <View style={[styles.marks, small && styles.marksSm]}>
        <View style={[styles.navy, small && styles.shapeSm]} />
        <View style={[styles.red, small && styles.shapeSm, small && styles.redSm]} />
      </View>
      <View>
        <Text style={[styles.name, small && styles.nameSm]}>LAURA{'\n'}RODRIGUES</Text>
        {!small && <Text style={styles.role}>arquiteta de sistemas</Text>}
      </View>
    </View>
  );
}
