import React from "react";

const WeatherData = (props) => {
  return (
    <>
      <p>
        s<span>Conditions: </span> {props.conditions}{" "}
      </p>
      <p>
        <span>Timse: </span> {props.time}{" "}
      </p>
    </>
  );
};

export default WeatherData;
