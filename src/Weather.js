import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "b30b76f38a21608034fc384fba6ot0fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.loader) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            required
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <h1>{weatherInfo.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherInfo.date} />
          </li>
          <li>{weatherInfo.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherInfo.iconUrl} alt="weather icon" />
            <span className="temperature">
              {Math.round(weatherInfo.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherInfo.humidity}%</li>
              <li>Wind: {weatherInfo.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
