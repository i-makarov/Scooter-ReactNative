import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import {logout} from '../../../../store/actions/user';
import {Auth} from 'aws-amplify';
import {colors} from '../../../../infrastructure/theme/colors';

export const ProfileCard = ({handlePresentModalPress}) => {
  const user = useSelector(state => state.registration.currentUser);
  const dispatch = useDispatch();

  const logOut = async () => {
    await Auth.signOut();
    dispatch(logout());
  };
  const navigation = useNavigation();

  const cardNumber = useSelector(state => state.creditCard.currentCard);

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.info_container}>
          <Text style={styles.name}>{user.email}</Text>
          <TouchableHighlight style={styles.toucheble} onPress={() => logOut()}>
            <Ionicons style={styles.icon} name="exit-outline"></Ionicons>
          </TouchableHighlight>
        </View>
        <View style={styles.icon_container}>
          <TouchableHighlight
            style={styles.toucheble}
            onPress={() => console.log(user)}>
            <Ionicons style={styles.icon} name="settings-outline"></Ionicons>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.toucheble}
            onPress={() => navigation.navigate('Check')}>
            <MaterialIcons style={styles.icon} name="history"></MaterialIcons>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.toucheble}
            onPress={() => console.log('Nth')}>
            <Ionicons
              style={styles.icon}
              name="notifications-outline"></Ionicons>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.bottom_container}>
        <Pressable style={styles.card} onPress={() => console.log("Navigate ScreenCards")}>
          <TouchableHighlight 
          // onPress={() => handlePresentModalPress()}
          >
            <Ionicons style={styles.card_icon} name="card-outline"></Ionicons>
          </TouchableHighlight>
          <View>
            {cardNumber === null ? (
              <Text style={styles.card_text}>Не выбрано</Text>
            ) : (
              <Text style={styles.card_text}>**{cardNumber.number.slice(12)}</Text>
            )}
          </View>
        </Pressable>
        <View style={styles.bonuses}>
          <Text>Бонусы: {user.bonuses}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
  },
  icon_container: {
    flexDirection: 'row',
  },
  info_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bottom_container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.bg.secondary,
    padding: 4,
    borderRadius: 5,
    minWidth: 100,
    borderColor: colors.ui.primary,
    borderWidth: 1,
    alignItems: 'center',
  },
  card_text: {
    marginLeft: 5,
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  card_icon: {
    fontSize: 25,
    color: colors.ui.primary,
  },
  icon: {
    fontSize: 28,
    color: 'blue',
  },
  bonuses: {
    marginLeft: 15,
  },
  toucheble: {
    marginLeft: 5,
  },
});
