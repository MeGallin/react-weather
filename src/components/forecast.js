import React from "react";

const Forecast = props => {
  var today = new Date();
  var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  console.log(tomorrow.getDay());
  return (
    <React.Fragment>
      <h3>Forecast for next 3 days</h3>
      {props.forecastDate.map((forecastDate, index) => (
        <span key={index}>
          {forecastDate.date}/{forecastDate.day.avgtemp_c}/
          {forecastDate.day.condition.text}
          <img src={forecastDate.day.condition.icon} alt="weather icon" />
        </span>
      ))}
    </React.Fragment>
  );
};

export default Forecast;
