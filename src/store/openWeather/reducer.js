import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './types';

export const PENDING = 'PENDING';
export const FULFILLED = 'FULFILLED';
export const REJECTED = 'REJECTED';

const initialState = {
  weather: {
    status: 'NO_ACTION',
    payload: null,
  },
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        weather: {
          ...state.weather,
          status: PENDING,
          payload: null,
        },
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: {
          status: FULFILLED,
          payload: action.payload,
        },
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        weather: {
          status: REJECTED,
          payload: action.payload,
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
