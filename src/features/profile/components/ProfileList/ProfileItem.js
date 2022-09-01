import React from 'react';
import {StyleSheet, Text, View, Pressable, Image, Button} from 'react-native';

export function ProfileItem({item, endAction}) {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#FAFAFA' : 'white',
        },
        styles.stations,
      ]}
      onPress={() => console.log('Press')}>
      <View style={[styles.stations__logo, {backgroundColor: 'blue'}]}>
        <Image
          source={item.img}
          style={styles.stations__logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.stations__info}>
        <Text style={styles.title}>{item.model}</Text>
        <Text style={styles.direction}>{item.price}</Text>
      </View>
      <View>
        <Button
          style={styles.stations__btn}
          title="Завершить"
          onPress={() => endAction(item)}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  stations: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
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
});
