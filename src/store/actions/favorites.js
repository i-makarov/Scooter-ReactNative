import {placeConstants} from '../types';

export const toggleFavorite = place => {
  return {
    type: placeConstants.TOGGLE_FAVORITE,
    payload: place,
  };
};
