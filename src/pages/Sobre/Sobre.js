import { View, Text, ScrollView } from 'react-native';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';
import { globalStyles } from '../../styles/global';
import styles from './Sobre.styles';

const BLOCOS = [
  { titulo: 'Missão', texto: 'Projetar sistemas que resolvam problemas reais com clareza, segurança e qualidade.' },
  { titulo: 'Visão', texto: 'Ser referência em arquitetura de software acessível e bem documentada.' },
  { titulo: 'Valores', texto: 'Colaboração · Clareza · Responsabilidade · Aprendizado contínuo' },
];

export default function Sobre({ navigation }) {
  return (
    <ScrollView style={globalStyles.screen} contentContainerStyle={globalStyles.content}>
      <Text style={globalStyles.title}>Sobre</Text>

      <View style={styles.logo}>
        <Logo />
      </View>

      <Text style={globalStyles.subtitle}>Laura Rodrigues · Arquiteta de Sistemas</Text>
      <Text style={globalStyles.text}>
        Esta aplicação foi desenvolvida como projeto acadêmico para a disciplina de
        Programação para Dispositivos Móveis I.
      </Text>

      {BLOCOS.map((b) => (
        <View key={b.titulo} style={globalStyles.card}>
          <Text style={[globalStyles.text, globalStyles.highlight]}>{b.titulo}</Text>
          <Text style={globalStyles.text}>{b.texto}</Text>
        </View>
      ))}

      <Text style={styles.version}>Versão: 1.0</Text>
      <Button title="Voltar para Home" variant="outline" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
}
