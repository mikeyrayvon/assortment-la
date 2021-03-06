import React from 'react'

import ResponsiveImage from './ResponsiveImage'

const TalentListImage = ({ talent, hoveredTalent }) => {
  if (talent.data.main_image) {
    return (
      <li>
        <ResponsiveImage
          image={talent.data.main_image}
          sizes={{
            mobile: 'w=700',
            md: 'w=900',
            xl: 'w=1100',
            full: 'w=1300'
          }}
          pictureClass='absolute inset-0 flex justify-center items-center'
          imgClass={'w-1/2 h-3/4 object-contain' + (hoveredTalent !== talent.id ? ' invisible' : '')}
        />
      </li>
    )
  }
  return null
}

export default TalentListImage
