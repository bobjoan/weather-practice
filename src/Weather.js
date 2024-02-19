import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city" required />
        <input type="submit" value="Search" />
      </form>
      <h1>Port Harcourt</h1>
      <ul>
        <li>Monday 16:00</li>
        <li>Scattered thunderstorms</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
            alt="weather icon"
          />
          <span className="temperature">34</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
