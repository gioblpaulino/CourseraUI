import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native'

import App from './src/stacks/index';

export default ()=>{

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='#1f1f1f'/>
      <App/>
    </NavigationContainer>
  )
};
