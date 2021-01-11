import ResponsiveImage from './ResponsiveImage'

const GalleryItem = ({ item }) => {
  return (
    <figure>
      <ResponsiveImage
        image={image}
        sizes={{
          mobile: 'w=700',
          sm: 'w=900',
          md: 'w=1200',
          xl: 'w=1500',
          full: 'w=1800'
        }}
        pictureClass='responsive'
        imgClass='project-slide-image'
        handleClick={() => { openGallery() }}
        renderIcon={() => (
          <div className='absolute top-4 right-4 text-4xl fill-white'><CgArrowsExpandRight className='filter-shadow' /></div>
        )}
      />
    </figure>
  )
}

export default GalleryItem
