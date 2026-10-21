import { View, Text, ScrollView } from 'react-native';
import Button from '../../components/Button/Button';
import { globalStyles } from '../../styles/global';
import styles from './Home.styles';

const SERVICOS = [
  { titulo: 'Arquitetura de sistemas', texto: 'Desenho de soluções escaláveis, seguras e fáceis de manter.' },
  { titulo: 'APIs e integrações', texto: 'Contratos claros entre serviços, do front ao banco de dados.' },
  { titulo: 'Boas práticas', texto: 'Código limpo, revisão técnica e documentação viva.' },
];

export default function Home({ navigation, route }) {
  const usuario = route.params?.usuario ?? 'visitante'; // parâmetro vindo do Login

  return (
    <ScrollView style={globalStyles.screen} contentContainerStyle={globalStyles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroKicker}>Olá, {usuario}!</Text>
        <Text style={styles.heroTitle}>Bem-vindo ao nosso aplicativo!</Text>
        <Text style={styles.heroText}>
          Conheça o trabalho de Laura Rodrigues, arquiteta de sistemas.
        </Text>
      </View>

      <Text style={[globalStyles.subtitle, styles.section]}>O que fazemos</Text>
      {SERVICOS.map((s) => (
        <View key={s.titulo} style={globalStyles.card}>
          <Text style={[globalStyles.text, globalStyles.highlight]}>{s.titulo}</Text>
          <Text style={globalStyles.text}>{s.texto}</Text>
        </View>
      ))}

      <Text style={[globalStyles.subtitle, styles.section]}>Navegue</Text>
      <Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
      <Button title="Contato" variant="secondary" style={styles.second} onPress={() => navigation.navigate('Contato')} />
    </ScrollView>
  );
}
