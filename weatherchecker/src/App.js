import React from 'react';
import Banner from './modules/Banner';
import Form from './modules/Form';
import ShortForecast from './modules/ShortForecast';
import LongForecast from './modules/LongForecast';

//api key for openweathermaps
const API_KEY = '35c5931ee975680abe6b4d0fbe6c6d0f';

class App extends React.Component {
  constructor(props) {
    super(props);
    //state holds info from api calls for both current forecast and 5day forecast
    this.state={
      temperature: null,
      humidity: null,
      pressure: null,
      windspeed: null,
      city: 'Thunder Bay',
      country: 'CA',
      weather: null,
      description: null,
      status: 'Provide a city to look up (ex/ London, CA)',
      day: [],
      dayTemperature: [],
      dayWeather: [],
      dayDescription: [],
    };
    this.getWeather = this.getWeather.bind(this);
    this.updateWeather = this.updateWeather.bind(this);
  };

  //run call to openweather maps and receive forecast after button press
  async getWeather(e) {
    //prevent page reload (default behaviour) on form submit
    e.preventDefault();
    //take input from formJS
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //api call for current forecast
    const callToday = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},${country}&APPID=${API_KEY}`);
    const dataToday = await callToday.json();
    //api call for 5 day forecast
    const call5Day = await fetch (`http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city},${country}&APPID=${API_KEY}`);
    const data5Day = await call5Day.json();

    this.updateWeather(city, country, dataToday, data5Day);
  };

  //process data taken from API call
  updateWeather(city, country, dataToday, data5Day){
    if(city && country){//check if input exists from form
      if(dataToday.main){ //if successful api call, start filling objects to push to forecast JS
        let dateDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let next5Days = [];
        let week5Days = [];
        let temp5Days = [];
        let weather5Days = [];
        let desc5Days = [];
        //need to get date when checking for future dates on 5day forecast
        let now = new Date();
        let today = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+(now.getDate());
        //marks if todays date already found when searching object
        let todayNotFound = true;
        let futureDaysFound = 0;

        for(let i=0; i<data5Day.list.length;i++){
          //break loop if found 5 dates
          if(futureDaysFound === 5){
            break;
          }
          if(i < 5){
            //check if 5day forecast returns todays date or tomorrows date first
            if(data5Day.list[i].dt_txt.startsWith(today) && todayNotFound){
              week5Days.push(dateDays[now.getDay()])
              next5Days.push(today);
              todayNotFound = false;
            }
            else{
              let next = new Date(now);
              next.setDate(now.getDate()+(i+1));
              let tomorrow = next.getFullYear()+'-'+(next.getMonth()+1)+'-'+(next.getDate());
              week5Days.push(dateDays[next.getDay()])
              next5Days.push(tomorrow);
            }
          }
          //take found day and get weather info from corresponding JSON string
          if(data5Day.list[i].dt_txt.startsWith(next5Days[futureDaysFound])){
            temp5Days.push(data5Day.list[i].main.temp);
            weather5Days.push(data5Day.list[i].weather[0].icon);
            desc5Days.push(data5Day.list[i].weather[0].description);
            futureDaysFound++;
          }
        }
        //set state of component to hold found weather data
        this.setState({
          temperature: dataToday.main.temp,
          humidity: dataToday.main.humidity,
          pressure: dataToday.main.pressure,
          windspeed: dataToday.wind.speed,
          city: dataToday.name,
          country: dataToday.sys.country,
          weather: dataToday.weather[0].icon,
          description: dataToday.weather[0].description,
          day: week5Days,
          dayTemperature: temp5Days,
          dayWeather: weather5Days,
          dayDescription: desc5Days,
          status: ' ',
        });
      }
      else{ //if cannot find city, empty state
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
    else { //if values missing from form, empty state
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

  //render UI in browser
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
                  <div className="shortforecast_container_inner">
                    <ShortForecast
                      temperature = {this.state.temperature}
                      city = {this.state.city}
                      country = {this.state.country}
                      weather = {this.state.weather}
                      description = {this.state.description}
                      humidity = {this.state.humidity}
                      pressure = {this.state.pressure}
                      windspeed = {this.state.windspeed}
                    />
                  </div>
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
