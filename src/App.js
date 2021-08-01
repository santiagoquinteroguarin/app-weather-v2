import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import CurrentDate from "./components/current-date";
import WeatherData from "./components/weather-data";
import WeatherDataCities from "./components/weather-data-ListCities";
import getWeather from "./services/weather";
import appBackgroundImage from "./components/app-background";
import getWeatherForecastFor5Days from "./services/forecast";
import getWeatherForCities from "./services/weather-cities";
import getWeatherCityCountry from "./services/forecast-city-country";
import NProgress from "nprogress";
import "./nprogress.css";
import Form from './components/form';
import WeatherCity from './services/weather-city';
import Error from './components/error';

// ? ---------------------------------------------------
// ? Tag Manager
import TagManager from 'react-gtm-module';

// ? Tag Manager
const tagManagerArgs = {
  gtmId: 'GTM-TMW494D',
}

TagManager.initialize(tagManagerArgs)

// ? ---------------------------------------------------

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
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        setLat(pos.coords.latitude);
        setLon(pos.coords.longitude);
        NProgress.start();

        const weather = await getWeather(lat, lon);
        setWeather(weather);

        const weatherForecast = await getWeatherForecastFor5Days(lat, lon);
        setWeatherForecast(weatherForecast);

        const weatherCities = await getWeatherForCities(lat, lon);
        setWeatherCities(weatherCities.list);
        
        setLoading(true);
        NProgress.done(true);
      });
    } else {
      alert("el usuario no dio acceso a su ubicación");
    }
    // ! quitar ultimo warning
    // eslint-disable-next-line
  },[lat, lon]);

  useEffect(() => {
    const queryAPI = async () => {

      if(query) {
        const data = await getWeatherCityCountry(city, country);
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
    // ! quitar ultimo warning
    // eslint-disable-next-line
  }, [query]);

  let component;
  if(error) {
    component = <Error message="No hay resultados :("/>
  } else {
    component = <WeatherCity data={data}/>
  }
  
  window.dataLayer.push({
    'event': 'Temperatura_Actual',
    'ciudad': weather.name,
    'temperatura': weather,
  });

  window.dataLayer.push({
    'event': 'busqueda_ciudad',
    'ciudad': city,
    'temperatura': data,
  });

  return (
    <Fragment>
        <AppStyled id="app">
          {loading ? <CurrentDate weather={weather} setHidden={setHidden} /> : ""}

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

          {loading ? (
            <Fragment>
              <WeatherDataCities
                weatherCities={weatherCities}
              />

              <WeatherData
                weather={weather}
                weatherForecast={weatherForecast}
                hidden={hidden}
              />
            </Fragment>
          ) : (
            ""
          )}
        </AppStyled>
    </Fragment>
    
  );
}

export default App;
