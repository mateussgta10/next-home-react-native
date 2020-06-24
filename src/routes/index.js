import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Notifications from '../pages/Notifications'


const Navi = createStackNavigator();

export default function NaviRoutes()  {
 return (
  <Navi.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#000'},
    }}
  >
    <Navi.Screen name="Home" component={Home}/>
    <Navi.Screen name="Profile" component={Profile}/>
    <Navi.Screen name="Notifications" component={Notifications}/>
  </Navi.Navigator>
 )
}


