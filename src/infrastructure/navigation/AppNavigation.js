import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HelpScreen} from '../../features/help/HelpScreen';
import {ProfileScreen} from '../../features/profile/screens/ProfileScreen';
import {colors} from '../theme/colors';

import {MapNavigator} from './MapNavigator';
import {MapScreen} from '../../features/map/screens/MapScreen';
import {ProfileNavigator} from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Profile: 'people',
  Map: 'map',
  Help: 'help',
};

const createScreenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    const iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#7DEAC2',
  tabBarInactiveTintColor: '#BABCBC',
  headerShown: false,
});

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Profile" component={ProfileNavigator} />
    <Tab.Screen name="Map" component={MapNavigator} />
    {/* <Tab.Screen name="Help" component={SettingsScreen} /> */}
    <Tab.Screen name="Help" component={HelpScreen} />
  </Tab.Navigator>
);
