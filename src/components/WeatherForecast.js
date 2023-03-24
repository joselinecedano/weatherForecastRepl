import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherData from "./WeatherData.js";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <WeatherIcon img={props.img} />
      <WeatherData />
    </div>
  );
};

export default WeatherForecast;
