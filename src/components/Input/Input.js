import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { globalStyles } from '../../styles/global';
import { colors } from '../../styles/colors';
import styles from './Input.styles';

export default function Input({ label, error, secureTextEntry, multiline, ...props }) {
  const [hidden, setHidden] = useState(!!secureTextEntry);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.field, error && styles.fieldError]}>
        <TextInput
          style={[styles.input, multiline && styles.multiline]}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={hidden}
          multiline={multiline}
          autoCapitalize="none"
          {...props}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setHidden((h) => !h)} hitSlop={8}>
            <Text style={styles.toggle}>{hidden ? 'Mostrar' : 'Ocultar'}</Text>
          </Pressable>
        )}
      </View>
      {!!error && <Text style={globalStyles.message}>{error}</Text>}
    </View>
  );
}
