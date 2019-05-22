import React from 'react';

const Forecast = props => {
  return (
    <React.Fragment>
      <h3>Forecast for next 3 days</h3>

      <div className="row">
        {props.forecastDate.map((forecastDate, index) => (
          <div key={index} className="col-sm-6 col-md-4 border border-light">
            <span className="h3">
              {console.log(forecastDate)}
              {new Date(forecastDate.date_epoch * 1000).getDay() === 0
                ? 'Sunday'
                : null}
              {new Date(forecastDate.date_epoch * 1000).getDay() === 1
                ? 'Monday'
                : null}
              {new Date(forecastDate.date_epoch * 1000).getDay() === 2
                ? 'Tuesday'
                : null}
              {new Date(forecastDate.date_epoch * 1000).getDay() === 3
                ? 'Wednesday'
                : null}
              {new Date(forecastDate.date_epoch * 1000).getDay() === 4
                ? 'Thursday'
                : null}
              {new Date(forecastDate.date_epoch * 1000).getDay() === 5
                ? 'Friday'
                : null}
              {new Date(forecastDate.date_epoch * 1000).getDay() === 6
                ? 'Saturday'
                : null}
            </span>
            <span>
              <img src={forecastDate.day.condition.icon} alt="weather icon" />
              {forecastDate.day.condition.text}
            </span>
            <p>HIGH: {forecastDate.day.maxtemp_c} &deg;C</p>
            <p>LOW: {forecastDate.day.mintemp_c} &deg;C</p>
            <p>Ave day time temperature {forecastDate.day.avgtemp_c} &deg;C</p>
            <p>*UV level: {forecastDate.day.uv} </p>
            <p>Sun rise: {forecastDate.astro.sunrise}</p>
            <p>Sun set: {forecastDate.astro.sunset}</p>
            <small>
              *UV Index Exposure 1-2 Low 3-5 Moderate 6-7 High 8-10 Very high 11
            </small>
            Extreme
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Forecast;
