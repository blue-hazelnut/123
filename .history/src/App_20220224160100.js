import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='main-container'>
      <input 
        type="text",
        className="search"
        placeholde="search ..."
        value={}
        onChange={}
      />

    </div>
  );
};

export default App;
