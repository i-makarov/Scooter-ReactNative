import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button, TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMap } from '../../features/map/useMap';


export function ListItem({ item }) {

  const onPressElement = useSelector(state => state.map.point)


  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();
  
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#FAFAFA' : 'white',
        },
        styles.stations,
      ]}
      onPress={() => navigation.navigate('Place', {station:item})}
   
    >
      <View style={[styles.stations__logo, { backgroundColor: item.color }]}>
        <Image
          source={item.img}
          style={styles.stations__logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.stations__info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.direction}>{item.direction}</Text>
      </View>
      <View>
        <Button 
        title='Show'
        onPress={() => onPressElement(item.id, item.latitude, item.longitude)}
        />
        {/* <TouchableHighlight style={styles.toucheble}  onPress={() => onPressElement(item.id, item.latitude, item.longitude)}>
          <Ionicons style={styles.back_arrow} name="navigate-outline"></Ionicons>
        </TouchableHighlight> */}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  stations: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    
  },
  stations__logo: {
    height: 32,
    width: 32,
    borderRadius: 50,
    marginRight: 19,
    alignItems: 'center',
    justifyContent: 'center',

  },
  logoImage: {
    height: '65%',
    width: '65%',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2F3136',
  },
  direction: {
    fontSize: 14,
    fontWeight: '400',
    color: '#989CA5',
  },
  stations__btn: {
    flexGrow: 1,
  },
  stations__info: {
    flexGrow: 1,
  },
  back_arrow: {
    fontSize: 30,

  },
toucheble:{
    width:48,
    height:48,
    marginRight: 10
}
});