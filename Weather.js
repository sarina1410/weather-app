import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const API_KEY = 'cae4928cb54a915708776cca76f8d95d'; // Replace 'your_api_key' with your actual API key

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
        setError('Error fetching weather data. Please try again.');
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city, API_KEY]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const formatTemperature = (temp) => {
    return (temp / 10).toFixed(1);
  };

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather App</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
        />
      </form>
      {error && <div className="error-message">{error}</div>}
      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}</h3>
          <p>Temperature: {formatTemperature(weatherData.main.temp)}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {/* Add more weather data as needed */}
        </div>
      )}
    </div>
  );
};

export default Weather;
