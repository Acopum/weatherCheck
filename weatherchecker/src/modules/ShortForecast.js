import React from 'react';

class ShortForecast extends React.Component {

  render(){
    return(
      <div>
        {/*Current Forecast*/}
        <div>
          {this.props.city && this.props.country && <p>Current Weather</p>}
          {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
          {this.props.temperature && <p>Temperature: {this.props.temperature} °C</p>}
          {this.props.weather && <p>Weather: {this.props.weather}</p>}
          {this.props.description && <p>Description: {this.props.description.toUpperCase()}</p>}
        </div>
      </div>
    );
  }
};

export default ShortForecast;
