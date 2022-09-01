import React from 'react';
import {StyleSheet, Pressable, Text, View, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../../store/actions/favorites';
export const FavoriteItem = ({item}) => {
    const dispatch = useDispatch()

  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#FAFAFA' : 'white',
        },
        styles.card,
      ]}
      onPress={() => console.log('Press')}>
      <View style={styles.card_image}></View>
      <View style={styles.card_content}>
        <View>
          <Text style={styles.card_title}>{item.name}</Text>
          <Text style={styles.card_subtitle}>{item.direction}</Text>
        </View>
        <View  style={styles.card_button}>
          <Button title="Del" onPress={() => dispatch(toggleFavorite(item))}  />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginLeft: 18,
    borderRadius: 10,
    marginTop:5,
    
  },
  card_title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  card_subtitle: {
    fontSize: 10,
  },
  card_image: {
    width: 136,
    height: 65,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 9,
  },
  card_content: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  card_button:{
    
  }
});
