import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Forecast from './components/forecast';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    city: undefined,
    region: undefined,
    country: undefined,
    temperature: undefined,
    feelsLikeTemp: undefined,
    conditionText: undefined,
    conditionIcon: undefined,
    gust: undefined,
    humidity: undefined,
    lastUpDated: undefined,
    windDirection: undefined,
    windSpeed: undefined,
    forecastDate: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    const data = await api_call.json();
    // console.log(data);

    const api_call_forecast = await fetch(
      `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`
    );
    const forecastData = await api_call_forecast.json();
    console.log(forecastData);

    if (city) {
      this.setState({
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        temperature: data.current.temp_c,
        feelsLikeTemp: data.current.feelslike_c,
        conditionText: data.current.condition.text,
        conditionIcon: data.current.condition.icon,
        gust: data.current.gust_kph,
        humidity: data.current.humidity,
        lastUpDated: data.current.last_updated,
        windDirection: data.current.wind_dir,
        windSpeed: data.current.wind_kph,
        forecastDate: forecastData.forecast.forecastday,
        error: ''
      });
    } else {
      this.setState({
        city: undefined,
        region: undefined,
        country: undefined,
        temperature: undefined,
        feelsLikeTemp: undefined,
        conditionText: undefined,
        conditionIcon: undefined,
        gust: undefined,
        humidity: undefined,
        lastUpDated: undefined,
        windDirection: undefined,
        windSpeed: undefined,
        forecastDate: undefined,
        error: 'Please enter a City and Country'
      });
    }
  };
  render() {
    const {
      temperature,
      feelsLikeTemp,
      conditionText,
      conditionIcon,
      city,
      region,
      country,
      gust,
      humidity,
      lastUpDated,
      windDirection,
      windSpeed,
      forecastDate,
      error
    } = this.state;
    return (
      <div className="App">
        <React.Fragment>
          <Titles />
          <Form getWeather={this.getWeather} disabled={this.state.disabled} />
          {}
          <Weather
            temperature={temperature}
            feelsLikeTemp={feelsLikeTemp}
            conditionText={conditionText}
            conditionIcon={conditionIcon}
            city={city}
            region={region}
            country={country}
            gust={gust}
            humidity={humidity}
            lastUpDated={lastUpDated}
            windDirection={windDirection}
            windSpeed={windSpeed}
            error={error}
          />
          {city ? <Forecast forecastDate={forecastDate} /> : null}

          <div />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
