import React, {useCallback, useMemo, useRef} from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import { CardScreen } from '../../features/cards/screens/CardScreen';
// import { AddScreen } from '../../features/cards/screens/AddScreen';

const Stack = createStackNavigator();

export const CardNavigator = () => {
  const screenOptions =
    useMemo <
    StackNavigationOptions >
    (() => (
      {
        ...TransitionPresets.SlideFromRightIOS,

        headerShown: false,
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
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={screenOptions,{headerShown:false}}>
        {/* <Stack.Screen
            name="Cards"
            options={screenAOptions}
            component={CardScreen}
          />
          <Stack.Screen name="Add"  component={AddScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
