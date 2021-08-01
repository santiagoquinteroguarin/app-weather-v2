export const API_KEY = '09f837528e217139621d60dffb9a3c9c'
export const BASE_API = 'https://api.openweathermap.org/data/2.5/'

// 13915fd686e12a631f13dd3f2cc37042 - climita-app
// 81083f6e71934e19a506a16cb2114f96
// https://api.openweathermap.org/data/2.5/weather?lat=6.2999502000000005&lon=-75.5625925&appid=09f837528e217139621d60dffb9a3c9c
async function getWeather(lat, lon) {
  console.log(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=10&appid=${API_KEY}`)
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