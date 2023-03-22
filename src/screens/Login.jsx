import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text>go to the CreateAccount</Text>
      </TouchableOpacity>
    </View>
  );
}
