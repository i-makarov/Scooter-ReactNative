import React, { useCallback, useMemo, useRef } from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PlaceScreen } from '../../features/stations/screens/PlaceScreen';
import { StationScreen } from '../../features/stations/screens/StationScreen';
import { BookingScreen } from '../../features/stations/screens/BookingScreen';
import { ActivationScreen } from '../../features/stations/screens/ActivationScreen';


const Stack = createStackNavigator();

  export const StationNavigator = () => {
    const screenOptions = useMemo<StackNavigationOptions>(
      () => ({
        ...TransitionPresets.SlideFromRightIOS,
  
        headerShown: true,
        safeAreaInsets: { top: 0 },
        cardStyle: {
          backgroundColor: 'white',
          overflow: 'visible',
        },
        
      },headerMode="screen"),
      []
    );
  
    const screenAOptions = useMemo(() => ({ headerLeft: () => null }), []);
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Stations"
            options={screenAOptions}
            component={StationScreen}
          />
          <Stack.Screen name="Place" component={PlaceScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="Activation" component={ActivationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
