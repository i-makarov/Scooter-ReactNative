import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-paper';

export const AccountScreen = ({ navigation }) => {

  return (
    <View style={{flex:1, backgroundColor:'#000'}}>
      <View style = {{flex:3, marginTop:105, justifyContent:'space-evenly'}}>
        <Text style = {styles.textCFES}>CFES</Text>
        <View style={{justifyContent:'flex-start'}}>
          <Text style={styles.textCHARGE1}>заряди</Text>
          <Text style={styles.textSAMOKAT}>свой самокат</Text>
        </View>
        <View  style={{justifyContent:'flex-start'}}>
          <Text style={styles.textPRILOSCHENIE}>Приложение для зарядки</Text>
          <Text style={styles.textPRILOSCHENIE2}>самокатов</Text>
        </View>
      </View>
      <View style={{flex:2, justifyContent:'center', alignItems:'stretch'}}>
        <Button
          style ={styles.buttonSignUp}
          labelStyle={{color: '#000'}}
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Sign up
        </Button>
        <Button
          style={styles.buttonLogin}
          color='#fff'
          mode="outlined"
          onPress={() => navigation.navigate('Login')}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor:'#000',
  //   flex: 1,
  //   justifyContent: 'center',
  //   marginHorizontal: 16,
  //},
  textCFES:{
    fontSize:50,
    fontWeight: "500",
    color: '#fff',
    marginLeft:35,
  },
  textCHARGE1:{
    marginTop:27,
    fontSize:50,
    fontWeight: "500",
    color: '#fff',
    marginLeft:35,
  },
  textSAMOKAT:{
    fontSize:40,
    fontWeight: "500",
    color: '#fff',
    marginLeft:35,
  },
  textPRILOSCHENIE:{
    fontSize:14,
    marginTop:34,
    fontWeight: "500",
    color: '#fff',
    marginLeft:35,
    marginRight: 84,
  },
  textPRILOSCHENIE2:{
    fontSize:14,
    fontWeight: "500",
    color: '#fff',
    marginLeft:35,
    marginRight: 84,
  },
  buttonSignUp:{
    backgroundColor: '#fff',
    height: 40,
    marginLeft:35,
    marginRight:35,
    borderRadius:10,
  },
  buttonLogin:{
    borderColor: '#fff',
    borderWidth: 1,
    height: 40,
    margin:12,
    marginLeft:35,
    marginRight:35,
    borderRadius:10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});