import SwiperCore, { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Mousewheel])

import GalleryItem from './GalleryItem'

const Gallery = ({ docId, gallery }) => {
  console.log(gallery)

  const params = {
    spaceBetween: 120,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopedSlides: 50,
    mousewheel: {
      forceToAxis: true,
      preventSwipeThresholdDelta: 120,
      preventSwipeThresholdTime: 3000
    },
    slideToClickedSlide: true,
  }

  return (
    <div className='gallery fixed bg-white inset-0 z-50 flex items-center'>
      <Swiper {...params}>
        {gallery.map((item, index) => {
          return (
            <SwiperSlide key={`gallery_${docId}_slide_${index}`}>
              <GalleryItem item={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Gallery
