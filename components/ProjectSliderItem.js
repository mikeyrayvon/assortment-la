import React from 'react'

const ProjectSliderItem = ({ item }) => {
  if (item.image.url) {
    return (
      <div className='project-slide px-4 flex justify-center items-center'>
        <img className='object-contain' src={item.image.url} alt={item.image.alt ? item.image.alt : item.caption} />
      </div>
    )
  }
  return null
}

export default ProjectSliderItem
