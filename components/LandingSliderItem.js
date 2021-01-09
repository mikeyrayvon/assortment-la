import ResponsiveImage from './ResponsiveImage'

const LandingSliderItem = ({ project }) => {
  if (project && project.data) {
    const { main_image } = project.data
    return (
      <div className='relative'>
        <ResponsiveImage
          image={main_image}
          sizes={{
            mobile: 'w=700',
            md: 'w=900',
            xl: 'w=1100',
            full: 'w=1300'
          }}
          imgClass='project-slide-image'
        />
      </div>
    )
  }
  return null
}

export default LandingSliderItem
