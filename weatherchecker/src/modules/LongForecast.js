import React from 'react';

class LongForecast extends React.Component {

  render(){
    return(
      <div className="row justify-content-center">
        {/*5 Day Forecast*/}
        <div className="longforecast_day_container">
          <p>{this.props.day[0]}</p>
          <p>{this.props.dayTemperature[0]}</p>
          <p>{this.props.dayWeather[0]}</p>
          {this.props.dayDescription[0] && <p>{this.props.dayDescription[0].toUpperCase()}</p>}
        </div>
        <div className="longforecast_day_container">
          <p>{this.props.day[1]}</p>
          <p>{this.props.dayTemperature[1]}</p>
          <p>{this.props.dayWeather[1]}</p>
          {this.props.dayDescription[1] && <p>{this.props.dayDescription[1].toUpperCase()}</p>}
        </div>
        <div className="longforecast_day_container">
          <p>{this.props.day[2]}</p>
          <p>{this.props.dayTemperature[2]}</p>
          <p>{this.props.dayWeather[2]}</p>
          {this.props.dayDescription[2] && <p>{this.props.dayDescription[2].toUpperCase()}</p>}
        </div>
        <div className="longforecast_day_container">
          <p>{this.props.day[3]}</p>
          <p>{this.props.dayTemperature[3]}</p>
          <p>{this.props.dayWeather[3]}</p>
          {this.props.dayDescription[3] && <p>{this.props.dayDescription[3].toUpperCase()}</p>}
        </div>
        <div className="longforecast_day_container">
          <p>{this.props.day[4]}</p>
          <p>{this.props.dayTemperature[4]}</p>
          <p>{this.props.dayWeather[4]}</p>
          {this.props.dayDescription[4] && <p>{this.props.dayDescription[4].toUpperCase()}</p>}
        </div>
      </div>
    );
  }
};

export default LongForecast;
