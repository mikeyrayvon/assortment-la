import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Mousewheel])

import LandingSliderItem from './LandingSliderItem'
import Container from './Container'

const LandingSlider = ({ projects }) => {
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

  if (projects.length > 0) {
    return (
      <div>
        <div className='project-slider'>
          <Container>
            <Swiper {...params}>
              {projects.map((project, index) => (
                <SwiperSlide key={`landing_slider_${project.id}`}>
                  <LandingSliderItem project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
      </div>
    )
  }
  return null
}

export default LandingSlider
