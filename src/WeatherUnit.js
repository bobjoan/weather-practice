import React, { useState } from "react";

export default function WeatherUnit(props) {
  let [units, setUnits] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  if (units === "celsius") {
    return (
      <div className="units">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let Fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="units">
        <span className="temperature">{Math.round(Fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
