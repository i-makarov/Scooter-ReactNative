//import {CURRENT_USER_DATA, USERS_DATA} from '../../data';

import {userConstants} from '../types';
import {userService} from '../../infrastructure/services/userServices';

export const registerUser = user => {
  return async dispatch => {

    dispatch(request(user));
    let userSuccess = userService.register(user);  
    // Error processing like that:
    /*.then(
      user => { 
          dispatch(success(user));
      },
      error => {
          dispatch(failure(error.toString()));
    }*/
    await dispatch(success(userSuccess));
  };

  function request(user) {
    return {type: userConstants.REGISTER_REQUEST, payload: user};
  }

  function success(user) {
    return {type: userConstants.REGISTER_SUCCESS, payload: user};
  }

  function failure(error) {
    return {type: userConstants.REGISTER_FAILURE, error};
  }
};

export const loginUser = user => {
  return async dispatch => {
    dispatch(request(user));
    let userSuccess = userService.register(user);
    // Error processing like that:
    /*.then(
      user => { 
          dispatch(success(user));
      },
      error => {
          dispatch(failure(error.toString()));
    }*/
    await dispatch(success(userSuccess));
  };

  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, payload: user};
  }

  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, payload: user};
  }

  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
};



export const restoreUser = user => {
  return {
    type: userConstants.RESTORE_USER,
    payload: user,
  };
};

export const positionUser = data => {
  return {
    type: userConstants.POSSITION,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: userConstants.LOGOUT,
  };
};
