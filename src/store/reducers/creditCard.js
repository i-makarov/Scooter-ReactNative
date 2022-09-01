import {creditCardConstants} from '../types';

const initialState = {
  cards: [],
  currentCard: null,
};

export const creditCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case creditCardConstants.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        currentCard: action.payload,
      };
    case creditCardConstants.REMOVE_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        currentCard: action.payload,
      };

    default:
      return state;
  }
};
