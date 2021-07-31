const API_KEY = "d85d20300a58ec852bf4a1be441f1fe7";
const BASE_API = "https://api.openweathermap.org/data/2.5";

async function getWeatherForCities(lat, lon, cnt) {
    const response = await fetch(`${BASE_API}/find?lat=${lat}&lon=${lon}&cnt=6&appid=${API_KEY}`);

    if (!response.ok) {
        throw new Error("no funka el fetch de la funcion getWeatherForCities");
    }

    const data = await response.json();
    return data;
}

export default getWeatherForCities;
