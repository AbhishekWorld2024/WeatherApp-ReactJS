import React from 'react';
import { WeatherProvider } from './WeatherContext';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
}

export default App;