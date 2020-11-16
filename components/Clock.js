import { useEffect, useState } from 'react'
import moment from 'moment-timezone'

const Clock = ({ city }) => {

  const [time, setTime] = useState('');

  let timezone = 'America/Los_Angeles'
  let city_string = 'Los Angeles, CA'

  if (city === 'Mexico City') {
    timezone = 'America/Mexico_City'
    city_string = 'Mexico City, MX'
  }

  if (city === 'Paris') {
    timezone = 'Europe/Paris'
    city_string = 'Paris, FR'
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz(timezone).format('h:mm A'));
    }, 1000);
    setTime(moment().tz(timezone).format('h:mm A'));
    return () => clearInterval(interval);
  }, []);

  return (
    <span>{`${time} in ${city_string}`}</span>
  )
}

export default Clock
