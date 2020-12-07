import ResponsiveImage from './ResponsiveImage'

const ProjectSliderItem = ({ item, openGallery }) => {
  if (item.image) {
    const { image } = item
    return (
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
    )
  }
  return null
}

export default ProjectSliderItem
