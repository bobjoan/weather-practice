import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loader, setLoader] = useState({ loader: false });
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoader(true);
  }

  if (loader) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "b30b76f38a21608034fc384fba6ot0fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
