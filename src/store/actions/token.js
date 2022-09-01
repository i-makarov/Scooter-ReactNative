//import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "../types";
import { tokenService } from '../../infrastructure/services/tokenService';
import {tokenConstants} from '../types';

export const restoreToken = token => {
  return {
    type: tokenConstants.RESTORE_TOKEN,
    payload: token,
  };
};

export const loginToken = token => {
  return async dispatch => {
    dispatch(request(token));
    let tokenSuccess = tokenService.register(token);
    // Error processing like that:
    /*.then(
      token => { 
          dispatch(success(token));
      },
      error => {
          dispatch(failure(error.toString()));
    }*/
    await dispatch(success(tokenSuccess));
  };

  function request(token) {
    return {type: tokenConstants.LOGIN_TOKEN_REQUEST, payload: token};
  }

  function success(token) {
    return {type: tokenConstants.LOGIN_TOKEN_SUCCESS, payload: token};
  }

  function failure(error) {
    return {type: tokenConstants.LOGIN_TOKEN_FAILURE, error};
  }
};

export const logoutToken = () => {
  return {
    type: tokenConstants.LOGOUT,
  };
};

export const registerToken = token => {
  return async dispatch => {
    dispatch(request(token));
    let tokenSuccess = tokenService.register(token);
    // Error processing like that:
    /*.then(
      token => { 
          dispatch(success(token));
      },
      error => {
          dispatch(failure(error.toString()));
    }*/
    await dispatch(success(tokenSuccess));
  };

  function request(token) {
    return {type: tokenConstants.REGISTER_TOKEN_REQUEST, payload: token};
  }

  function success(token) {
    return {type: tokenConstants.REGISTER_TOKEN_SUCCESS, payload: token};
  }

  function failure(error) {
    return {type: tokenConstants.REGISTER_TOKEN_FAILURE, error};
  }
};
