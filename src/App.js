import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Port Harcourt" />
        <footer className="footer-link">
          This project was coded by{" "}
          <a href="https://github.com/bobjoan" target="_blank" rel="noreferrer">
            Joan Bob
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/bobjoan/weather-practice"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
