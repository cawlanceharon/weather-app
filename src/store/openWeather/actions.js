import axios from 'axios';
import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './types';

export const fetchWeather = (city, unit, apiKey) => async (dispatch) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        units: unit,
        appid: apiKey,
      },
    });
    dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_FAILURE, payload: error?.response?.data });
  }
};
