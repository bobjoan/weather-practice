import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherUpdate from "./WeatherUpdate";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherInfo, setWeatherInfo] = useState({ loader: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherInfo({
      loader: true,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}10d@2x.png`,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.loader) {
    return (
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="search"
                  type="search"
                  placeholder="Enter a city"
                  required
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="btn btn-dark btn-lg"
                  value="Search"
                />
              </div>
            </div>
          </form>

          <WeatherUpdate info={weatherInfo} />
          <WeatherForecast coordinates={weatherInfo.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
