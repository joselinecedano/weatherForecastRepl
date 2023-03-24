import React from "react";
import "./styles.css";
import weatherArr from "./weatherData.js";
import WeatherForecast from "./components/WeatherForecast.js";

console.log(weatherArr);
console.log(WeatherForecast);

export default function App() {
  const forecasts = weatherArr.map((Element, index) => {
    return (
      <WeatherForecast
        img={Element.img}
        conditions={Element.conditions}
        time={Element.time}
        key={index}
      />
    );
  });
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{forecasts}</section>
    </div>
  );
}
