import { Pressable, Text } from 'react-native';
import styles from './Button.styles';

// variant: 'primary' | 'secondary' | 'outline'
export default function Button({ title, onPress, variant = 'primary', style }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [styles.base, styles[variant], pressed && styles.pressed, style]}
    >
      <Text style={[styles.label, variant === 'outline' && styles.labelOutline]}>{title}</Text>
    </Pressable>
  );
}
