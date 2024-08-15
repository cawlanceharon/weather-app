import React from 'react';

export const WeatherDisplay = ({ data, unit, setUnit, toggleWeather }) => {
  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    toggleWeather(data.name, newUnit);
  };

  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <p>
        {data.main.temp}° {unit === 'metric' ? 'C' : 'F'}
      </p>
      <p>{data.weather[0].description}</p>
      <p>
        Wind Speed: {data.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}
      </p>
      <button onClick={toggleUnit}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
}
