import React from "react";
import day from "./day";

function WeatherDay({ weatherForecast, setWeatherPerDay }) {
  // weatherForecast const que almacena la respuesta de la api de la funcion getWeatherForecastFor5Days
  // optenemos datos del clima de 5 dias futuros con lapsos de 3 horas , retorna un array  de 40 elementos , 8 por dia
  // const date = new Date();
  // const currentDay = date.getDay();

  const dia0 = weatherForecast.list.slice(0, 8);
  const dia1 = weatherForecast.list.slice(8, 16);
  const dia2 = weatherForecast.list.slice(16, 24);
  const dia3 = weatherForecast.list.slice(24, 32);
  const dia4 = weatherForecast.list.slice(32, 40);

  const element0 = document.getElementById("element0");
  const element1 = document.getElementById("element1");
  const element2 = document.getElementById("element2");
  const element3 = document.getElementById("element3");
  const element4 = document.getElementById("element4");
  function clearStyle() {
    const todos = document.querySelectorAll(".weather-day");
    todos.forEach((tag) => {
      tag.classList.remove("is-active");
    });
  }
  function printDataByDate0() {
    setWeatherPerDay(dia0);
    clearStyle();
    element0.classList.add("is-active");
  }
  function printDataByDate1() {
    setWeatherPerDay(dia1);
    clearStyle();
    clearStyle();
    element1.classList.add("is-active");
  }
  function printDataByDate2() {
    setWeatherPerDay(dia2);
    clearStyle();
    element2.classList.add("is-active");
  }
  function printDataByDate3() {
    setWeatherPerDay(dia3);
    clearStyle();
    element3.classList.add("is-active");
  }
  function printDataByDate4() {
    setWeatherPerDay(dia4);
    clearStyle();
    element4.classList.add("is-active");
  }
  return (
    <div className="weather-day-container">
      <h2
        className="weather-day is-active"
        id="element0"
        onClick={printDataByDate0}
      >
        {day(0)}
      </h2>
      <h2 className="weather-day" id="element1" onClick={printDataByDate1}>
        {day(1)}
      </h2>
      <h2 className="weather-day" id="element2" onClick={printDataByDate2}>
        {day(2)}
      </h2>
      <h2 className="weather-day" id="element3" onClick={printDataByDate3}>
        {day(3)}
      </h2>
      <h2 className="weather-day" id="element4" onClick={printDataByDate4}>
        {day(4)}
      </h2>
    </div>
  );
}

export default WeatherDay;
