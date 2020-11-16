import React from 'react'

const TalentListImage = ({ talent, hoveredTalent }) => {
  if (talent.data.main_image) {
    return (
      <li className={`absolute inset-0 flex justify-center items-center`}>
        <img className={'w-1/2 h-3/4 object-contain' + (hoveredTalent !== talent.id ? ' invisible' : '')} src={talent.data.main_image.url} />
      </li>
    )
  }
  return null
}

export default TalentListImage
