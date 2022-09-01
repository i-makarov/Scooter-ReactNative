import {placeConstants} from '../types';

import moment from 'moment';
import {PLACES_DATA} from '../../data/places';

const initialState = {
  allPlaces: PLACES_DATA,
  bookedPlaces: []
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case placeConstants.BOOKING_REQUEST:
      return {...state, activating: true};
    case placeConstants.BOOKING_SUCCESS:
      // Should return {} coz activation
      const booked = {
        ...action.payload,
        date: {
          date: moment().format('YYYY-MM-DD'),
          time: moment().format('hh:mm:ss'),
        },
      };
      return {
        ...state,
        bookedPlaces: [...state.bookedPlaces, booked],
      };
    case placeConstants.BOOKING_FAILURE:
      return {...state};


    case placeConstants.UNBOOK_REQUEST:
      return {...state, activating: true};
    case placeConstants.UNBOOK_SUCCESS:
      // Should return {} coz activation
      return {
        ...state,
        bookedPlaces: state.bookedPlaces.filter(
          place => place.id !== action.payload.id,
        ),
      };
    case placeConstants.UNBOOK_FAILURE:
      return {...state};

    default:
      return state;
  }
};
