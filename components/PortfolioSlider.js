import { useState, useRef } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Mousewheel])

import ProjectSliderItem from './ProjectSliderItem'
import Container from './Container'
import Gallery from './Gallery'

const PortfolioSlider = ({ talent }) => {
  const [galleryActive, setGalleryActive] = useState(false)
  const galleryRef = useRef()

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

  if (talent && talent.data) {
    return (
      <div>
        <div className='project-slider'>
          <Container>
            <Swiper {...params}>
              <SwiperSlide>
                <h2>
                  <span className='font-heading text-5xl'>Portfolio</span>
                </h2>
              </SwiperSlide>
              {talent.data.portfolio.map((item, index) => (
                <SwiperSlide key={`portfolio_gallery_${talent.id}_${index}`}>
                  <ProjectSliderItem
                    item={item}
                    openGallery={() => {
                      setGalleryActive(true)
                      if (galleryRef.current && galleryRef.current.swiper) {
                        galleryRef.current.swiper.slideTo(index, 0)
                      }
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </div>
        <Gallery
          docId={talent.id}
          gallery={talent.data.portfolio}
          title={talent.data.name}
          subtitle={null}
          isActive={galleryActive}
          closeGallery={() => { setGalleryActive(false) }}
          ref={galleryRef}
        />
      </div>
    )
  }
  return null
}

export default PortfolioSlider
