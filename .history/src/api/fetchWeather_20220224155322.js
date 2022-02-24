import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API KEY = '6b9cd47bbaf0f902bab2501ea50b2462';

const fetchWeather = async (query) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,

    }
  });
} 