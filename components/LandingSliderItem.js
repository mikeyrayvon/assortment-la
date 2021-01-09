import ResponsiveImage from './ResponsiveImage'

const LandingSliderItem = ({ doc, setHoveredId }) => {
  if (doc && doc.data) {
    const { main_image } = doc.data
    return (
      <div className='relative' onMouseEnter={() => { setHoveredId(doc.id) }} onMouseLeave={() => { setHoveredId('') }}>
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
