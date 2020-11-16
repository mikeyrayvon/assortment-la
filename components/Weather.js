import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&units=imperial&appid=3c886412f00a85f921c56833793af3b9')
    .then(res => res.json())
    .then(res => {
      setForecast(res);
      console.log(res);
    })
    .catch(err => {
      console.log(err.message);
    });

  }, []);

  if (forecast && forecast.weather && forecast.wind) {
    return (
      <div>
        <div>
          <span className='capitalize'>{ forecast.weather[0].description }</span>
        </div>
        <div>
          <span>Wind: { forecast.wind.speed } mph</span>
        </div>
      </div>
    )
  }
  return null
}

export default Weather
