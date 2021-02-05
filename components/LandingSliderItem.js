import { default as NextLink } from 'next/link'

import SliderImage from './SliderImage'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const LandingSliderItem = ({ doc, setHoveredId }) => {
  if (doc && doc.data) {
    const { main_image } = doc.data
    return (
      <div className='relative'>
        <NextLink
          as={linkResolver(doc)}
          href={hrefResolver(doc)}
        >
          <a onMouseEnter={() => { setHoveredId(doc.id) }} onMouseLeave={() => { setHoveredId('') }}>
            <SliderImage
              image={main_image}
              imgClass='project-slide-image'
            />
          </a>
        </NextLink>
      </div>
    )
  }
  return null
}

export default LandingSliderItem
