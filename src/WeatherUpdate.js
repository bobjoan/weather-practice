import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function WeatherUpdate(props) {
  return (
    <div className="update">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li>{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.info.icon} alt="weather icon" />
            </div>
            <div>
              <WeatherUnit celsius={props.info.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
