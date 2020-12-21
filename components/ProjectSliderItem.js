import { CgArrowsExpandRight } from 'react-icons/cg'
import ResponsiveImage from './ResponsiveImage'

const ProjectSliderItem = ({ item, openGallery }) => {
  if (item.image) {
    const { image } = item
    return (
      <div className='relative'>
        <ResponsiveImage
          image={image}
          sizes={{
            mobile: 'w=700',
            md: 'w=900',
            xl: 'w=1100',
            full: 'w=1300'
          }}
          imgClass='project-slide-image'
          handleClick={() => { openGallery() }}
        />
        <div className='absolute top-4 right-4 text-4xl fill-white'><CgArrowsExpandRight className='filter-shadow' /></div>
      </div>
    )
  }
  return null
}

export default ProjectSliderItem
