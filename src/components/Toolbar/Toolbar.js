import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '../Logo/Logo';
import styles from './Toolbar.styles';

/**
 * Toolbar reutilizável.
 * - title: título da tela atual
 * - items: links de navegação [{ label, active, onPress }]
 * - actionLabel/onAction: ação à direita (ex.: Sair)
 */
export default function Toolbar({ title, items = [], actionLabel, onAction }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingTop: insets.top + 10 }]}>
      <View style={styles.top}>
        <View style={styles.side}>
          <Logo size="sm" tone="light" />
        </View>

        <Text style={styles.title} numberOfLines={1}>{title}</Text>

        <View style={[styles.side, styles.right]}>
          {actionLabel && (
            <Pressable onPress={onAction} hitSlop={8}>
              <Text style={styles.action}>{actionLabel}</Text>
            </Pressable>
          )}
        </View>
      </View>

      {items.length > 0 && (
        <View style={styles.nav}>
          {items.map((item) => (
            <Pressable
              key={item.label}
              onPress={item.onPress}
              style={[styles.navItem, item.active && styles.navItemActive]}
              accessibilityRole="button"
              accessibilityLabel={item.label}
            >
              <Text style={[styles.navText, item.active && styles.navTextActive]}>
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}