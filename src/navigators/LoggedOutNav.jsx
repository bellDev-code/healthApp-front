import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CreateAccount from '../screens/CreateAccount';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
