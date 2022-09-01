import {creditCardConstants} from '../types';

export const addCreditCard = card => {
  return {
    type: creditCardConstants.ADD_CARD,
    payload: card,
  };
};

export const removeCreditCard = card => {
    return {
      type: creditCardConstants.REMOVE_CARD,
      payload: card,
    };
  };
