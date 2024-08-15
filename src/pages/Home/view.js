import React from 'react';
import Component from './component';
import { SearchBar } from '../../components/SearchBar';
import { WeatherDisplay } from '../../components/WeatherDisplay';

const View = () => (
  <Component>
    {(props) => (
      <>
        <div className="App">
          <h1>Weather App</h1>
          <SearchBar onSearch={props.searchWeather} loading={props.loading} />
          {props.loading && <>Loading...</>}
          {props.error && <p className="error">{props.error}</p>}
          {props.weatherData && (
            <WeatherDisplay
              data={props.weatherData}
              unit={props.unit}
              setUnit={props.setUnit}
              toggleWeather={props.toggleWeather}
            />
          )}
        </div>
      </>
    )}
  </Component>
);

export default View;
