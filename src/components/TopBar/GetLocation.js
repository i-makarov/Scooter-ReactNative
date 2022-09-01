import React, { useState, useEffect } from 'react';

// import * as Location from 'expo-location';

import { useDispatch, useSelector } from "react-redux";
import { positionUser } from '../../store/actions/user';

export function GetLocation() {
  const dispatch = useDispatch()
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLoc, setLoc] = useState({});

  // const setUserLoc = (lat, lng) => {
  //   if (USER_DATA[0].latitude != lat.coords.latitude || USER_DATA[0].longitude != lng.coords.longitude) {
  //     USER_DATA[0] = {
  //       latitude: lat,
  //       longitude: lng,
  //     }
  //   }
  // }
  const getCurrenLoc = {}
  // const getCurrenLoc = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied');
  //     console.log('Error');
      
  //     return;
  //   }
  //   let userLoc = await Location.getCurrentPositionAsync({});
  //   setLoc(userLoc);
  //   //setUserLoc(userLoc.coords.latitude, userLoc.coords.longitude)
  //   dispatch(positionUser({latitude:userLoc.coords.latitude, longitude:userLoc.coords.longitude}))
  // }
return getCurrenLoc
}


