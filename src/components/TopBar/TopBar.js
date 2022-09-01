import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GetLocation } from './GetLocation';

import { RefreshButton } from './RefreshButton';

export function TopBar({ onPressElement }) {
  return (
    <View style={styles.container}>
      <RefreshButton onPressElement={onPressElement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 40,
    width: '100%',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});