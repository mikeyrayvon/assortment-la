import React from 'react'

const ProjectSliderItem = ({ item }) => {
  if (item.image.url) {
    return (
      <div>
        <img src={item.image.url} alt={item.image.alt ? item.image.alt : item.caption} />
      </div>
    )
  }
  return null
}

export default ProjectSliderItem
