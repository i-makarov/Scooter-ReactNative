import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ArrowBack = ({navigation, styleArrow}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.toucheble}
        onPress={() => navigation.goBack()}>
        <Ionicons
          style={{
            fontSize: 25,
            color: 'white',
            marginTop: 2,
            marginRight: 9,
            marginLeft: 3,
            ...styleArrow,
          }}
          name="chevron-back"></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  back_arrow: {
    fontSize: 25,
    color: 'white',
    marginTop: 2,
    marginRight: 9,
    marginLeft: 3,
  },
  toucheble: {
    width: 40,
    height: 40,
  },
});
