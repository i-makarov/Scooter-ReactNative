import { placeService } from '../../infrastructure/services/placeService';
import {placeConstants} from '../types';


export const bookingPlace = place => {
  return async dispatch => {

    dispatch(request(place));
    let placeSuccess = placeService.booking(place);  
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
    return {type: placeConstants.BOOKING_REQUEST, payload: place};
  }

  function success(place) {
    return {type: placeConstants.BOOKING_SUCCESS, payload: place};
  }

  function failure(error) {
    return {type: placeConstants.BOOKING_FAILURE, error};
  }
};

export const unbookPlace = place => {
    return async dispatch => {
  
      dispatch(request(place));
      let placeSuccess = placeService.unbook(place);  
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
      return {type: placeConstants.UNBOOK_REQUEST, payload: place};
    }
  
    function success(place) {
      return {type: placeConstants.UNBOOK_SUCCESS, payload: place};
    }
  
    function failure(error) {
      return {type: placeConstants.UNBOOK_FAILURE, error};
    }
  };