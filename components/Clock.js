import { useEffect, useState } from 'react'
import moment from 'moment-timezone'

const Clock = ({ city }) => {

  const [time, setTime] = useState('');
  let timezone, city_string

  switch (city) {
    case 'Mexico City':
      timezone = 'America/Mexico_City'
      city_string = 'Mexico City, MX'
      break;
    case 'Paris':
      timezone = 'Europe/Paris'
      city_string = 'Paris, FR'
      break;
    case 'Berlin':
      timezone = 'Europe/Berlin'
      city_string = 'Berlin, DE'
      break;
    case 'London':
      timezone = 'Europe/London'
      city_string = 'London, UK'
      break;
    case 'New York':
      timezone = 'America/New_York'
      city_string = 'New York, NY'
      break;
    default:
      timezone = 'America/Los_Angeles'
      city_string = 'Los Angeles, CA'
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(moment().tz(timezone).format('h:mm A'));
    }, 1000);
    setTime(moment().tz(timezone).format('h:mm A'));
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <span>{`${time} in ${city_string}`}</span>
  )
}

export default Clock
