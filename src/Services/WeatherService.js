const API_KEY = "22aedefd909c128ce60f3819ff533bac";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);

  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    // .then((data) => data);
};

//export default getWeatherData;
const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = await getWeatherData

}
