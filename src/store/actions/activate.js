import {placeService} from '../../infrastructure/services/placeService';
import {placeConstants} from '../types';

export const activatePlace = place => {
  return async dispatch => {
    dispatch(request(place));
    let placeSuccess = placeService.activation(place);
    // Error processing like that:
    /*.then(
      user => { 
          dispatch(success(user));
      },
      error => {
          dispatch(failure(error.toString()));
    }*/
    await dispatch(success(placeSuccess));
  };

  function request(place) {
    return {type: placeConstants.ACTIVATE_REQUEST, payload: place};
  }

  function success(place) {
    return {type: placeConstants.ACTIVATE_SUCCESS, payload: place};
  }

  function failure(error) {
    return {type: placeConstants.ACTIVATE_FAILURE, error};
  }
};

export const deactivationPlace = place => {
  return async dispatch => {
    dispatch(request(place));
    let placeSuccess = placeService.deactivation(place);
    // Error processing like that:
    /*.then(
      user => { 
          dispatch(success(user));
      },
      error => {
          dispatch(failure(error.toString()));
    }*/
    await dispatch(success(placeSuccess));
  };

  function request(place) {
    return {type: placeConstants.DEACTIVATION_REQUEST, payload: place};
  }

  function success(place) {
    return {type: placeConstants.DEACTIVATION_SUCCESS, payload: place};
  }

  function failure(error) {
    return {type: placeConstants.DEACTIVATION_FAILURE, error};
  }
};

export const toogleActive = place => {
  return {
    type: placeConstants.TOGGLE_ACTIVE,
    payload: place,
  };
};
