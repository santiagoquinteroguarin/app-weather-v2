import React, { useState } from "react";
import styled from "styled-components";

import WeatherDay from "./weather-day";
import ClimaticDataPerDay from "./climatic-data";
import WeatherDataPerDay from "./weather-data-per-day";

const WeatherDataStyled = styled.div`
  position: absolute;
  bottom: -290px;
  height: 360px;
  width: 100%;
  background: var(--bg);
  color: var(--white);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 1.75rem 0 1rem;
  box-sizing: border-box;
  .component {
    bottom: 0;
  }
  * {
    margin: 0;
  }

  .bar {
    width: 4rem;
    height: 6px;
    background: var(--white);
    border-radius: 0.25rem;
    position: absolute;
    right: calc(50% - 2rem);
    top: 0.5rem;
    cursor: pointer;
  }

  .weather-temperature {
    display: flex;
    gap: 1rem;
    overflow: auto;
    scroll-snap-type: x mandatory;
    padding: 0 1rem;
    margin: 2rem 0 1rem;
    box-sizing: border-box;
  }
  .weather-data {
    border: 3px solid transparent;
    scroll-snap-align: center;
    background: var(--black);
    padding: 1rem 12px;
    border-radius: 60px;
    width: 65px;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font: var(--body2-regular);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-sizing: border-box;
    height: 130px;
  }
  .weather-data.is-active {
    border: 3px solid var(--primary);
  }
  .weather-day-container {
    display: flex;
    gap: 1.5rem;
    padding: 0 1rem;
    justify-content: space-between;
  }
  .weather-day {
    font: var(--body1-bold);
    padding-bottom: 0.5rem;
    text-transform: capitalize;
    cursor: pointer;
    border-bottom: 4px solid transparent;
  }
  .weather-day.is-active {
    color: var(--primary);
    border-bottom: 4px solid var(--primary);
  }
  .weather-more-info {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .weather-more-info div p {
    color: var(--white);
    text-transform: capitalize;
    font: var(--body1-regular);
  }
  .weather-more-info div p b {
    color: var(--white);
    font: var(--body1-bold);
    text-transform: none;
  }
  .am-pm {
    text-align: center;
    text-transform: none;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .info b {
    padding-left: 5px;
  }
  @media (max-width: 500px) {
    .weather-day-container {
      justify-content: space-between;
      gap: 0;
    }
    .weather-day {
      font-size: 14px;
    }
  }
`;

function WeatherData({ weather, weatherForecast, hidden }) {
  const [hourbyWeather, setHourbyWeather] = useState([false, ""]);
  const [classVar, setClassVar] = useState("2021-07-21 18:00:00");
  const dia0 = weatherForecast.list.slice(0, 8);
  const [weatherPerDay, setWeatherPerDay] = useState(dia0);

  const [vari, setVari] = useState(1);

  function handleClickComponent() {
    const weather = document.getElementById("Weather");
    console.log(hidden);
    if (vari === 1) {
      setVari("");
      weather.style.bottom = 0;
      hidden.style.bottom = `400px`;
    } else {
      setVari(1);
      hidden.style.bottom = `100px`;
      weather.style.bottom = `-290px`;
    }
  }

  return (
    <WeatherDataStyled id="Weather">
      <p className="bar" onClick={handleClickComponent}></p>
      <WeatherDay
        weatherForecast={weatherForecast}
        setWeatherPerDay={setWeatherPerDay}
      />
      <WeatherDataPerDay
        setHourbyWeather={setHourbyWeather}
        weatherPerDay={weatherPerDay}
        setClassVar={setClassVar}
        classVar={classVar}
      />
      <ClimaticDataPerDay hourbyWeather={hourbyWeather} weather={weather} />
    </WeatherDataStyled>
  );
}

export default WeatherData;
