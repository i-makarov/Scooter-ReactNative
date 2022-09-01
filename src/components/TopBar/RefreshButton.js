import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';



export function RefreshButton({ onPressElement }) {

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#FAFAFA' : 'white',
        },
        styles.container,
      ]}
      onPress={onPressElement}
    >

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '70%',
    width: '70%',
  },
});