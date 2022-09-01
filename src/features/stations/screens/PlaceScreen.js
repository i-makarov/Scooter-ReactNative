import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import { Link, useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {PLACES_DATA} from '../../../data/places';
import {toggleFavorite} from '../../../store/actions/favorites';
import {PlaceItem} from '../components/PlaceItem/PlaceItem';

export const PlaceScreen = ({navigation, route}) => {
  const {station, otherParam} = route.params;
  const dispatch = useDispatch();
  const nav = useSelector(state => state.map.navigation)


  useEffect(() => {
    navigation.setOptions({title: station.name});
  }, []);
  const renderItem = ({item}) => <PlaceItem item={item} />;
  return (
    <View style={styles.contentContainer}>
      <Button
        title="Toggle Favorite"
        onPress={() => dispatch(toggleFavorite(station))}
      />
      <Button
        title="Route"
        onPress={() => nav.navigate('Route', station) }
      />
      <BottomSheetFlatList
        data={PLACES_DATA.filter(
          place => place.station_id === station.id && place.status,
        )}
        keyExtractor={i => i.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  panelHandle: {
    width: 41,
    height: 4,
    backgroundColor: '#E1E1E1',
    borderRadius: 17,
  },
});
