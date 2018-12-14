import React from 'react';

class LongForecast extends React.Component {

  render(){
    return(
      <div className="row justify-content-center">
        {/*5 Day Forecast*/}
        <div className="longforecast_day_container">
          <h1>{this.props.day[0]}</h1>
          {this.props.dayWeather[0] && <img className="little" src={'http://openweathermap.org/img/w/'+this.props.dayWeather[0]+".png"} alt="Weather"/>}
          {this.props.dayDescription[0] && <p>{this.props.dayDescription[0].toUpperCase()}</p>}
          {this.props.dayTemperature[0] && <p>{this.props.dayTemperature[0]} °C</p>}
        </div>
        <div className="longforecast_day_container">
          <h1>{this.props.day[1]}</h1>
          {this.props.dayWeather[1] && <img className="little" src={'http://openweathermap.org/img/w/'+this.props.dayWeather[1]+".png"} alt="Weather"/>}
          {this.props.dayDescription[1] && <p>{this.props.dayDescription[1].toUpperCase()}</p>}
          {this.props.dayTemperature[1] && <p>{this.props.dayTemperature[1]} °C</p>}
        </div>
        <div className="longforecast_day_container">
          <h1>{this.props.day[2]}</h1>
          {this.props.dayWeather[2] && <img className="little" src={'http://openweathermap.org/img/w/'+this.props.dayWeather[2]+".png"} alt="Weather"/>}
          {this.props.dayDescription[2] && <p>{this.props.dayDescription[2].toUpperCase()}</p>}
          {this.props.dayTemperature[2] && <p>{this.props.dayTemperature[2]} °C</p>}
        </div>
        <div className="longforecast_day_container">
          <h1>{this.props.day[3]}</h1>
          {this.props.dayWeather[3] && <img className="little" src={'http://openweathermap.org/img/w/'+this.props.dayWeather[3]+".png"} alt="Weather"/>}
          {this.props.dayDescription[3] && <p>{this.props.dayDescription[3].toUpperCase()}</p>}
          {this.props.dayTemperature[3] && <p>{this.props.dayTemperature[3]} °C</p>}
        </div>
        <div className="longforecast_day_container">
          <h1>{this.props.day[4]}</h1>
          {this.props.dayWeather[4] && <img className="little" src={'http://openweathermap.org/img/w/'+this.props.dayWeather[4]+".png"} alt="Weather"/>}
          {this.props.dayDescription[4] && <p>{this.props.dayDescription[4].toUpperCase()}</p>}
          {this.props.dayTemperature[4] && <p>{this.props.dayTemperature[4]} °C</p>}
        </div>
      </div>
    );
  }
};

export default LongForecast;
