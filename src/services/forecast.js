const API_KEY = "09f837528e217139621d60dffb9a3c9c";
const BASE_API = "https://api.openweathermap.org/data/2.5";

async function getWeatherForecastFor5Days(lat, lon) {
  const response = await fetch(
    `${BASE_API}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("fetch fallido de la funcion getWeatherForecastFor5Days");
  }
  const data = await response.json();
  return data;
}
export default getWeatherForecastFor5Days;
