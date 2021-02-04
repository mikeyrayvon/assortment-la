import { CgArrowsExpandRight } from 'react-icons/cg'
import ResponsiveImage from './ResponsiveImage'

const ProjectSliderItem = ({ item, openGallery }) => {
  if (item.image) {
    const { image } = item
    const imageUrl = new URL(image.url)
    const imagePath = imageUrl.origin + imageUrl.pathname + '?auto=compress,format&'
    return (
      <div onClick={() => { openGallery() }}>
        <img className={'project-slide-image cursor-pointer'} src={imagePath + 'w=1800'} alt={image.alt} />
        <div className='absolute top-4 right-4 text-4xl fill-white'><CgArrowsExpandRight className='filter-shadow' /></div>
      </div>
    )
    /*return (
      <ResponsiveImage
        image={image}
        sizes={{
          mobile: 'w=700',
          sm: 'w=900',
          md: 'w=1200',
          xl: 'w=1500',
          full: 'w=1800'
        }}
        imgClass='project-slide-image cursor-pointer'
        handleClick={() => { openGallery() }}
        renderIcon={() => (
          <div className='absolute top-4 right-4 text-4xl fill-white'><CgArrowsExpandRight className='filter-shadow' /></div>
        )}
      />
    )*/
  }
  return null
}

export default ProjectSliderItem
