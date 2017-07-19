import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import fetchWeather from '../actions/index';
import { geolocated } from 'react-geolocated';
import { bindActionCreators } from 'redux';

class Geolocation extends Component {
    render() {
        if(this.props.coords){
            this.props.fetchWeather(this.props.coords);
        }

        return (
            !this.props.isGeolocationAvailable
            ? <div>Your browser does not support geolocation </div>
            : !this.props.isGeolocationEnabled
                ? <div> Your geolocation isn't enabled </div>
                : this.props.coords
                    ?<table>  
                      <tbody>
                        <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                        <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                        <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                        <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                        <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
                        </tbody>
                    </table>
                    : <div>Getting the location data&hellip; </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

const GeolocationHOC = geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(Geolocation);

export default connect(null, mapDispatchToProps)(GeolocationHOC);