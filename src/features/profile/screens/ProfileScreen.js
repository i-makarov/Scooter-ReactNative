import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, Button, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileCard} from '../components/Profile';
import {ProfileList} from '../components/ProfileList/ProfileList';
import {ModalCheck} from '../components/ModalCheck/ModalCheck';
import {deactivationPlace, toogleActive} from '../../../store/actions/activate';
import {addCheck} from '../../../store/actions/check';
import {unbookPlace} from '../../../store/actions/booking';
import {toggleFavorite} from '../../../store/actions/favorites';
import {FavoriteSection} from '../components/Favorites/Favorite';
import {MainSection} from '../components/MainSection/MainSection';

import {Auth, Cache} from 'aws-amplify';
import {BottomSheetCard} from '../../../components/BottomSheet/BottomSheetCard';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const ModalPlaceRef = useRef(null);

  const handleOpenModal = useCallback(() => {
    ModalPlaceRef.current?.present();
  }, []);

  const currentActive = useSelector(state => state.actions.activePlaces);
  const currentBooked = useSelector(state => state.booking.bookedPlaces);
  const currentFavorite = useSelector(state => state.favorites.favoritesPlaces);

  const endActive = item => {
    dispatch(toogleActive(item.id));
    dispatch(deactivationPlace(item));
    dispatch(addCheck(item));
    handleOpenModal();
  };

  const endBooked = item => {
    dispatch(toogleActive(item.id));
    dispatch(unbookPlace(item));
    dispatch(addCheck(item));
    handleOpenModal();
  };

  const userInfo = async () => {
    // console.log('+++++++++++++++++++++++++++++++11');
    // Auth.currentSession()
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
    // console.log('+++++++++++++++++++++++++++++++22');
  };

  const bottomSheetCardModalRef = useRef(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetCardModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView style={styles.center}>
      <ProfileCard handlePresentModalPress={handlePresentModalPress} />
      {/* <FavoriteSection data={currentFavorite} />
      <ProfileList
        title={'Активно'}
        data={currentActive}
        endAction={endActive}
      /> */}
     <MainSection/>
      {/* <ProfileList title={'Бронь'} data={currentBooked} endAction={endBooked} /> */}
      <Button title="Test CognitoUser" onPress={() => userInfo()} />
      <ModalCheck ModalPlaceRef={ModalPlaceRef} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  profileList: {
    marginBottom: 20,
  },
});
