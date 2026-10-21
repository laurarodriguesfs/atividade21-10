import { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { VALID_USER, VALID_PASSWORD } from '../../data/credentials';
import { globalStyles } from '../../styles/global';
import styles from './Login.styles';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({});

  const limpar = () => {
    setUsuario('');
    setSenha('');
    setErrors({});
  };

  const entrar = () => {
    const newErrors = {};
    if (!usuario.trim()) newErrors.usuario = 'Informe o usuário.';
    if (!senha.trim()) newErrors.senha = 'Informe a senha.';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (usuario.trim() !== VALID_USER || senha !== VALID_PASSWORD) {
      setErrors({ geral: 'Usuário ou senha inválidos.' });
      Alert.alert('Erro de login', 'Usuário ou senha inválidos.');
      return; // permanece no Login
    }

    // replace: impede voltar ao Login pelo botão "voltar" do aparelho
    navigation.replace('Home', { usuario: usuario.trim() });
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.logo}>
          <Logo />
        </View>

        <View style={globalStyles.card}>
          <Text style={globalStyles.title}>Entrar</Text>
          <Text style={[globalStyles.text, styles.intro]}>
            Acesse o app institucional com seu usuário e senha.
          </Text>

          <Input
            label="Usuário ou e-mail"
            value={usuario}
            onChangeText={setUsuario}
            placeholder="Digite seu usuário"
            error={errors.usuario}
          />
          <Input
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry
            error={errors.senha}
          />

          {!!errors.geral && <Text style={[globalStyles.message, styles.geral]}>{errors.geral}</Text>}

          <Button title="Entrar" onPress={entrar} />
          <Button title="Limpar campos" variant="outline" onPress={limpar} style={styles.clear} />
        </View>

        <Text style={styles.hint}>Protótipo acadêmico · login simulado (sem persistência)</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
