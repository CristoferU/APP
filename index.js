// index.js o index.tsx
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

enableScreens(); // Habilita el uso de react-native-screens

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);