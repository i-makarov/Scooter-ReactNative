import React, {useState, useEffect} from 'react';

import {View, Text, Image, Modal, StyleSheet, Pressable} from 'react-native';

import {ArrowBack} from '../../../components';
import {appScreen} from '../../../infrastructure/theme/appScreen';

import {useDispatch} from 'react-redux';
import {registerUser, restoreUser} from '../../../store/actions/user';

import {registerToken} from '../../../store/actions/token';

// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import {Auth} from 'aws-amplify';
import {ModalConfirm} from '../components/ModalConfirm/ModalConfirm';

export const RegisterScreen = ({navigation}) => {

  const [isSecureEntry, setIsSecureEntry] = useState(true)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getToken = async () => {

    

    let userToken;
    try {
      userToken = await AsyncStorage.getItem('userData');
      console.log(JSON.parse(userToken));
    } catch (e) {
      console.log('Error token');
    }
  };


  async function saveData(key, data) {
    await AsyncStorage.setItem(key, data);
  }
  const Register = async data => {
    const {email, password} = data;
    setLoading(true);
    setError('');
    try {
      const user = await Auth.signUp(email, password)
        .then(cognitoUser => {
          // const SaveData = {
          //   token: cognitoUser,
          //   user: {
          //     id: Date.now().toString(),
          //     email: data.email,
          //     latitude: 0,
          //     longitude: 0,
          //   },
          // };
          // saveData('userData', JSON.stringify(SaveData));
          // dispatch(registerToken(cognitoUser));
          // dispatch(registerUser(SaveData.user));
          // dispatch(restoreUser(SaveData.user));
          console.log('OK');
          
          setModalVisible(true);
          return cognitoUser;
        })
        .catch(error => {
          console.log(error);
          return Promise.reject(error);
        });
       //setModalVisible(true);
    } catch (err) {
      setLoading(false);
      if (err.code === 'UserNotConfirmedException') {
        setError('Account not verified yet');
      } else if (err.code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password');
      } else if (err.code === 'NotAuthorizedException') {
        setError('Forgot Password?');
      } else if (err.code === 'UserNotFoundException') {
        setError('User does not exist!');
      } else {
        setError(err.code);
      }
    }
    // TODO: Add dispatch(login) to save user data in auth in Redux
  };

  return (
<View style={appScreen.container}>
  <View style={{flex:3, justifyContent:'center'}}>
    <View style={{marginBottom:56}}>

      <View style={appScreen.ViewArrowBack}>
        <ArrowBack style={appScreen.Arrowback} navigation={navigation} />
      </View>
    </View>
    <View style={{alignItems:'center'}}>
      <Text style={appScreen.Signtext}>Регистрация</Text>
    </View>
    <View style={{alignItems:'stretch'}}>
      <TextInput
        style={appScreen.UserinputSign}
        //label={'E-mail'}
        activeUnderlineColor='#000'
        selectionColor='black'
        underlineColor='#F2F4F5'
        activeUnderlineColor='#F2F4F5'
        autoCapitalize={'none'}
        autoComplete={'name'}
        placeholder="Username"
        placeholderTextColor={'#89898C'}
        left={<TextInput.Icon name="account" color={'#89898C'}/>}
        //value={name}
        /*onChangeText={setEmail}*/
      >
      </TextInput>
      <TextInput
        style={appScreen.EmailinputSign}
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
        onChangeText={setEmail}
      >
      </TextInput>
        
      <TextInput
        style={appScreen.PassinputSign}
        //label={'Password'}
        activeUnderlineColor='#000'
        selectionColor='black'
        underlineColor='#F2F4F5'
        activeUnderlineColor='#F2F4F5'
        textContentType={'password'}
        secureTextEntry={isSecureEntry}
        autoCapitalize={'none'}
        placeholder="Password"
        placeholderTextColor={'#89898C'}
        left={ <TextInput.Icon name= "lock" color={'#89898C'}/>}
        right={<TextInput.Icon name={ isSecureEntry ? "eye-off": "eye"} color={'#89898C'} onPress={()=>{
          setIsSecureEntry((prev)=>!prev)
        }}/>}
        value={password}
        onChangeText={setPassword}
      >
      </TextInput>
      
      
      </View>
      <View style={{justifyContent:'flex-start'}}>
        <Text style={{marginLeft:56, marginRight:28, marginTop:18, fontSize:11}}> Я согласен с условиями пользовательского соглашения и даю свое согласие на обработку моих персональных данных</Text>

      </View>
      <ModalConfirm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        user= {{email,password}}
      />
      <View style={appScreen.ViewButton}>
        <Button
          style={appScreen.Signbutton}
          labelStyle={{fontSize: 16}}
          mode="contained"
          onPress={() => Register({email, password})}>
          Sign up
        </Button>
      </View>
    <View> 
      
      <Button
      style={appScreen.GoogleButton}
      labelStyle={{fontSize:12, textAlign:'right', marginLeft: 50, marginTop:12}}
      mode='outlined'
      color='#000'
      onPress={() => setModalVisible(true)}>

      
      Continue with Google</Button>
    
      <Image source = {require('../icons/Google__G__Logo.svg-removebg-preview.png')} style={{position:'absolute', height:25, width:25, marginTop:25, marginLeft:56}}/>
    

    </View>
  </View>
</View>
  );
};
