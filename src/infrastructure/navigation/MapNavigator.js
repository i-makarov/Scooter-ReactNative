import React, {useMemo} from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {MapScreen} from '../../features/map/screens/MapScreen';
import {RouteScreen} from '../../features/map/screens/RouteScreen';

const Stack = createStackNavigator();

export const MapNavigator = () => {
  const screenOptions =
    useMemo <
    StackNavigationOptions >
    (() => (
      {
        ...TransitionPresets.SlideFromRightIOS,

        headerShown: true,
        safeAreaInsets: {top: 0},
        cardStyle: {
          backgroundColor: 'white',
          overflow: 'visible',
        },
      },
      (headerMode = 'screen')
    ),
    []);

  const screenAOptions = useMemo(() => ({headerLeft: () => null}), []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        screenOptions={screenAOptions}
        name="MapScreen"
        component={MapScreen}
      />
      <Stack.Screen name="Route" component={RouteScreen} />
      {/* <Stack.Screen
          name="Stations"
          options={screenAOptions}
          component={StationScreen}
        />
        <Stack.Screen name="Place" component={PlaceScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Activation" component={ActivationScreen} /> */}
    </Stack.Navigator>
  );
};
