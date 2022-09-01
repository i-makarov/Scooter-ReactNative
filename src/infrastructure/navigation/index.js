import React, {useEffect, useState} from 'react';

// import * as SecureStore from 'expo-secure-store';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './AppNavigation';
import {AccountNavigator} from './AccountNavigator';

//import {restoreToken} from '../../store/actions/auth';
import {restoreUser} from '../../store/actions/user';
import {loginToken} from '../../store/actions/token';
import {Auth} from 'aws-amplify';

export const Navigation = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const bootstrapAsync = async () => {
      let data;
      let user;
      try {
        data = await AsyncStorage.getItem('userData');
        user = JSON.parse(data).user;
        await Auth.currentAuthenticatedUser()
          .then(data => dispatch(loginToken(data)))
          .catch(err => console.log(err));
        setLoading(false);
      } catch (e) {
        console.log('Error token');
        setLoading(false);
      }
      dispatch(restoreUser(user));
    };
    bootstrapAsync();
  }, []);

  // isValidToken
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <NavigationContainer>
      {isAuth === true ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
