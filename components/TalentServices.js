const TalentServices = ({ services, talentId }) => {
  if (services[0].service.data) {
    return (
      <span className='superscript'>
        ({services.map(({service: service}) => {
          if (service.data) {
            return (
              <span className='talent-service' key={`talent_${talentId}_service_${service.id}`}>
                <span>{service.data.title}</span>
                <span className='comma'>,&nbsp;</span>
              </span>
            )
          }
          return null
        })})
      </span>
    )
  }

  return null
}

export default TalentServices
