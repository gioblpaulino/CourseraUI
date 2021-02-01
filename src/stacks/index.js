import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Initial from '../screens/initial/index';
import SignIn from '../screens/signin/index';
import Navigation from './navigation';

const Stack = createStackNavigator();
export default () => {
  return(
          <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Initial' component={Initial}/>
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Navigation' component={Navigation} />
          </Stack.Navigator> 
  )
}

