import React, { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, View } from 'react-native';
import Config from 'react-native-config';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';
import { CustomMarker, TopBar } from '../../../components';
import { UserMarker } from '../../../components/CustomMarker';
import { MARKERS_DATA } from '../../../data';
import { HeaderRoute } from '../components/RouteHeader/RouteHeader';
import { useLocation } from '../getLocation';
import { mapStyle } from '../mapStyle';
import { useMap } from '../useMap';

export const RouteScreen = ({route}) => {
    const station = route.params;
    const positionUser = useSelector(state => state.position.currentPosition);
    const [mode, setMode] = useState("TRANSIT")
    const {getLocation, getLocationUpdates} = useLocation();

    useEffect(() => {
      getLocation();
      getLocationUpdates();
    }, []);

    const {
        mapRef,
        selectedMarker,
        handleNavigateToPoint,
        handelResetInitialPosition,
      } = useMap();


    const setConf = (setting) => {
        setMode(setting)
    }

    const moveCamera = async () => {
        await getLocation();
        handelResetInitialPosition(
          'user',
          positionUser.latitude,
          positionUser.longitude,
        );
      };
  return (
    <View>
         
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
        <MapViewDirections
        origin={positionUser}
        destination={station}
        apikey={Config.GOOGLE_MAPS_API_KEY}
        strokeWidth={4}
        strokeColor="#7DEAC2"
        mode={mode}
        //precision={"high"}
        language={"ru"}
        // resetOnChange={false}
        
        />
          <CustomMarker
            key={"to"}
            id={"to"}
            selectedMarker={selectedMarker}
            color={station.color}
            latitude={station.latitude}
            longitude={station.longitude}
            >
            </CustomMarker>
        

        <UserMarker
          color={'#000000'}
          latitude={positionUser.latitude}
          longitude={positionUser.longitude}></UserMarker>
      </MapView>
      <HeaderRoute setConf = {setConf} station={station} user = {positionUser} />
      <Button
      title='User'
      onPress={() => moveCamera()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      position: 'absolute',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });