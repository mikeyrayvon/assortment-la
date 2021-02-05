import { useState, useEffect } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

SwiperCore.use([Mousewheel])

import LandingSliderItem from './LandingSliderItem'
import LandingSliderTitles from './LandingSliderTitles'
import Container from './Container'

const LandingSlider = ({ docs, shouldAnimate }) => {
  const [hoveredId, setHoveredId] = useState('')

  useEffect (()=>{
    if (docs.length > 0 && shouldAnimate) {
      gsap.from('.project-slider', {
        scrollTrigger: {
          scrub: true,
          start: 100,
          end: 350
        },
        scale: .5,
        transformOrigin: '5% 0%',
        ease: 'power1.inOut'
      });
    }
  }, [shouldAnimate])

  const params = {
    spaceBetween: 120,
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
    return (
      <div className='landing-slider-wrapper relative'>
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
