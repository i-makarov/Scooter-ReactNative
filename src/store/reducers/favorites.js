import {placeConstants} from '../types';

const initialState = {
  favoritesPlaces: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case placeConstants.TOGGLE_FAVORITE:
      const addOrRemove = (arr, item) =>
        arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];
      return {
        ...state,
        favoritesPlaces: addOrRemove(state.favoritesPlaces, action.payload),
      };

    default:
      return state;
  }
};
