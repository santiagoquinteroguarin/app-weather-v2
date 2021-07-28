import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CurrentDate from "./components/current-date";
import WeatherData from "./components/weather-data";
import getWeather from "./services/weather";
import appBackgroundImage from "./components/app-background";
import getWeatherForecastFor5Days from "./services/forecast";
import NProgress from "nprogress";
import "./nprogress.css";

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${process.env.PUBLIC_URL}/images/clear-day.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

function App() {
  const [weather, setWeather] = useState("");
  const [hidden, setHidden] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentHour, setCurrentHour] = useState(false);

  if (loading) {
    appBackgroundImage(weather, currentHour, setCurrentHour);
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        NProgress.start();
        const weather = await getWeather(lat, lon);
        const weatherForecast = await getWeatherForecastFor5Days(lat, lon);
        setWeather(weather);
        setWeatherForecast(weatherForecast);
        setLoading(true);
        NProgress.done(true);
      });
    } else {
      alert("el usuario no dio acceso a su ubicación");
    }
  }, []);
  return (
    <AppStyled id="app">
      {loading ? <CurrentDate weather={weather} setHidden={setHidden} /> : ""}
      {loading ? (
        <WeatherData
          weather={weather}
          weatherForecast={weatherForecast}
          hidden={hidden}
        />
      ) : (
        ""
      )}
    </AppStyled>
  );
}

export default App;
