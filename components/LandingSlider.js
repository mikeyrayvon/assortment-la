import { useState } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Mousewheel])

import LandingSliderItem from './LandingSliderItem'
import LandingSliderTitles from './LandingSliderTitles'
import Container from './Container'

const LandingSlider = ({ docs }) => {
  const [hoveredId, setHoveredId] = useState('')

  const params = {
    spaceBetween: 36,
    slidesPerView: 'auto',
    centeredSlides: false,
    loop: false,
    mousewheel: {
      forceToAxis: true,
      preventSwipeThresholdDelta: 120,
      preventSwipeThresholdTime: 3000,
      invert: false
    },
    slideToClickedSlide: true,
    freeMode: true,
    preloadImages: true,
    updateOnImagesReady: true
  }

  if (docs.length > 0) {
    console.log(docs)
    return (
      <div className='relative'>
        <div className='project-slider'>
          <Container>
            <Swiper {...params}>
              {docs.map((doc, index) => (
                <SwiperSlide key={`landing_slider_${doc.id}`}>
                  <LandingSliderItem doc={doc} setHoveredId={setHoveredId} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
        <LandingSliderTitles docs={docs} hoveredId={hoveredId} />
      </div>
    )
  }
  return null
}

export default LandingSlider
