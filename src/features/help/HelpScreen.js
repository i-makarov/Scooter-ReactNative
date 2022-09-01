import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage} from '../../store/actions/chat';
import {StyleSheet, View} from 'react-native';

export const HelpScreen = () => {

  const dispatch = useDispatch();

  const messages = useSelector(state => state.chat.messages);

  const onSend = (message = []) => {
    console.log(message);
    dispatch(sendMessage(message));
  };
  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={message => onSend(message)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
  },
});
