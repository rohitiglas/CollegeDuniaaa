/**
 * @format
 */
import './before';
import {AppRegistry} from 'react-native';
import App from './src/redux/store/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
