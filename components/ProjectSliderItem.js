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
            mobile: 'w=353',
            md: 'w=474',
            xl: 'w=538',
            full: 'w=688'
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
