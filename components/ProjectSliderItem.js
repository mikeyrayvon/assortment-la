import { CgArrowsExpandRight } from 'react-icons/cg'
import ResponsiveImage from './ResponsiveImage'

const ProjectSliderItem = ({ item, openGallery }) => {
  if (item.image) {
    const { image } = item
    return (
      <ResponsiveImage
        image={image}
        sizes={{
          mobile: 'w=700',
          md: 'w=900',
          xl: 'w=1100',
          full: 'w=1300'
        }}
        pictureClass='responsive'
        imgClass='project-slide-image'
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
