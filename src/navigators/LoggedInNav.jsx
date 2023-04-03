import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Calendars from '../screens/Calendars';
import TabIcon from '../components/nav/TabIcon';

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
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              iconName={'home'}
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Calendar"
        component={Calendars}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              iconName={'md-calendar'}
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              iconName={'person'}
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
