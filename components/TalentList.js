import React, { useState } from 'react'
import TalentListItem from './TalentListItem'
import TalentListImage from './TalentListImage'

const TalentList = ({ roster }) => {
  const [hoveredTalent, setHoveredTalent] = useState(false)

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center' style={{
        minHeight: '60vh'
      }}>
        <ul className='relative z-10 text-center'>
          {roster.map(talent => (
            <TalentListItem talent={talent} setHoveredTalent={setHoveredTalent} key={talent.id} />
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
