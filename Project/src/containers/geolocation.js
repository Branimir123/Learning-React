import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import fetchWeather from '../actions/index';
import { geolocated } from 'react-geolocated';
import { bindActionCreators } from 'redux';

class Geolocation extends Component {
    constructor(props) {
        super(props);

        this.state = { coords: '' };
    }

    render() {
        if(this.props.coords){
            this.props.fetchWeather(this.props.coords);
        }

        return (
            !this.props.isGeolocationAvailable
            ? <div>Your browser does not support geolocation </div>
            : !this.props.isGeolocationEnabled
                ? <div> Your geolocation isn't enabled </div>
                : !this.props.coords
                    ? <div> Fetching your location... </div>
                    : <div></div>
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