function ClimaticDataPerDay({ hourbyWeather, weather }) {
  const tempMin = Math.floor(weather.main.temp_min - 273.15);
  const tempMax = Math.floor(weather.main.temp_max - 273.15);
  const humidity = weather.main.humidity;
  const windSpeed = (weather.wind.speed * 3.6).toFixed(2);

  return (
    <div className="weather-more-info">
      <div className="info left">
        <p>
          máx:
          <b>
            {hourbyWeather[0]
              ? Math.floor(hourbyWeather[1].main.temp_max - 273.15)
              : tempMax}
            °
          </b>
        </p>
        <p>
          viento:
          <b>
            {hourbyWeather[0]
              ? (hourbyWeather[1].wind.speed * 3.6).toFixed(2)
              : windSpeed}
            Km-h
          </b>
        </p>
      </div>
      <div className="info right">
        <p>
          min:
          <b>
            {hourbyWeather[0]
              ? Math.floor(hourbyWeather[1].main.temp_min - 273.15)
              : tempMin}
            °
          </b>
        </p>
        <p>
          humedad:
          <b>{hourbyWeather[0] ? hourbyWeather[1].main.humidity : humidity}%</b>
        </p>
      </div>
    </div>
  );
}

export default ClimaticDataPerDay;
