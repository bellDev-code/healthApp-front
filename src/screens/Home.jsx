import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View>
          <Text>Go to Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
