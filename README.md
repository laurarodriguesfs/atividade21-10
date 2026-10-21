# Laura Rodrigues — App Institucional

**Aluno(a):** Laura Rodrigues
**Disciplina:** Programação para Dispositivos Móveis I

## Descrição
Protótipo mobile institucional com login simulado, Home, Sobre e Contato, usando a
identidade visual **Laura Rodrigues · arquiteta de sistemas** (azul-marinho, vinho e lavanda).

## Tecnologia
React Native + Expo, React Navigation (native-stack) e `StyleSheet`.

## Como executar
```bash
npx create-expo-app@latest laura-app --template blank
cd laura-app
# copie para dentro do projeto: App.js, src/, assets/ e .gitignore
npx expo install @react-navigation/native @react-navigation/native-stack \
  react-native-screens react-native-safe-area-context
npx expo start
```
Abra no celular com o app Expo Go (QR code) ou em um emulador.

## Credenciais de teste (login simulado)
| Usuário | Senha  |
|---------|--------|
| laura   | 123456 |

Definidas em `src/data/credentials.js`. Não há localStorage, banco, API ou persistência.

## Estrutura
```
App.js
src/
├── pages/        Login · Home · Sobre · Contato (cada um com .js e .styles.js)
├── components/   Button · Input · Toolbar · Logo
├── styles/       colors · fonts · global
├── navigation/   navigation.js
└── data/         credentials.js
assets/           images · icons
```

## Funcionalidades
- Login com validação (usuário vazio, senha vazia, credenciais inválidas) e mostrar/ocultar senha
- Botão para limpar campos
- Navegação Login → Home → Sobre/Contato e retorno à Home
- Toolbar reutilizável com título dinâmico, botão "‹ Home" e "Sair"
- Parâmetro de navegação (nome do usuário na Home)
- Contato com botões de ligar/e-mail e formulário simulado
- Sempre reinicia no Login (sem sessão persistente)

## Capturas de tela
Adicione em `assets/images/` e referencie aqui: Login, Home, Sobre e Contato.
