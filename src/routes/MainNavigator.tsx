import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScene } from '../scenes/Auth';

const Stack = createStackNavigator();

export function MainNavigator() {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="AuthScene" component={AuthScene} />
    </Stack.Navigator>
  </NavigationContainer>;
}
