import React from 'react'

const TalentListImage = ({ talent, hoveredTalent }) => {
  if (talent.data.main_image) {
    return (
      <li className={`absolute inset-0 flex justify-center items-center`}>
        <div className='w-1/2'><img className={hoveredTalent !== talent.id ? 'invisible' : ''} src={talent.data.main_image.url} /></div>
      </li>
    )
  }
  return null
}

export default TalentListImage
