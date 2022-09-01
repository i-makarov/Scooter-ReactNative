import React from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FavoriteItem} from './FavoriteItem';

export const FavoriteSection = ({ data}) => {
  const renderItem = ({item}) => <FavoriteItem item={item} />;
  return (
    <View style={styles.favoriteSection}>
      <View>
        <Text style={styles.title}>Избранное</Text>
      </View>
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

const styles = StyleSheet.create({
  favoriteSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    marginLeft: 27,
    fontWeight: 'bold',
  },
});
