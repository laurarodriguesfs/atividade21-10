import { useState } from 'react';
import { View, Text, ScrollView, Linking, Alert } from 'react-native';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { globalStyles } from '../../styles/global';
import styles from './Contato.styles';

const TELEFONE = '(11) 99999-9999';
const EMAIL = 'contato@laurarodrigues.example';

export default function Contato({ navigation }) {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState({});

  const enviar = () => {
    const e = {};
    if (!nome.trim()) e.nome = 'Informe seu nome.';
    if (!mensagem.trim()) e.mensagem = 'Escreva uma mensagem.';
    setErrors(e);
    if (Object.keys(e).length) return;
    Alert.alert('Mensagem enviada', 'Obrigada pelo contato! (envio simulado)');
    setNome('');
    setMensagem('');
  };

  return (
    <ScrollView style={globalStyles.screen} contentContainerStyle={globalStyles.content} keyboardShouldPersistTaps="handled">
      <Text style={globalStyles.title}>Contato</Text>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>Laura Rodrigues</Text>
        <Text style={globalStyles.text}>Telefone: {TELEFONE}</Text>
        <Text style={globalStyles.text}>E-mail: {EMAIL}</Text>
        <Text style={globalStyles.text}>Endereço: Rua dos Desenvolvedores, 100</Text>
        <Text style={globalStyles.text}>Atendimento: seg a sex, 9h às 18h</Text>

        <View style={styles.row}>
          <Button title="Ligar" style={styles.half} onPress={() => Linking.openURL('tel:11999999999')} />
          <Button title="E-mail" variant="secondary" style={styles.half} onPress={() => Linking.openURL(`mailto:${EMAIL}`)} />
        </View>
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.subtitle}>Envie uma mensagem</Text>
        <Input label="Nome" value={nome} onChangeText={setNome} placeholder="Seu nome" error={errors.nome} />
        <Input label="Mensagem" value={mensagem} onChangeText={setMensagem} placeholder="Como podemos ajudar?" multiline error={errors.mensagem} />
        <Button title="Enviar" onPress={enviar} />
      </View>

      <Button title="Voltar para Home" variant="outline" style={styles.back} onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
}
