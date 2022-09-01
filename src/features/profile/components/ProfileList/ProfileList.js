import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import {ProfileItem} from './ProfileItem';

export const ProfileList = ({title, data, endAction}) => {
  const renderItem = ({item}) => (
    <ProfileItem item={item} endAction={endAction} />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 13,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2F3136',
    paddingBottom: 20,
  },
});
