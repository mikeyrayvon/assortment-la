import React, { useEffect, useState } from 'react'

const Weather = ({ city }) => {

  const [forecast, setForecast] = useState({});

  let city_id

  switch (city) {
    case 'Mexico City':
      city_id = '3530597'
      break;
    case 'Paris':
      city_id = '2988507'
      break;
    case 'Berlin':
      city_id = '2950159'
      break;
    case 'London':
      city_id = '2643743'
      break;
    case 'New York':
      city_id = '5128581'
      break;
    default:
      city_id = '5368361'
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&units=imperial&appid=3c886412f00a85f921c56833793af3b9`)
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
      <div className='text-right'>
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
