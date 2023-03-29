import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';
import {ApolloProvider, useReactiveVar} from '@apollo/client';
import client, {isLoggedInVar} from '../apollo';
import LoggedInNav from './navigators/LoggedInNav';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
