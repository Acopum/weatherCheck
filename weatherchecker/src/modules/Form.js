import React from 'react';

class Form extends React.Component {

  render(){
    return(
      <div>
        <form onSubmit = {this.props.getWeather}>
          <div>
            <input type = 'text' name = 'city' placeholder = 'City'/>
            <input type = 'text' name = 'country' placeholder = 'Country'/>
          </div>
          <div>
            <button>View Weather</button>
          </div>
        </form>
        <p>{this.props.status}</p>
      </div>
    );
  }
};

export default Form;
