import {USE_MAP} from '../types';
import { mapConstants } from '../types';

const initialState = {
  point: null,
  currentId: 1,
  navigation:null
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case USE_MAP:
      return {
        ...state,
        point: action.payload,
      };
    case mapConstants.POINT_INFORMATION:
      return {
        ...state,
        currentId: action.payload,
      };
      case mapConstants.SET_NAVIGATION:
        return {
          ...state,
          navigation: action.payload,
        };
    default:
      return state;
  }
};
