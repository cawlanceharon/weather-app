import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './openWeather/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;