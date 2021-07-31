export const API_KEY = 'd85d20300a58ec852bf4a1be441f1fe7'
export const BASE_API = 'https://api.openweathermap.org/data/2.5/'

async function getWeather(lat, lon) {
  const response = await fetch(
    `${BASE_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}` //datos meteorologicos actuales segun la ubicacion
  );

  if (!response.ok) {
    throw new Error("no funka el fetch");
  }
  const data = await response.json();

  return data;
}
export default getWeather;