import {chatConstants} from '../types';
import {GiftedChat} from 'react-native-gifted-chat';

let initialState = {
  messages: [
    {
      _id: 1,
      text: 'Добрый день. Чем мы можем помочь?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Алесей',
        //avatar: '',
      },
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case chatConstants.ADD_MESSAGE:
      return {
        ...state,
        messages: [action.payload[0], ...state.messages],
      };
    default:
      return state;
  }
};
