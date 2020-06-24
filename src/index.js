import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './routes';

export default function App() {
  return (
  <NavigationContainer >
    <StatusBar barStyle="dark-content" backgroundColor="#01FF5F"/>
      <View style={{ flex: 1, backgroundColor: '#01FF5F'}}>
        <Routes />
      </View>
  </NavigationContainer>
)
}

