import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



export function CheckItem({ item}) {

  const dispatch = useDispatch()

  
  return (
    <View style={styles.container}>
       <View style={styles.textContainer}>
        <View>  
            <Text>Станция: {item.place.model}</Text>
            <Text>Дата: {item.place.date.date}</Text>
            <Text>Начало: {item.place.date.time}</Text>
            <Text>Конец: {item.time_end}</Text>
        </View>
        <View>
            <Text>Сумма: {item.summ}</Text>
            <Text>Бонусы: {item.bonnus}</Text>
        </View>
       </View>
       <View>
            <Text>Время заряда: {item.all_time}</Text>
        </View>
       <View>
       </View>
    </View>
      
 
  );
}

const styles = StyleSheet.create({
    container: {
     marginBottom: 15,
     paddingBottom: 10,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
  });