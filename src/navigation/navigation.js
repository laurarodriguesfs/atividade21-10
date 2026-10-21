import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Contato from '../pages/Contato/Contato';
import Toolbar from '../components/Toolbar/Toolbar';

const Stack = createNativeStackNavigator();
const MENU = ['Home', 'Sobre', 'Contato'];

// Toolbar com título dinâmico e navegação entre as telas
const renderToolbar = ({ navigation, route }) => (
  <Toolbar
    title={route.name}
    items={MENU.map((name) => ({
      label: name,
      active: route.name === name,
      onPress: () => navigation.navigate(name),
    }))}
    actionLabel="Sair"
    onAction={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}
  />
);

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Sempre inicia no Login (sem persistência de sessão) */}
        <Stack.Navigator initialRouteName="Login" screenOptions={{ header: renderToolbar }}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Contato" component={Contato} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}