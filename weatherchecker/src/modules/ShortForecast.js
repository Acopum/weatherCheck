import React from 'react';

class ShortForecast extends React.Component {

  render(){
    return(
        <div>
        {/*Current Forecast*/}
          <div className="row justify-content-center">

              <div className="shortforecast_container_left">
              {this.props.city && this.props.country && <h1>Current</h1>}
              {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
              {this.props.humidity && <p>Humidity: {this.props.humidity} %</p>}
              {this.props.pressure && <p>Pressure: {this.props.pressure} hPa</p>}
              {this.props.windspeed && <p>Wind: {this.props.windspeed} m/s</p>}
              </div>


              <div className="shortforecast_container_right">

              {this.props.weather && <img className="big" src={'http://openweathermap.org/img/w/'+this.props.weather+".png"} alt="Weather"/>}
              {this.props.description && <p>{this.props.description.toUpperCase()}</p>}
              {this.props.temperature && <h1>{this.props.temperature} °C</h1>}
              </div>
            </div>

        </div>
    );
  }
};

export default ShortForecast;
