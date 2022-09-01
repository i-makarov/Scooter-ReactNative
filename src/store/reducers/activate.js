import {PLACES_DATA} from '../../data/places';
import {placeConstants} from '../types';

import moment from 'moment';

const initialState = {
  allPlaces: PLACES_DATA,
  activePlaces: []
};

export const actionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case placeConstants.ACTIVATE_REQUEST:
      return {...state, activating: true};
    case placeConstants.ACTIVATE_SUCCESS:
      // Should return {} coz activation
      const active = {
        ...action.payload,
        date: {
          date: moment().format('YYYY-MM-DD'),
          time: moment().format('hh:mm:ss'),
        },
      };
      return {
        ...state,
        activePlaces: [...state.activePlaces, active],
      };
    case placeConstants.ACTIVATE_FAILURE:
      return {...state};

    case placeConstants.DEACTIVATION_REQUEST:
      return {...state, activating: false};
    case placeConstants.DEACTIVATION_SUCCESS:
      // Should return {} coz activation
      return {
        ...state,
        activePlaces: state.activePlaces.filter(
            place => place.id !== action.payload.id,
          ),
      };
    case placeConstants.DEACTIVATION_FAILURE:
      return {...state};

    case placeConstants.TOGGLE_ACTIVE:
      const allPlaces = state.allPlaces.map(place => {
        if (place.id === action.payload) {
          place.status = !place.status;
        }
        return place;
      });
      return {
        ...state,
        allPlaces,
      };
    default:
      return state;
  }
};
