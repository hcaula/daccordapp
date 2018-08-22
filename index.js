import { AppRegistry } from 'react-native';
import Bluetooth from './src/Bluetooth';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Bluetooth);
