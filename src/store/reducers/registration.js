//import {POSSITION_USER, REGISTER_USER, RESTORE_USER} from '../types';
import {userConstants, tokenConstants} from '../types';

const initialState = {
  currentUser: {
    email: '',
    password: '',
    bonuses: 0,
    latitude: 0,
    longitude: 0,
  },
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {registering: true};
    case userConstants.REGISTER_SUCCESS:
      // Should return {} coz registration
      return {
        ...state,
        currentUser: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    // case USER_REGISTER_TOKEN_REQUEST: and other register with token
    case userConstants.RESTORE_USER:
      // Should return {} coz registration
      return {
        ...state,
        currentUser: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };

    // case tokenConstants.REGISTER_TOKEN_REQUEST:
    //   return {
    //     isLoading: true,
    //   };
    // case tokenConstants.REGISTER_TOKEN_SUCCESS:
    //   return {
    //     ...state,
    //     userToken: action.payload,
    //   };

    // case tokenConstants.REGISTER_TOKEN_FAILURE:
    //   return {};
    default:
      return state;
  }
};
