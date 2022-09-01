import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Animated from 'react-native-reanimated';
import {Marker} from 'react-native-maps';

export function UserMarker({id, selectedMarker, color, latitude, longitude}) {
  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}>
      <View style={styles.markerWrapper}>
        <Animated.View
          style={[
            styles.marker,
            {
              backgroundColor: color,
            },
          ]}>
          <Text style={styles.text}>I</Text>
        </Animated.View>
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
    height: 26,
    width: 26,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  text: {
    color: 'white',
    fontWeight: '900',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 2,
  },
});
