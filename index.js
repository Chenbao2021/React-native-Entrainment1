import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import AppWrapper from './src/App';

AppRegistry.registerComponent(appName, () => AppWrapper);
