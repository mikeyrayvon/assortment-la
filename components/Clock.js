import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().tz('America/Los_Angeles').format('h:mm'));
    }, 1000);
    setTime(moment().tz('America/Los_Angeles').format('h:mm'));
    return () => clearInterval(interval);
  }, []);

  return (
    <span>{ time } in Los Angeles, CA</span>
  )
}

export default Clock
