import { useState, useEffect } from 'react'
import Container from './Container'
import Clock from './Clock'
import Weather from './Weather'

const cities = [
  'Mexico City',
  'Paris',
  'Berlin',
  'London',
  'New York',
  'Los Angeles'
]

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const CityStatus = ({ settings }) => {
  const [currentCity, setCurrentCity] = useState('Los Angeles')

  useEffect(() => {
    if (settings && settings.data && settings.data.current_city && (settings.data.random_city === false)) {
      setCurrentCity(settings.data.current_city)
    } else {
      let cityInterval = setInterval(() => {
        setCurrentCity(cities[randomInteger(0,5)])
      }, 10000)
      setCurrentCity(cities[randomInteger(0,5)])
      return () => clearInterval(cityInterval)
    }
  }, [settings])

  return (
    <div className='city-status absolute w-full top-0 left-0 pt-4 md:pt-8 pointer-events-none text-xs sm:text-sm md:text-base z-10'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-1/5 sm:w-auto'>
            <Clock city={currentCity} />
          </div>
          <div className='w-1/5 sm:w-auto'>
            <Weather city={currentCity} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CityStatus
