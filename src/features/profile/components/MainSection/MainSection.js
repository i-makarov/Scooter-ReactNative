import React, { useState } from 'react';
import {Button, FlatList, ScrollView, View} from 'react-native';
import { useSelector } from 'react-redux';
import { FavoriteItem } from '../Favorites/FavoriteItem';

export const MainSection = () => {
    const [data, setData] = useState(currentActive)
    const currentActive = useSelector(state => state.actions.activePlaces);
  const currentBooked = useSelector(state => state.booking.bookedPlaces);
  const currentFavorite = useSelector(state => state.favorites.favoritesPlaces);
    const renderItem = ({item}) => <FavoriteItem item={item} />;
  return (
    <View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
        <Button title="Активные" onPress={() => setData(currentActive)} />
        <Button title="Бронь" onPress={() => setData(currentBooked)} />
        <Button title="Избранное" onPress={() => setData(currentFavorite)} />
        <Button title="История" onPress={() => setData(currentFavorite)} />
        <Button title="История" onPress={() => setData(currentFavorite)} />
      </ScrollView>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
