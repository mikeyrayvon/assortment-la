import Container from './Container'
import Clock from './Clock'
import Weather from './Weather'

const CityStatus = ({ settings }) => {
  if (settings && settings.data) {
    return (
      <div className='city-status absolute w-full top-0 left-0 pt-4 md:pt-8 pointer-events-none text-xs sm:text-sm md:text-base z-10'>
        <Container>
          <div className='flex justify-between'>
            <div className='w-1/5 sm:w-auto'>
              {settings && settings.data &&
                <Clock city={settings.data.current_city} />
              }
            </div>
            <div className='w-1/5 sm:w-auto'>
              {settings && settings.data &&
                <Weather city={settings.data.current_city} />
              }
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return null
}

export default CityStatus
