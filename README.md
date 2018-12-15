# weatherCheck

  Single-page web application built using React and Bootstrap. Gathers weather information from OpenWeatherMaps and displays in browser.

## How to Use

>Clone/Download repository
>Navigate to directory in console
>npm install
>npm start weatherchecker

## Description

The web application requires a browser to user properly.

API Calls are used to take data from OpenWeatherMaps as JSON strings. When taken by the web application, strings are converted to objects so that they can be accessed for their weather data.

The application allows users to specify a city by name and country code (ex/Toronto, CA for Toronto, Canada). After specifying a city, the API call is performed and string received. The string is converted to an object and weather data taken to be displayed through teh web application.

The web application features a simple UI. Current forecast is displayed with numerous weather details, alongside with the 5 day forecast.

## API Calls

For the current weather (at this moment), the WEATHER api call is used from OWM. The call returns a JSON object containing meterological data collected in city specified.

http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},${country}&APPID=${API_KEY}

For the 5-day forecast, the FORECAST api call is used. The call returns a JSON object containing weather data like the above api call, but further carries a list array containing data for the next 5 days with observations taken every 3 hours.
    
http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city},${country}&APPID=${API_KEY}

Additionally, images used in the project are taken from OWM's website.
    
