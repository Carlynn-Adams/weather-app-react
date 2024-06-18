import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
        Coded by
        <a
          href="https://github.com/Carlynn-Adams"
          target="_blank"
          rel="noreferrer"
        >
          Carlynn Adams
        </a>
        , is
        <a
          href="https://github.com/Carlynn-Adams/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        and
        <a
          href="https://main--shecodes-weather-forecast-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
