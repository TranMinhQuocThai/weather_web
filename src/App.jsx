import { useState } from 'react';
import './App.css';
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';
import WeatherChart from './components/WeatherChart';

Chart.register(CategoryScale);

function App() {
  return (
    <section>
      <Header />
      <CurrentWeather />
      <WeatherForecast />
      <WeatherChart />
    </section>
  );
}

export default App;
