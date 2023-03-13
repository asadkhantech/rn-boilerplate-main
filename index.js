/**
 * @format
 */

import {AppRegistry} from 'react-native';
import EntryPoint from './app/EntryPoint';
import {name as appName} from './app.json';
import  './app/languages';
AppRegistry.registerComponent(appName, () => EntryPoint);
