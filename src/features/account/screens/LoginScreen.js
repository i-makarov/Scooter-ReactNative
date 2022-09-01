import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import {Auth} from '@aws-amplify/auth';
import {useDispatch} from 'react-redux';
import {Button, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {appScreen} from '../../../infrastructure/theme/appScreen';
import {ArrowBack} from '../../../components';

import {restoreUser} from '../../../store/actions/user';
import {loginToken} from '../../../store/actions/token';

export const LoginScreen = ({navigation}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true)



  const [email, setEmail] = useState('ilmak99@mail.ru');
  const [password, setPassword] = useState('qweqweqwe');

  const dispatch = useDispatch();

  async function saveData(key, data) {
    await AsyncStorage.setItem(key, data);
  }

  const Login = async data => {
    console.log(data);
    Auth.signIn(data.email, data.password)
      .then(cognitoUser => {
        const SaveData = {
          token: cognitoUser,
          user: {
            id: Date.now().toString(),
            email: data.email,
            latitude: 0,
            longitude: 0,
          },
        };

        saveData('userData', JSON.stringify(SaveData));
        dispatch(loginToken(cognitoUser));
        dispatch(restoreUser(SaveData.user));
        return cognitoUser;
      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  };

  return (
    <View style={appScreen.container}>
      <View style={{flex:3, justifyContent:'center'}}>
        <View style={{marginBottom:56}}>
          <View style={appScreen.ViewArrowBack}>
            <ArrowBack style={appScreen.Arrowback}  navigation={navigation} />
          </View>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={appScreen.Logintext}>Вход</Text>
        </View>
        <View style={{alignItems:'stretch'}}>
          <TextInput
          style={appScreen.Emailinput}
          //label={'E-mail'}
          activeUnderlineColor='#000'
          selectionColor='black'
          underlineColor='#F2F4F5'
          activeUnderlineColor='#F2F4F5'

          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoComplete={'email'}
          placeholder="E-mail"
          placeholderTextColor={'#89898C'}
          left={<TextInput.Icon name="email-outline" color={'#89898C'}/>}
          value={email}
          onChangeText={setEmail}></TextInput>
          
          <TextInput
          style={appScreen.Passinput}
          //label={'Password'}
          activeUnderlineColor='#000'
          selectionColor='black'
          underlineColor='#F2F4F5'
          activeUnderlineColor='#F2F4F5'
          textContentType={'password'}
          secureTextEntry = {isSecureEntry}
          autoCapitalize={'none'}
          placeholder="Password"
          placeholderTextColor={'#89898C'}
          left={<TextInput.Icon name="lock" color={'#89898C'}/>}
          right={<TextInput.Icon name={ isSecureEntry ? "eye-off": "eye"} color={'#89898C'} onPress={()=>{
            setIsSecureEntry((prev)=>!prev)
          }}/>}
          value={password}
          onChangeText={setPassword}>
          </TextInput>
        </View>
        <View style={{alignItems:'center', marginTop:17}}>
          <Text style={{color:'#89898C', fontSize:12}}>Забыли пароль?</Text>
        </View>
        <View>
          <Button
            style = {appScreen.Loginbutton}
            labelStyle={{fontSize:16}}
            mode="contained" 
            onPress={() => Login({email, password})}>
          Login
          </Button>
          <Button
          style={appScreen.GoogleButton}
          labelStyle={{fontSize:12, textAlign:'right', marginLeft: 50, marginTop:12}}
          mode='outlined'
          color='#000'
          >
          Login with Google</Button>
        
          <Image source = {require('../icons/Google__G__Logo.svg-removebg-preview.png')} style={{position:'absolute', height:25, width:25, marginTop:92, marginLeft:61}}/>
        </View>

      </View>
    </View>
  );
};
