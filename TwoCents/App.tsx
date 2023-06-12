import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationMenu from './navigation/screens/NavigationMenu';


function App(){
  return (
    <NavigationContainer>
      <NavigationMenu/>
    </NavigationContainer>
  );
}

export default App;
