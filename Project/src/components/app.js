import React, { Component } from 'react';
import WeatherForecast from '../containers/weather_forecast';

export default class App extends Component {
  render() {
    return (
      <div className="app-component">
        Do I need an umbrella
        <WeatherForecast />
      </div>
    );
  }
}
