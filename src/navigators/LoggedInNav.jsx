import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Calendar from '../screens/Calendar';
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
        name="홈"
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
        name="캘린더"
        component={Calendar}
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
        name="내 정보"
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
