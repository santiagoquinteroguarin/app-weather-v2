import WeatherByHour from "./weatherbyhour";

function WeatherDataPerDay({
  weatherPerDay,
  setClassVar,
  setHourbyWeather,
  classVar,
}) {
  return (
    <div className="weather-temperature">
      {weatherPerDay.map((weather) => {
        const classActive = classVar === weather.dt_txt ? "is-active" : "";
        return (
          <WeatherByHour
            weather={weather}
            key={weather.dt_txt}
            setClassVar={setClassVar}
            classActive={classActive}
            setHourbyWeather={setHourbyWeather}
          />
        );
      })}
    </div>
  );
}

export default WeatherDataPerDay;
