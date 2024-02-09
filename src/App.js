import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import Location from "./Components/Location";
import WeatherDes from "./Components/WeatherDes";
import Forecast from "./Components/Forecast";
import getWeatherData from "./Services/WeatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData('weather');
    console.log(data);

  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <TopButtons />
      <Inputs />
      <Location />
      <WeatherDes />
      <Forecast />
    </div>
  );
}

export default App;
