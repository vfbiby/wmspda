import 'react-native-gesture-handler/jestSetup';

global.window = {};
global.window = global;
global.fetch = require('node-fetch');
