import {Auth} from 'aws-amplify';
import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginToken} from '../../../../store/actions/token';
import {restoreUser} from '../../../../store/actions/user';

export const ModalConfirm = ({modalVisible, setModalVisible, user}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [code, setCode] = useState('');

  const dispatch = useDispatch();

  async function saveData(key, data) {
    await AsyncStorage.setItem(key, data);
  }
  const onConfirm = async code => {
    setLoading(true);
    setError('');
    try {
      await Auth.confirmSignUp(user.email, code, {forceAliasCreation: false});
      await Auth.signIn(user.email, user.password)
        .then(cognitoUser => {
          const SaveData = {
            token: cognitoUser,
            user: {
              id: Date.now().toString(),
              email: user.email,
              latitude: 0,
              longitude: 0,
            },
          };

          saveData('userData', JSON.stringify(SaveData));
          dispatch(loginToken(cognitoUser));
          dispatch(restoreUser(SaveData.user));
          setModalVisible(false)
          return cognitoUser;
        })
        .catch(error => {
          console.log(error);
          return Promise.reject(error);
        });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      if (err.code === 'UserNotConfirmedException') {
        setError('Account not verified yet');
      } else if (err.code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password');
      } else if (err.code === 'NotAuthorizedException') {
        setError('Forgot Password?');
      } else if (err.code === 'UserNotFoundException') {
        setError('User does not exist!');
      }
    }
  };

  const onResend = async () => {
    try {
      await Auth.resendSignUp(user.email);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Введите код подтверждения</Text>

            <TextInput
              //label={'E-mail'}
              activeUnderlineColor="#000"
              selectionColor="black"
              underlineColor="#F2F4F5"
              activeUnderlineColor="#F2F4F5"
              textContentType={'emailAddress'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              autoComplete={'email'}
              placeholder="E-mail"
              placeholderTextColor={'#89898C'}
              value={code}
              onChangeText={setCode}></TextInput>

            <Button title="Confirm" onPress={() => onConfirm(code)} />
            <Button title="Resend" onPress={() => onResend()} />
            <Button
              title="Hide"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button title="Test" onPress={() => test()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:"rgba(0, 0, 0, 0.6)"
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
