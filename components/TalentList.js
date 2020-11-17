import { useState } from 'react'
import TalentListItem from './TalentListItem'
import TalentListImage from './TalentListImage'

const TalentList = ({ roster }) => {
  const [filterId, setFilterId] = useState(false)
  const [hoveredTalent, setHoveredTalent] = useState(false)
  
  let servicesList = []

  for (var i = 0; i < roster.length; i++) {
    const talent = roster[i]
    const services = talent.data.services
    for (var j = 0; j < services.length; j++) {
      const service = services[j].service
      if (!servicesList.some(listService => listService.id === service.id)) {
        servicesList.push(service)
      }
    }
  }

  return (
    <div className='container mx-auto'>
      {servicesList.length > 0 &&
        <div className='text-center'>
          <span>Filter by </span>
          {servicesList.map((service) => {
            return (
              <span className='filter-service uppercase' key={service.id}>
                <span className={'cursor-pointer' + (filterId === service.id ? ' underline' : '')} onClick={() => {
                  if (filterId === service.id) {
                    setFilterId(false)
                  } else {
                    setFilterId(service.id)
                  }
                }}>{service.data.title}</span>
                <span>,&nbsp;</span>
              </span>
            )
          })}
          <span className='filter-service uppercase'>
            <span className='cursor-pointer' onClick={() => {
              setFilterId(false)
            }}>All</span>
          </span>
        </div>
      }

      <div className='flex items-center justify-center' style={{
        minHeight: '60vh'
      }}>
        <ul className='relative z-10 text-center'>
          {roster.map(talent => (
            <TalentListItem talent={talent} setHoveredTalent={setHoveredTalent} filterId={filterId} key={talent.id} />
          ))}
        </ul>
      </div>
      <ul className='pointer-events-none'>
        {roster.map(talent => (
          <TalentListImage talent={talent} key={`${talent.id}_image`} hoveredTalent={hoveredTalent} />
        ))}
      </ul>
    </div>
  )
}

export default TalentList
