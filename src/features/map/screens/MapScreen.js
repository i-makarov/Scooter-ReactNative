import React, {useCallback, useEffect, useRef, useMemo, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {mapStyle} from '../mapStyle';
import {TopBar, CustomMarker} from '../../../components';
import {UserMarker} from '../../../components/CustomMarker';
import {BottomSheetList} from '../../../components/BottomSheet/BottomSheet';
import {BottomSheetPointInf} from '../../../components/BottomSheet/BottomSheetPointInf';

import {useMap} from '../useMap';
import {useLocation} from '../getLocation';

import {MARKERS_DATA} from '../../../data';
import {showPointInf} from '../../../store/actions/map';
import {BottomBar} from '../../../components/BottomBar/BottomBar';

import {API} from 'aws-amplify';
import {listStations} from '../../../graphql/queries';

export function MapScreen({navigation}) {
  const dispatch = useDispatch();

  const positionUser = useSelector(state => state.position.currentPosition);

  const [stations, setStations] = useState(null);

  const {getLocation, getLocationUpdates} = useLocation();

  useEffect(() => {
    getLocation();
    getLocationUpdates();
    getStationsFromAmplify();
  }, []);

  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();

  // Variables for open and send data to BottomSheetPointInf
  const bottomSheetPointInfRef = useRef(null);
  const bottomSheetModalRef = useRef(null);
  const openBottomSheetPointInf = useCallback(id => {
    dispatch(showPointInf(id));
    bottomSheetPointInfRef.current?.present();
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const moveCamera = async () => {
    await getLocation();
    handelResetInitialPosition(
      'user',
      positionUser.latitude,
      positionUser.longitude,
    );
  };

  // TODO: Add useMemo() for optimiztion this query
  const getStationsFromAmplify = async () => {
    const payload = await API.graphql({query: listStations}).then(data => {
      return data.data.listStations.items;
    });
    const stations = payload.map(marker => (
      <CustomMarker
        key={marker.id}
        id={marker.id}
        selectedMarker={selectedMarker}
        color={'#7DEAC2'}
        latitude={marker.latitude}
        longitude={marker.longitude}
        handlePressMarker={openBottomSheetPointInf}></CustomMarker>
    ));
    console.log(
      '=============================================================================',
    );
    console.log(JSON.stringify(stations));
    console.log(
      '=============================================================================',
    );
    setStations(stations);
  };

  return (
    <View style={styles.container}>
      <TopBar style={styles.button} onPressElement={() => moveCamera()} />
      <MapView
        ref={mapRef}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialCamera={{
          altitude: 15000,
          center: {
            latitude: 54.992918,
            longitude: 73.360173,
          },
          heading: 0,
          pitch: 0,
          zoom: 12,
        }}
        mapType="standard">
        {stations}
        <UserMarker
          color={'#000000'}
          latitude={positionUser.latitude}
          longitude={positionUser.longitude}></UserMarker>
      </MapView>

      <BottomBar
        style={styles.button}
        onPressElement={handlePresentModalPress}
      />
      <BottomSheetModalProvider style={styles.bottomSheet}>
        <BottomSheetList
          onPressElement={handleNavigateToPoint}
          bottomSheetModalRef={bottomSheetModalRef}
          handlePresentModalPress={handlePresentModalPress}
          navigation={navigation}
          style={styles.bottomSheet}
        />
        <BottomSheetPointInf
          bottomSheetModalRef={bottomSheetPointInfRef}
          handlePresentModalPress={openBottomSheetPointInf}
          navigation={navigation}></BottomSheetPointInf>
      </BottomSheetModalProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheet: {
    zIndex: 100,
  },
  mapStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    zIndex: 1,
  },
});
