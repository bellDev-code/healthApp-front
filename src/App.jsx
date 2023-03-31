import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import client, {isLoggedInVar} from '../apollo';
import LoggedInNav from './navigators/LoggedInNav';
import RNBootSplash from 'react-native-bootsplash';
import {useEffect} from 'react';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
      console.log('Bootsplash has been hidden successfully');
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
