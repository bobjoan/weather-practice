import React from "react";
import FormattedDate from "./FormattedDate";

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
      <div className="row">
        <div className="col-6">
          <img src={props.info.iconUrl} alt="weather icon" />
          <span className="temperature">
            {Math.round(props.info.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul className="properties">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
