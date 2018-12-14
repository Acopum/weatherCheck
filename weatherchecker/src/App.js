import React from 'react';
import Banner from './modules/Banner';
import Form from './modules/Form';
import ShortForecast from './modules/ShortForecast';
import LongForecast from './modules/LongForecast';

const API_KEY = '35c5931ee975680abe6b4d0fbe6c6d0f';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      temperature: null,
      humidity: null,
      pressure: null,
      windspeed: null,
      city: null,
      country: null,
      weather: null,
      description: null,
      status: 'Provide a city to look up (ex/ London, CA)',
      day: [],
      dayTemperature: [],
      dayWeather: [],
      dayDescription: [],
    };
    this.getWeather = this.getWeather.bind(this);
  };

  async getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const callToday = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},${country}&APPID=${API_KEY}`);
    const dataToday = await callToday.json();

    const call5Day = await fetch (`http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city},${country}&APPID=${API_KEY}`);
    const data5Day = await call5Day.json();

    console.log(dataToday);
    console.log(data5Day);

    let next5Days = [];
    let now = new Date();
    let today = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+(now.getDate());
    console.log(today);

    if(city && country){
      if(dataToday.main){
        let counter = 0;
        let dateDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let week5Days = [];
        let temp5Days = [];
        let weather5Days = [];
        let desc5Days = [];

        for(let i=0; i<data5Day.list.length;i++){
          if(counter === 5){
            break;
          }
          if(i < 5){
            let next = new Date(now);
            next.setDate(now.getDate()+i);
            let tomorrow = next.getFullYear()+'-'+(next.getMonth()+1)+'-'+(next.getDate());
            week5Days.push(dateDays[next.getDay()])
            next5Days.push(tomorrow);
          }
          if(data5Day.list[i].dt_txt.startsWith(next5Days[counter])){
            temp5Days.push(data5Day.list[i].main.temp);
            weather5Days.push(data5Day.list[i].weather[0].main);
            desc5Days.push(data5Day.list[i].weather[0].description);
            counter++;
          }
        }

        console.log(week5Days);
        console.log(next5Days);
        console.log(temp5Days);
        console.log(weather5Days);
        console.log(desc5Days);

        this.setState({
          temperature: dataToday.main.temp,
          humidity: dataToday.main.humidity,
          pressure: dataToday.main.pressure,
          windspeed: dataToday.wind.speed,
          city: dataToday.name,
          country: dataToday.sys.country,
          weather: dataToday.weather[0].main,
          description: dataToday.weather[0].description,
          day: week5Days,
          dayTemperature: temp5Days,
          dayWeather: weather5Days,
          dayDescription: desc5Days,
          status: ' ',
        });
      }
      else{
        this.setState({
          temperature: null,
          humidity: null,
          pressure: null,
          windspeed: null,
          city: null,
          country: null,
          weather: null,
          description: null,
          day: [],
          dayTemperature: [],
          dayWeather: [],
          dayDescription: [],
          status: 'City could not be found',
        });
      }
    }
    else {
      this.setState({
        temperature: null,
        humidity: null,
        pressure: null,
        windspeed: null,
        city: null,
        country: null,
        weather: null,
        description: null,
        day: [],
        dayTemperature: [],
        dayWeather: [],
        dayDescription: [],
        status: 'All values not entered',
      });
    }
  };

  render() {
    return(
      <div>
        <div className="outside">
          <div className="main">
            <div className="component_container">
              <div className="row">
                <div className="col-md-5 welcome_container">
                  <div className = "banner_container">
                    <Banner />
                  </div>
                  <div className = "form_container">
                    <Form
                      getWeather = {this.getWeather}
                      status = {this.state.status}
                    />
                  </div>
                </div>
                <div className="col-md-7 shortforecast_container">
                  <ShortForecast
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    weather = {this.state.weather}
                    description = {this.state.description}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 longforecast_container">
                  <LongForecast
                    day = {this.state.day}
                    dayTemperature = {this.state.dayTemperature}
                    dayWeather = {this.state.dayWeather}
                    dayDescription = {this.state.dayDescription}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
