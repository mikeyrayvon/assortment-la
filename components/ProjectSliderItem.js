const ProjectSliderItem = ({ item }) => {
  if (item.image.url) {
    return (
      <picture className='project-slide px-4 flex justify-center items-center'>
        <img className='object-contain' src={item.image.url} alt={item.image.alt ? item.image.alt : item.caption} />
      </picture>
    )
  }
  return null
}

export default ProjectSliderItem
