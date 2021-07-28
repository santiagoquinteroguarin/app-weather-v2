function appBackgroundImage(weather, currentHour, setCurrentHour) {
  const app = document.getElementById("app");
  const currentWeather = weather.weather[0].main.toLowerCase();

  setInterval(() => {
    const date = new Date(); // retorna la fecha actual
    const hours = date.getHours(); // retorna la hora actual
    if (hours >= 19) {
      return setCurrentHour(true);
    }
  }, 100);

  if (currentWeather === "rain") {
    if (currentHour) {
      return (app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/drizzle-night.jpg)`);
    }
    app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/drizzle.jpg)`;
  }
  if (currentWeather === "clear") {
    if (currentHour) {
      return (app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/clear-night.jpg)`);
    }
    app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/clear.jpg)`;
  }
  if (currentWeather === "wind") {
    if (currentHour) {
      return (app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/wind-night.jpg)`);
    }
    app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/wind.jpg)`;
  }
  if (currentWeather === "clouds") {
    if (currentHour) {
      return (app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/clouds-night.jpg)`);
    }
    app.style.backgroundImage = `url(${process.env.PUBLIC_URL}/images/clouds.jpg)`;
  }
}

export default appBackgroundImage;
