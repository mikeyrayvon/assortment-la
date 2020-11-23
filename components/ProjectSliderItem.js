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
        pictureClass='mb-20'
        imgClass='project-slide-image'
      />
    )
  }
  return null
}

export default ProjectSliderItem
