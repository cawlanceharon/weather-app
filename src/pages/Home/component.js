import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../store/openWeather/actions';

const Component = ({ children }) => {
  const dispatch = useDispatch();

  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const {
    weather,
  } = useSelector((state) => state.weather);

  useEffect(() => {
    const { status, payload } = weather;
    if (status === 'PENDING') {
      setLoading(true);
      setError(null);
      setWeatherData(null);
    }
    if (status === 'FULFILLED') {
      setLoading(null);
      setWeatherData(payload);
      setError(null);
    }
    if (status === 'REJECTED') {
      setUnit('metric');
      setWeatherData(null);
      setLoading(null);
      setError(payload?.message);
    }
  }, [weather]);

  const searchWeather = async (city) => {
    dispatch(fetchWeather(city, unit, process.env.REACT_APP_OPENWEATHERMAP_API_KEY));
  };

  const toggleWeather = async (city, unit) => {
    dispatch(fetchWeather(city, unit, process.env.REACT_APP_OPENWEATHERMAP_API_KEY));
  };

  return children({
    weatherData,
    loading,
    unit,
    setUnit,
    error,
    setError,
    searchWeather,
    toggleWeather,
  });
};

export default Component;