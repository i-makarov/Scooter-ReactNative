import {userConstants} from '../types';

const initialState = {
  currentPosition: {
    latitude: 0,
    longitude: 0,
  },
};

export const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.POSSITION:
      return {
        ...state,
        currentPosition: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    default:
      return state;
  }
};
