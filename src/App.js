import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import CurrentDate from "./components/current-date";
import WeatherData from "./components/weather-data";
import WeatherDataCities from "./components/weather-data-ListCities";
import getWeather from "./services/weather";
import appBackgroundImage from "./components/app-background";
import getWeatherForecastFor5Days from "./services/forecast";
import getWeatherForCities from "./services/weather-cities";
import NProgress from "nprogress";
import "./nprogress.css";

import Form from './components/form';
import WeatherCity from './services/weather-city';
import Error from './components/error';

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
  const [weatherCities, setWeatherCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentHour, setCurrentHour] = useState(false);
  const [search, setSavedSearch] = useState({
    city: '',
    country: '',
  });
  const [query, setSavedQuery] = useState(false);
  const [data, setSavedData] = useState({});
  const [error, setSavedError] = useState(false);

  const { city, country } = search;

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
        const weatherCities = await getWeatherForCities(lat, lon);
        setWeatherCities(weatherCities.list);
        // ? -------------- 
        setWeather(weather);
        setWeatherForecast(weatherForecast);
        setLoading(true);
        NProgress.done(true);
        
        const queryAPI = async () => {
            if(query) {
              const appId = 'd85d20300a58ec852bf4a1be441f1fe7';
              const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
              
              const response = await fetch(url);
              const data = await response.json();

              setSavedData(data);
              setSavedQuery(false);
      
              if(data.cod === "404") {
                setSavedError(true);
              } else {
                setSavedError(false);
              }
            }
        }
        queryAPI();
      });
    } else {
      alert("el usuario no dio acceso a su ubicación");
    }
  }, [query, country, city]);

  // ?9.
  let component;
  if(error) {
    component = <Error message="No hay resultados :("/>
  } else {
    component = <WeatherCity data={data}/>
  }

  // ? ----------------------------------------------------------------------

  return (
    <Fragment>
        <AppStyled id="app">
          {loading ? <CurrentDate weather={weather} setHidden={setHidden} /> : ""}
          {loading ? (
            <div>
              <div>
                <Form
                  search={search}
                  setSavedSearch={setSavedSearch}
                  setSavedQuery={setSavedQuery}
                />
              </div>

              <div>
                {component}
              </div>

              <WeatherDataCities
                weatherCities={weatherCities}
              />

              <WeatherData
                weather={weather}
                weatherForecast={weatherForecast}
                hidden={hidden}
              />
            </div>
          ) : (
            ""
          )}
        </AppStyled>
    </Fragment>
    
  );
}

export default App;
