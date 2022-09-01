import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Config from 'react-native-config';

export const HeaderRoute = ({setConf, station, user}) => {
  const [textFrom, onChangeTextFrom] = React.useState('My Position');
  const [textTo, onChangeTextTo] = React.useState(station.direction);

//   const setAdress = async () => {

//     await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + user.latitude + ',' + user.longitude + '&key=' + Config.GOOGLE_MAPS_API_KEY)
//     .then((response) => response.json())
//         .then((responseJson) => {
//             console.log('error')
//             const arr = [...responseJson.results]
//         console.log((arr));
        
//         // onChangeTextTo()
// })

//   }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button title="Car" onPress={() => setConf('DRIVING')} />
        <Button title="Walk" onPress={() => setConf('WALKING')} />
        <Button title="Bus" onPress={() => setConf('TRANSIT')} />
      </View>
      <View style={styles.inputs_container}>
        <View style={styles.input_container}>
            <Text style={styles.text_input}>From:</Text>
            <Text style={styles.text_row}>
                {textFrom}
            </Text>
          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeTextFrom}
            placeholder="My possition"
            value={textFrom}
          /> */}
        </View>
        <View style={styles.input_container}>
        <Text style={styles.text_input}>To:</Text>
        <Text style={styles.text_row}>
                {textTo}
            </Text>
          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeTextTo}
            value={textTo}
          /> */}
        </View>
        {/* <Button 
        title='Test'
        onPress={() => setAdress()}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    //height: 100,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputs_container:{
      width: "100%"
  },
  input_container: {
      alignItems: 'center',
      flexDirection: 'row',
      width: "100%",
      marginLeft: 10,
      
  },
  text_input:{
      width: "15%"
  },
  text_row:{
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    width: "70%",
  },
  input: {
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch',
    width: "70%"
  },
});
