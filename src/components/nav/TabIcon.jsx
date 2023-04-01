import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TabIcon({focused, color, iconName}) {
  return (
    <Icon
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={23}
    />
  );
}
