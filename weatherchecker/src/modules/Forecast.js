import React from 'react';

class Forecast extends React.Component {

  render(){
    return(
      <div>
        {/*Current Forecast*/}
        <div>
          {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
          {this.props.temperature && <p>Temperature: {this.props.temperature} °C</p>}
          {this.props.weather && <p>Weather: {this.props.weather}</p>}
          {this.props.description && <p>Description: {this.props.description.toUpperCase()}</p>}
          <p>{this.props.status}</p>
        </div>
        {/*5 Day Forecast*/}
        <div>
          <p>{this.props.day[0]}</p>
          <p>{this.props.dayTemperature[0]}</p>
          <p>{this.props.dayWeather[0]}</p>
          <p>{this.props.dayDescription[0]}</p>
        </div>
        <div>
          <p>{this.props.day[1]}</p>
          <p>{this.props.dayTemperature[1]}</p>
          <p>{this.props.dayWeather[1]}</p>
          <p>{this.props.dayDescription[1]}</p>
        </div>
        <div>
          <p>{this.props.day[2]}</p>
          <p>{this.props.dayTemperature[2]}</p>
          <p>{this.props.dayWeather[2]}</p>
          <p>{this.props.dayDescription[2]}</p>
        </div>
        <div>
          <p>{this.props.day[3]}</p>
          <p>{this.props.dayTemperature[3]}</p>
          <p>{this.props.dayWeather[3]}</p>
          <p>{this.props.dayDescription[3]}</p>
        </div>
        <div>
          <p>{this.props.day[4]}</p>
          <p>{this.props.dayTemperature[4]}</p>
          <p>{this.props.dayWeather[4]}</p>
          <p>{this.props.dayDescription[4]}</p>
        </div>
      </div>
    );
  }
};

export default Forecast;
