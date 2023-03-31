import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import client, {isLoggedInVar, tokenVar} from '../apollo';
import LoggedInNav from './navigators/LoggedInNav';
import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    const init = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        isLoggedInVar(true);
        tokenVar(token);
      }
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
