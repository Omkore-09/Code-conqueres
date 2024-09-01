import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

function WeatherApp() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  const handleWeatherCheck = async () => {
    try {
      const apiKey = 'd314bee87462245ebc57dd90970223e0'; 
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`
      );

      const weatherData = weatherResponse.data.list;

      
      const isBadWeather = (weather) => {
        const badConditions = ['Thunderstorm', 'Rain', 'Snow'];
        return weather.some((w) => badConditions.includes(w.main));
      };

     
      let hasBadWeather = false;
      weatherData.forEach((forecast) => {
        const forecastDate = new Date(forecast.dt_txt);
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (forecastDate >= start && forecastDate <= end) {
          if (isBadWeather(forecast.weather)) {
            hasBadWeather = true;
          }
        }
      });

    
      if (hasBadWeather) {
        toast.error('You are not supposed to go that day due to bad weather conditions!', {
          onClose: () => {
            setTimeout(() => {
              window.location.href = 'http://localhost:5173/partition?'; 
            }, 7000);
          },
        });
      } else {
        toast.success('You are good to go!', {
          onClose: () => {
            setTimeout(() => {
              window.location.href = 'http://localhost:5173/partition?'; 
            }, 2000);
          },
        });
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      toast.error('Failed to fetch weather data. Please check your input and try again.');
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-[3.7rem] font-bold mb-4 text-center justify-center mt-10 ">Check weather for the planning <br /> your seamless Trips</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-3 rounded mb-2 w-[400px] border-cyan-400"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-3 rounded mb-2 w-[400px] border-cyan-400"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-3 rounded mb-2 w-[400px] border-cyan-400"
      />
      <button
        onClick={handleWeatherCheck}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-10"
      >
        Check Weather
      </button>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
}

export default WeatherApp;
