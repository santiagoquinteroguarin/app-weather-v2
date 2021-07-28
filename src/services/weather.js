const API_KEY = "091ec36883705339db6f4e5fbef580dc";
const BASE_API = "https://api.openweathermap.org/data/2.5";

async function getWeather(lat, lon) {
  const response = await fetch(
    `${BASE_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}` //datos meteorologicos actuales segun la ubicacion
  );
  if (!response.ok) {
    throw new Error("no jalo el fetch");
  }
  const data = await response.json();

  return data;
}
export default getWeather;