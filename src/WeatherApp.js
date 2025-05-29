import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from './WeatherContext';

const API_KEY = '6840ef6c41f9b2f78e017fb9ee622550';

const WeatherApp = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);
  const [city, setCity] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weatherData && weatherData.main && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;