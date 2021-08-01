export const API_KEY = '09f837528e217139621d60dffb9a3c9c'
export const BASE_API = 'https://api.openweathermap.org/data/2.5/'

async function getWeather(lat, lon) {
  const response = await fetch(
    `${BASE_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("no funka el fetch");
  }
  const data = await response.json();

  return data;
}
export default getWeather;