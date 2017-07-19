import React, { Component } from 'react';
import Geolocation from '../containers/geolocation';

export default class App extends Component {
  render() {
    return (
      <div className="app-component">
        Do I need an umbrella
        <Geolocation />
      </div>
    );  
  }
}
