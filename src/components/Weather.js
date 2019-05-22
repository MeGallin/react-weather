import React from 'react';

const Weather = props => {
  return (
    <React.Fragment>
      <div>
        {props.city ? (
          <div>
            <span className="h3">{props.city}</span>
            <sup className="small"> [{props.region + ' ' + props.country}]</sup>
            <div>
              <div>
                <img src={props.conditionIcon} alt="weather icon" />
                {props.conditionText}
              </div>
            </div>
          </div>
        ) : null}
        <div />
        <div>
          {props.city ? (
            <div>
              <p>
                {props.temperature} &deg;C and in the wind it will feel like{' '}
                {props.feelsLikeTemp} &deg;C. Humidity {props.humidity} %.
              </p>
              <p>
                The wind is blowing at {props.windSpeed} Km/h in a{' '}
                {props.windDirection} direction.
              </p>
              <p>Last updated {props.lastUpDated}</p>
            </div>
          ) : null}
        </div>
        {props.error}
      </div>
    </React.Fragment>
  );
};

export default Weather;
