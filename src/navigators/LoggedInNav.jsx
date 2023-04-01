import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Calender from '../screens/Calender';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: () => false,
        headerTransparent: true,
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'rgb(255, 255, 255, 0.3)',
        },
      }}>
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color="white" size={30} />
          ),
        }}
      />
      <Tabs.Screen name="Calender" component={Calender} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}
