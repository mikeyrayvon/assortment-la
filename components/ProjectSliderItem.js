import { CgArrowsExpandRight } from 'react-icons/cg'
import SliderImage from './SliderImage'

const ProjectSliderItem = ({ item, openGallery }) => {
  if (item.image) {
    const { image } = item
    return (
      <SliderImage
        image={image}
        imgClass='project-slide-image cursor-pointer'
        handleClick={() => { openGallery() }}
        renderIcon={() => (
          <div className='absolute top-4 right-4 text-4xl fill-white'><CgArrowsExpandRight className='filter-shadow' /></div>
        )}
      />
    )
  }
  return null
}

export default ProjectSliderItem
