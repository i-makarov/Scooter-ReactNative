import {chatConstants} from '../types';

export const sendMessage = message => {
  return {
    type: chatConstants.ADD_MESSAGE,
    payload: message,
  };
};