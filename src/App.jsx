import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';
import {ApolloProvider} from '@apollo/client';
import client from '../apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <LoggedOutNav />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
