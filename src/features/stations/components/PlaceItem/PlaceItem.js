import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button } from 'react-native';


export function PlaceItem({ item }) {
  const navigation = useNavigation();
  return (
    <View style={styles.stations}>
      <View style={[styles.stations__logo]}>
        {/* <Image
          source={item.img}
          style={styles.stations__logoImage}
          resizeMode="contain"
        /> */}
      </View>
      <View style={styles.stations__info}>
        <Text style={styles.title}>Модель: {item.model}</Text>
        <Text style={styles.direction}>Прайс: {item.price} р./мин.</Text>
      </View>
   
      <View>

        <Button
        style={styles.stations__btn}
        title='Бронь'
        onPress={() => navigation.navigate('Booking', item)}
        />
        <Button
        style={styles.stations__btn}
        title='Активация'
        onPress={() => navigation.navigate('Activation', item)}
        />

      </View>
      </View>
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
  }
});