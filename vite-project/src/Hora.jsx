import React, { useState, useEffect } from 'react';
import './app.css'

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Data Atual</h1>
      <p>{currentDate.toLocaleDateString()}</p>
      <p>{currentDate.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateComponent;
