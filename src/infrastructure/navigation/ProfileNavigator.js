import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from '../../features/profile/screens/ProfileScreen';
import { CheckScreen } from '../../features/profile/screens/CheckScreen';

const Stack = createStackNavigator();

export const ProfileNavigator = () => (
  <Stack.Navigator 
  screenOptions={{headerShown: false}}>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="Check" component={CheckScreen} />
  </Stack.Navigator>
);

