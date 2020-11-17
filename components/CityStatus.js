import Container from 'components/Container'
import Clock from 'components/Clock'
import Weather from 'components/Weather'

const CityStatus = ({ settings }) => {
  if (settings && settings.data) {
    return (
      <div className='fixed w-full top-0 left-0 pt-8 pointer-events-none'>
        <Container>
          <div className='flex justify-between'>
            <div>
              {settings && settings.data &&
                <Clock city={settings.data.current_city} />
              }
            </div>
            <div>
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
