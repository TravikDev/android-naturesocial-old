/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// for drawer
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
