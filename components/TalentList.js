import React, { useState } from 'react'
import TalentListItem from './TalentListItem'
import TalentListImage from './TalentListImage'

const TalentList = ({ roster }) => {
  const [hoveredTalent, setHoveredTalent] = useState(false)

  return (
    <div className='container mx-auto'>
      <ul>
        {roster.map(talent => (
          <TalentListItem talent={talent} setHoveredTalent={setHoveredTalent} key={talent.id} />
        ))}
      </ul>
      <ul className='pointer-events-none'>
        {roster.map(talent => (
          <TalentListImage talent={talent} key={`${talent.id}_image`} hoveredTalent={hoveredTalent} />
        ))}
      </ul>
    </div>
  )
}

export default TalentList
