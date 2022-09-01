import React from 'react';
import Animated from 'react-native-reanimated';
import {Marker} from 'react-native-maps';

import {StyleSheet, View} from 'react-native';
import {useMarkerAnimation} from './useMarkerAnimation';
import {useDispatch} from 'react-redux';
import {showPointInf} from '../../store/actions/map';

export function CustomMarker({
  id,
  selectedMarker,
  color,
  latitude,
  longitude,
  handlePressMarker,
}) {
  //const scale = useMarkerAnimation({ id, selectedMarker });

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      //  id={{id:id}}
      //onPress={handlePressMarker}
      onPress={() => {
        handlePressMarker(id);
      }}>
      <View style={styles.markerWrapper}>
        <Animated.View
          style={[
            styles.marker,
            {
              backgroundColor: color,
              // transform: [{ scale: scale }],
            },
          ]}></Animated.View>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerWrapper: {
    // height: 50,
    // width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 22,
    width: 22,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
});
