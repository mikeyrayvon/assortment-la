const TalentServices = ({ services, talentId }) => {
  if (services.length > 0) {
    return (
      <span className='superscript'>
        ({services.map(({service: service}) => {
          return (
            <span className='talent-service' key={`talent_${talentId}_service_${service.id}`}>
              <span>{service.data.title}</span>
              <span className='comma'>,&nbsp;</span>
            </span>
          )
        })})
      </span>
    )
  }

  return null
}

export default TalentServices
