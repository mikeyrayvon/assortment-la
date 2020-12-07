import { forwardRef } from 'react'
import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CgMinimizeAlt, CgArrowRight, CgArrowLeft } from 'react-icons/cg'

SwiperCore.use([Mousewheel])

import GalleryItem from './GalleryItem'

const Gallery = forwardRef((props, ref) => {
  const { docId, gallery, isActive, closeGallery } = props

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
    slideToClickedSlide: true
  }

  return (
    <div className={'gallery fixed bg-white inset-0 z-50 flex items-center transition-opacity' + (isActive ? '' : ' opacity-30 pointer-events-none')}>
      <Swiper
        {...params}
        ref={ref}
        onSwiper={() => { console.log('init swiper') }}
        onBeforeDestroy={() => { console.log('destroy') }}
        onImagesReady={() => { console.log('images ready') }}
      >
        {gallery.map((item, index) => {
          return (
            <SwiperSlide key={`gallery_${docId}_slide_${index}`}>
              <figure>
                <picture>
                  <img src={item.image.url} />
                </picture>
              </figure>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='absolute top-0 right-0 p-12 cursor-pointer z-10 text-4xl fill-gray-dark' onClick={() => {
        closeGallery()
      }}><CgMinimizeAlt /></div>
    </div>
  )
})

export default Gallery
