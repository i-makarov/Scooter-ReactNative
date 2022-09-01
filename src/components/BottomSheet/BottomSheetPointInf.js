import React, {useCallback, useRef, useMemo, useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useSelector} from 'react-redux';
import {MARKERS_DATA} from '../../data';
import {NavigationContainer} from '@react-navigation/native';
import {PlaceScreen} from '../../features/stations/screens/PlaceScreen';
import {BookingScreen} from '../../features/stations/screens/BookingScreen';
import {ActivationScreen} from '../../features/stations/screens/ActivationScreen';
import {createStackNavigator} from '@react-navigation/stack';

export function BottomSheetPointInf({bottomSheetModalRef, navigation, id}) {
  // const bottomSheetModalRef = useRef(null);

  const Stack = createStackNavigator();

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const pointId = useSelector(state => state.map.currentId);

  // const [title, setTitle] = useState('');
  // const [direction, setDirection] = useState('');
  const [avalible, setAvalible] = useState(0);

  const getStation = pointId => {
    return MARKERS_DATA.filter(element => {
      return element.id === pointId;
    })[0];
  };

  let station;
  useEffect(() => {
    station = getStation(pointId);
    if (station !== undefined) {
      // setTitle(station.name);
      // setDirection(station.direction);
      setAvalible(station.number_of_free);
    }
  }, [pointId]);

  // const showTitle = id => {
  //   let title = MARKERS_DATA.filter(element => {
  //     return element.id == id;
  //   });
  //   setTitle(title.name);
  // };
  //useEffect(() => {showTitle(id)}, [id]);
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);
  //   const handleSheetChanges = useCallback(index => {
  //     console.log('handleSheetChanges', index);
  //   }, []);

  return (
    <View style={styles.container}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}>
        <Text style={avalible > 0 ? styles.unavalibleContainer : styles.title}>
          В точке нет свободных мест!
        </Text>
        <View
          style={
            avalible > 0 ? styles.contentContainer : styles.unavalibleContainer
          }>
          <NavigationContainer independent={true} props={pointId}>
            <Stack.Navigator>
              <Stack.Screen
                name="Place"
                component={PlaceScreen}
                initialParams={{station: getStation(pointId)}}
              />
              <Stack.Screen name="Booking" component={BookingScreen} />
              <Stack.Screen name="Activation" component={ActivationScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  unavalibleContainer: {
    display: 'none',
  },
  title: {
    color: 'black',
  },
  direction: {
    color: 'balck',
  },
  avalible: {
    color: 'black',
  },
  unavalible: {
    color: 'black',
  },
});
