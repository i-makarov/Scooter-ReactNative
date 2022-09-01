//import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../types";
import {userConstants, tokenConstants} from '../types';

const initialState = {
  isAuth: false,
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case tokenConstants.RESTORE_TOKEN:
      return {
        ...state,
        isAuth: true,
        userToken: action.payload,
        isLoading: false,
      };
    case tokenConstants.LOGIN_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case tokenConstants.LOGIN_TOKEN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isSignout: false,
        userToken: action.payload,
      };
    case tokenConstants.LOGIN_TOKEN_FAILURE:
      return {};

      case tokenConstants.REGISTER_TOKEN_REQUEST:
      return {
        isLoading: true,
      };
    case tokenConstants.REGISTER_TOKEN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userToken: action.payload,
      };
    case tokenConstants.REGISTER_TOKEN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        ...state,
        isAuth: false,
        isSignout: true,
        userToken: null,
      };

    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: true,
        isSignout: false,
        //userToken: action.token,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isSignout: false,
        userToken: action.payload,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        ...state,
        isAuth: false,
        isSignout: true,
        //userToken: null,
      };
    default:
      return state;
  }
};
