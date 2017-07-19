import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class WeatherForecast extends Component {
    renderAnswer(description) {
        if(description == 'shower rain' 
            || description == 'rain' 
            || description == 'thunderstorm' 
            || description == "snow"){
                return <p className="answer-yes">YES</p>;
        }
        else{
            return <p className="answer-no">NO</p>;
        }
    }

    renderWeather(cityData){
        const weatherDescription = cityData.description;
        const iconSrc = `http://openweathermap.org/img/w/${cityData.icon}.png`
        return (
            <div>   
                {this.renderAnswer(weatherDescription)}
                <img src={iconSrc} alt=""/>
                <p>{weatherDescription}</p>
            </div>
        );
    }

    render() {
       return (
            <div>
               if(this.props.weather) {
                        this.renderWeather(this.props.weather)
                    }
            
            </div> 
       );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherForecast);
