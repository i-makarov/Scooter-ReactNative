import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
 import moment from 'moment';
import { useSelector } from 'react-redux';


export const ModalCheck = ({ModalPlaceRef}) => {

  const handleCloseModal = useCallback(() => {
    ModalPlaceRef.current?.dismiss();
  }, []);

  const snapPoints = useMemo(() => ['25%', '40%'], []);

  const check = useSelector(state => state.check.currentCheck)
  

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          ref={ModalPlaceRef}
          index={1}
          snapPoints={snapPoints}
        >
          <View style={styles.contentContainer}>
              <Text style={styles.title}>Ваш чек</Text>
              <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text>Модель: </Text>
                    <Text>{check.place.model}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Прайс: </Text>
                    <Text>{check.place.price} р/мин.</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Дата: </Text>
                    <Text>{check.place.date.date} {check.place.date.time}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Сумма: </Text>
                    <Text>{check.summ} р.</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>Оплата: </Text>
                    <Text>Номер карты</Text>
                </View>
              </View>
              <View>
                  <Button 
                  title='Продолжить'
                  onPress={handleCloseModal}
                  />
                  <Button 
                  title='Test'
                  onPress={() => console.log(check)}
                  />
              </View>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    paddingBottom: 10,
  },
  infoContainer: {
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  textContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});