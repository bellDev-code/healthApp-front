import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoggedOutNav from './navigators/LoggedOutNav';

function App() {
  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
}

export default App;
