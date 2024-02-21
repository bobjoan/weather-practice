import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherUpdate from "./WeatherUpdate";

export default function Weather(props) {
  let [weatherInfo, setWeatherInfo] = useState({ loader: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      loader: true,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}10d@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
                  type="search"
                  placeholder="Enter a city"
                  required
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" />
              </div>
            </div>
          </form>

          <WeatherUpdate info={weatherInfo} />
        </div>
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
