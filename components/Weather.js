import React, { useEffect, useState } from 'react'
import {
  WiDaySunny,
  WiNightClear,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiRain,
  WiLightning,
  WiSnowflakeCold,
  WiWindy
} from 'react-icons/wi'

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
    })
    .catch(err => {
      console.log(err.message);
    });

  }, []);

  const weatherIcon = (code) => {
    if (code === '01d') {
      return <WiDaySunny />
    } else if (code === '01n') {
      return <WiNightClear />
    } else if (code === '02d' || code === '02n') {
      return <WiCloudy />
    } else if (code === '03d' || code === '03n') {
      return <WiCloud />
    } else if (code === '04d' || code === '04n') {
      return <WiCloudy />
    } else if (code === '09d' || code === '09n') {
      return <WiShowers />
    } else if (code === '10d' || code === '10n') {
      return <WiRain />
    } else if (code === '11d' || code === '11n') {
      return <WiLightning />
    } else if (code === '13d' || code === '13n') {
      return <WiSnowflakeCold />
    } else if (code === '50d' || code === '50n') {
      return <WiWindy />
    } else {
      return <WiCloud />
    }
  }

  if (forecast && forecast.weather && forecast.wind) {
    return (
      <div className='text-right'>
        <div>
          <span className='capitalize'>{ forecast.weather[0].description }</span>
          <span className='ml-2 inline-block stroke-current'>{ weatherIcon(forecast.weather[0].icon) }</span>
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
