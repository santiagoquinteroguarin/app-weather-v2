const API_KEY = "0a25fa740f44f11f8536855fb938d202";
const BASE_API = "https://api.openweathermap.org/data/2.5";

async function getWeatherForecastFor16Days(lat, lon, cnt) {
  const response = await fetch(
    `${BASE_API}/forecast/daily?lat=${lat}&lon=${lon}&cnt=10&appid=${API_KEY}`
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("fetch fallido de la funcion getWeatherForecastFor16Days");
  }
  const data = await response.json();
  return data;
}

export default getWeatherForecastFor16Days;
