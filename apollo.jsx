import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: 'http://10.0.2.2:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;
