import React from "react";
import { UilTear, UilWind, UilSun } from "@iconscout/react-unicons";

const WeatherDes = () => {
  return (
    <div>
      <div>
        <p>Cloudy or whatever</p>
      </div>
      <div>
        {/* <img src="" alt="" /> */}
        <p>34°</p>
        <div>
          <div>
            <UilTear />
            Humidity :<span>65%</span>
          </div>
          <div>
            <UilWind />
            Wind :<span>11 km/hr</span>
          </div>
        </div>
      </div>
      <div>
        <UilSun />
        <p>
          High : <span>45°</span>
        </p>
        <p>|</p>

        <UilSun />
        <p>
          Low : <span>40°</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDes;
