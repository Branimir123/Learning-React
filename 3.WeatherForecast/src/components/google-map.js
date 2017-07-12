import React from 'react';
import { Component } from 'react';

export default class GoogleMapComponent extends Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 8,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){
        //this.refs.map - it will give a direct reference to the div
        return <div ref="map" />;
    }
}
