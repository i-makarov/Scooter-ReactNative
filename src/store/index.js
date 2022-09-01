import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import {actionsReducer} from './reducers/activate';
import {authReducer} from './reducers/auth';
import {checkReducer} from './reducers/check';
import {mapReducer} from './reducers/map';
import {registrationReducer} from './reducers/registration';
import {bookingReducer} from './reducers/booking';
import {favoritesReducer} from './reducers/favorites';
import {positionReducer} from './reducers/position';
import {chatReducer} from './reducers/chat';
import { creditCardReducer } from './reducers/creditCard';

const rootReducer = combineReducers({
  chat: chatReducer,
  registration: registrationReducer,
  auth: authReducer,
  map: mapReducer,
  actions: actionsReducer,
  booking: bookingReducer,
  favorites: favoritesReducer,
  check: checkReducer,
  position: positionReducer,
  creditCard: creditCardReducer,
});

const loggerMiddleware = createLogger({
  predicate: (getState, action) => action.type,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);
