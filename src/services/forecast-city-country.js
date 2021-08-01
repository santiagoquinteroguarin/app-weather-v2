export const API_KEY = '09f837528e217139621d60dffb9a3c9c'
export const BASE_API = 'https://api.openweathermap.org/data/2.5/'

async function getWeatherCityCountry(city, country) {
  const response = await fetch(
    `${BASE_API}/weather?q=${city},${country}&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("no funka el fetch");
  }
  const data = await response.json();
  return data;
}
export default getWeatherCityCountry;